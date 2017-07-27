import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {EmployeesProvider} from '../../providers/employees/employees';
import {HomePage} from "../home/home";
import {LunchService} from "../../providers/lunch/lunch";
import {VoteService} from "../../providers/vote/vote";
import {RestaurantServiceProvider} from "../../providers/restaurant-service/restaurant-service";
import {LunchVoteSession} from "../../session/lunch-vote-session";
import {RestaurantPageProvider} from "../../providers/restaurantsPage/restaurantsPage"




@Component({
    selector: 'restaurant-service',
    templateUrl: 'restaurantPage.html',
    providers: [RestaurantServiceProvider, LunchService, VoteService, RestaurantPageProvider]
})
export class RestaurantPage {


protected restaurants;
protected data = {};
$http;
constructor(public restaurantService: RestaurantServiceProvider,
            public lunchService: LunchService,
            public voteService: VoteService,
            public alertCtrl: AlertController,
            public sessionService: LunchVoteSession,
            public navController: NavController,
          public restaurantPageProvider: RestaurantPageProvider){

}

saveRestaurant() {

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



submitRestaurant(){
  console.log(this.data);
  console.log('im here');
  let addedRestaurant = [];
  for (let restaurantId in this.data) {
      let count = this.data[restaurantId];
      if (count > 0) {
          addedRestaurant.push({
              restaurant_id : restaurantId
          });
      }
  }
  try {
  this.restaurantPageProvider.submitRestaurant(addedRestaurant).then(() => {
      console.log('restaurant added');
      this.navController.setRoot(HomePage);
  }).catch(() => {
      console.log('failed');
  });
}
finally{
  console.log('finally');
}
}
}
