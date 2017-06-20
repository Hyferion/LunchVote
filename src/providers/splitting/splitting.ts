import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {LunchVoteConfig} from "../../config/lunch-vote-config";

@Injectable()
export class SplittingService {

    constructor(public http: Http, public config: LunchVoteConfig
    ) {

    }

    public split(data) {
        return new Promise((resolve, reject) => {
            let endpoint = this.config.get('rest_endpoint') + '/splitting';
            let body = 'data=' + JSON.stringify(data);
            console.log(body);
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(endpoint, body, {headers: headers})
                .subscribe(data => {
                    console.log(data);
                    resolve(data);
                },
                error => {
                    reject('error');
                });
        });
    }

}
