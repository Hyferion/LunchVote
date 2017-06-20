import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EmployeesProvider} from '../../providers/employees/employees';
import {LunchVoteSession} from "../../session/lunch-vote-session";
import {HomePage} from "../home/home";
import {RestaurantServiceProvider} from "../../providers/restaurant-service/restaurant-service";
import {SplittingService} from "../../providers/splitting/splitting";

@Component({
    selector: 'splitting-list',
    templateUrl: 'splitting.html',
    providers: [RestaurantServiceProvider, SplittingService]
})
export class SplittingPage {

    protected restaurants;
    protected data = {};

    constructor(protected restaurantService: RestaurantServiceProvider,
                protected splittingService: SplittingService,
                protected navController: NavController) {
    }

    ionViewDidLoad() {
        this.restaurantService.load().then(restaurants => {
            this.restaurants = restaurants;
            for (let i in restaurants) {
                let restaurant = restaurants[i];
                this.data[restaurant.id] = 0;
            }
        });
    }

    public split() {
        console.log(this.data);
        let splittingData = [];
        for (let restaurantId in this.data) {
            let count = this.data[restaurantId];
            if (count > 0) {
                splittingData.push({
                    restaurant_id : restaurantId,
                    count: count
                });
            }
        }
        this.splittingService.split(splittingData).then(() => {
            console.log('splitting okay');
            this.navController.setRoot(HomePage);
        }).catch(() => {
            console.log('falied');
        });
    }
}
