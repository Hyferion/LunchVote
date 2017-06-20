import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import {LunchService} from "../../providers/lunch/lunch";
import {VoteService} from "../../providers/vote/vote";



@Component({
  selector: 'page-home',
  providers: [PeopleServiceProvider, LunchService, VoteService],
  templateUrl: 'home.html'
})
export class HomePage {
	public restaurants:any;

  constructor(public peopleService: PeopleServiceProvider, public lunchService: LunchService, public voteService: VoteService){
  	this.loadRestaurants();

  }
  loadRestaurants(){
  	this.peopleService.load()
  	.then(data => {this.restaurants = data;});
  }

  voteOne(){
  	this.peopleService.setVote();

  }

  vote(restaurant_id:number) {
      let fakeUser = 'gc@studer-raimann.ch';
      this.voteService.vote(restaurant_id, fakeUser).then(() => {
          console.log('Vote sucessful');
      })
  }

  haveLunch() {
      this.lunchService.haveLunch().then(restaurant => {
          console.log(restaurant);
      });
  }

}
