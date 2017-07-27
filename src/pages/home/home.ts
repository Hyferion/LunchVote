import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {LunchService} from "../../providers/lunch/lunch";
import {VoteService} from "../../providers/vote/vote";
import {RestaurantServiceProvider} from "../../providers/restaurant-service/restaurant-service";
import {LunchVoteSession} from "../../session/lunch-vote-session";
import {EmployeesPage} from "../employees/employees";
import {SplittingPage} from "../splitting/splitting";
import {AddEmployeePage} from "../addEmployeePage/addEmployeePage";
import {RestaurantPage} from "../restaurantPage/restaurantPage";


@Component({
    selector: 'page-home',
    providers: [RestaurantServiceProvider, LunchService, VoteService],
    templateUrl: 'home.html'
})
export class HomePage {

    public restaurants: any;
    protected user:string = '';
    protected winnerRestaruantId:number = 0;

    constructor(public restaurantService: RestaurantServiceProvider,
                public lunchService: LunchService,
                public voteService: VoteService,
                public alertCtrl: AlertController,
                public sessionService: LunchVoteSession,
                public navController: NavController) {
    }

    ionViewDidLoad() {
        if (this.sessionService.hasUser()) {
            this.user = this.sessionService.getUser();
            this.loadRestaurants();
        } else {
            this.user = '';
            this.navController.setRoot(EmployeesPage);
        }
    }

    loadRestaurants() {
        return this.restaurantService.load()
            .then(data => {
                this.restaurants = data;
                return Promise.resolve(data);
            });
    }

    vote(restaurant_id: number) {
        this.voteService.vote(restaurant_id, this.sessionService.getUser()).then(() => {
            this.loadRestaurants();
        }).catch(() => {
            let alert = this.alertCtrl.create({
                title: '',
                subTitle: 'Du Schlingel, Du kannst nur einmal pro Tag abstimmen!',
                buttons: ['OK']
            });
            alert.present();
        })
    }

    doSplitting() {
        this.navController.push(SplittingPage);
    }

    haveLunch() {
        this.lunchService.haveLunch().then((winner_restaurant_id:number) => {
            this.loadRestaurants();
            this.winnerRestaruantId = winner_restaurant_id;
        });
    }

    addRestaurant(){
    this.navController.push(RestaurantPage);
    }
}
