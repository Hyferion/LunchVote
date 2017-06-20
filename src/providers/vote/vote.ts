import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {LunchVoteConfig} from "../../config/lunch-vote-config";

@Injectable()
export class VoteService {

    constructor(public http: Http, public config: LunchVoteConfig
    ) {

    }

    public vote(restaurant_id:number, email:string) {
        return new Promise(resolve => {
            let endpoint = this.config.get('rest_endpoint') + '/vote';
            let body = 'restaurant_id=' + restaurant_id + '&email=' + email;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(endpoint, body, {headers: headers})
                .subscribe(data => {
                    console.log(data);
                    resolve(data);
                })
        });
    }

}
