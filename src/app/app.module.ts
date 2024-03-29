import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';


var firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "ionic-chat-starter-184a1.firebaseapp.com",
  databaseURL: "https://ionic-chat-starter-184a1.firebaseio.com",
  projectId: "ionic-chat-starter-184a1",
  storageBucket: "ionic-chat-starter-184a1.appspot.com",
  messagingSenderId: "108653927436",
  appId: "1:108653927436:web:abd765360fafa0b7"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
