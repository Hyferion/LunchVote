import {Injectable} from '@angular/core';


@Injectable()
export class LunchVoteSession {

    protected data:any = {
        "user": ""
    };

    constructor() {
        // this.data['user'] = window.localStorage.user;
        console.log(window.localStorage.user);
    }

    public hasUser():boolean {
        return this.data['user'];
    }

    public getUser():string {
        return this.data['user'];
    }

    public setUser(user:string) {
        this.data['user'] = user;
        window.localStorage.user = user;
    }
}

