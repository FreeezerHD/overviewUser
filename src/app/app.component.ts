import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'overViewUser';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBAWtPlZGlpFovF6xcA5om2LzwNMbBlt-U',
      authDomain: 'verwaltung-app.firebaseapp.com',
    });
  }

}
