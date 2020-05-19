import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAsLZ5RM7tlfguxwcSG05sIUPBRvedhD8Q",
      authDomain: "push-notification-938b0.firebaseapp.com",
      databaseURL: "https://push-notification-938b0.firebaseio.com",
      projectId: "push-notification-938b0",
      storageBucket: "push-notification-938b0.appspot.com",
      messagingSenderId: "1050410967073",
      appId: "1:1050410967073:web:95f2374da8bb5d39440360",
      measurementId: "G-8MYFSCCV1S"
    }),
    AngularFireMessagingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
