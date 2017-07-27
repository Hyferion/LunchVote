import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EmployeesProvider} from '../../providers/employees/employees';
import {LunchVoteSession} from "../../session/lunch-vote-session";
import {HomePage} from "../home/home";
import {AddEmployeePage} from "../addEmployeePage/addEmployeePage";
import {RestaurantPage} from "../restaurantPage/restaurantPage";

@Component({
    selector: 'employees-list',
    templateUrl: 'employees.html',
    providers: [EmployeesProvider]
})
export class EmployeesPage {
    employees: any;

    constructor(public employeesService: EmployeesProvider, public sessionService: LunchVoteSession, public navController: NavController) {
    }

    ionViewDidLoad() {
        this.loadEmployees();
    }

    loadEmployees() {
        this.employeesService.load().then(data => {
            this.employees = data;
        });
    }

    public selectAccount(email: string) {
        this.sessionService.setUser(email);
        this.navController.setRoot(HomePage);
    }
    addEmployee(){
    this.navController.push(AddEmployeePage);
    }

}
