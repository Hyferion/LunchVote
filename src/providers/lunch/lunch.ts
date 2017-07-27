import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {LunchVoteConfig} from "../../config/lunch-vote-config";

@Injectable()
export class LunchService {

    constructor(public http: Http, public config: LunchVoteConfig
    ) {

    }

    public haveLunch() {
        return new Promise(resolve => {
            let endpoint = this.config.get('rest_endpoint') + '/lunch';
            // let endpoint = 'http://192.168.99.53:5000/lunch';
            this.http.post(endpoint, null)
                .subscribe(data => {
                    resolve(data['_body']);
                })
        });
    }

}
