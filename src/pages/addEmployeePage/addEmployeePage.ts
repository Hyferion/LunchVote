import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {EmployeesProvider} from '../../providers/employees/employees';
import {HomePage} from "../home/home";
import {LunchService} from "../../providers/lunch/lunch";
import {VoteService} from "../../providers/vote/vote";
import {RestaurantServiceProvider} from "../../providers/restaurant-service/restaurant-service";
import {LunchVoteSession} from "../../session/lunch-vote-session";
import {EmployeesPage} from "../employees/employees";

@Component({
    selector: 'employees-list',
    templateUrl: 'addEmployeePage.html',
    providers: [RestaurantServiceProvider, LunchService, VoteService]
})
export class AddEmployeePage {


constructor(public restaurantService: RestaurantServiceProvider,
            public lunchService: LunchService,
            public voteService: VoteService,
            public alertCtrl: AlertController,
            public sessionService: LunchVoteSession,
            public navController: NavController){

}

submitEmployee(){

this.navController.push(EmployeesPage);
}

}
