import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-books';

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyDU1qMGshk2Hf6M587O8b5iDthwVIoIZo8',
      authDomain: 'my-books-9d849.firebaseapp.com',
      databaseURL: 'https://my-books-9d849.firebaseio.com',
      projectId: 'my-books-9d849',
      storageBucket: 'my-books-9d849.appspot.com',
      messagingSenderId: '636279153017',
      appId: '1:636279153017:web:5e8d19184a188046ea8fa8',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
