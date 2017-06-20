import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeesProvider } from '../../providers/employees/employees';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [EmployeesProvider]
})
export class ListPage {
  item: any;


  constructor(public employees: EmployeesProvider) {
   this.loadEmployees();
  }

  loadEmployees(){
    this.employees.load().then(data=>{this.item = data;});
  }
}
