import {Injectable} from '@angular/core';

@Injectable()
export class LunchVoteConfig {

    protected data:any = {
        "rest_endpoint": "http://192.168.99.78:5000"
    };

    /**
     * Get a config value
     * @param key
     */
    public get(key:string):any {
        if (!this.data.hasOwnProperty(key)) {
            return null;
        }
        return this.data[key];
    }
}

