import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {LunchVoteConfig} from '../../config/lunch-vote-config'

/*
  Generated class for the EmployeesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestaurantPageProvider {
	data1: any;
  constructor(public http: Http, public config: LunchVoteConfig) {

  }

	    public submitRestaurant(data) {
	        return new Promise(resolve => {
	            let endpoint = this.config.get('rest_endpoint') + '/submitres';
							let body = 'data=' + JSON.stringify(data);
							console.log(body);
							/*
	            this.http.post(endpoint, null)
	                .subscribe(data => {
	                    resolve(data['_body']);
	                })*/
									let headers = new Headers();
			            headers.append('Content-Type', 'application/x-www-form-urlencoded');
			            this.http.post(endpoint, body, {headers: headers})
			                .subscribe(res => {
			                    console.log(data);
			                    resolve(data);
			                },
			                );
	        });
	    }

}
