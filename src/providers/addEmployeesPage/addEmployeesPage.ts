import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EmployeesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class addEmployeesPageProvider {
	data1: any;
  constructor(public http: Http) {
    console.log('Hello EmployeesProvider Provider');
  }


 load() {
  if (this.data1) {
    // already loaded data
    return Promise.resolve(this.data1);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://192.168.99.41:5000/employees')
      .map(res => res.json())
      .subscribe(data1 => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data1 = data1;
        console.log(data1);
        resolve(this.data1);

      });
  });
}

}
