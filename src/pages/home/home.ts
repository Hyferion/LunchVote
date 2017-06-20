import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';



@Component({
  selector: 'page-home',
  providers: [PeopleServiceProvider],
  templateUrl: 'home.html'
})


export class HomePage {
	public restaurants:any;

  constructor(public peopleService: PeopleServiceProvider){
  	this.loadRestaurants();

  }
  loadRestaurants(){
  	this.peopleService.load()
  	.then(data => {this.restaurants = data;});
  }

  voteOne(){
  	this.peopleService.setVote();

  }

}
