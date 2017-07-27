import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HttpModule} from '@angular/http';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// import { PeopleServiceProvider } from '../providers/people-service/people-service';
// import { EmployeesProvider } from '../providers/employees/employees';
import {LunchVoteConfig} from "../config/lunch-vote-config";
import {LunchVoteSession} from "../session/lunch-vote-session";
import {EmployeesPage} from "../pages/employees/employees";
import {SplittingPage} from "../pages/splitting/splitting";
import {AddEmployeePage} from "../pages/addEmployeePage/addEmployeePage";
import {RestaurantPage} from "../pages/restaurantPage/restaurantPage";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        EmployeesPage,
        SplittingPage,
        RestaurantPage,
        AddEmployeePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        EmployeesPage,
        SplittingPage,
        RestaurantPage,
        AddEmployeePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        // PeopleServiceProvider,
        // EmployeesProvider,
        LunchVoteConfig,
        LunchVoteSession
    ]
})
export class AppModule {
}
