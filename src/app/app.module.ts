import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { AppRoutingModule } from './routes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { AsideComponent } from './front/aside/aside.component';
import { WelcomeAreaComponent } from './front/welcome-area/welcome-area.component';
import { PromoAreaComponent } from './front/promo-area/promo-area.component';
import { PostListComponent } from './front/post-list/post-list.component';
import { PageHomeComponent } from './front/page-home/page-home.component';
import { PagePostComponent } from './front/page-post/page-post.component';
import { CutTextPipe } from './cut-text.pipe';
import { PageCategoryComponent } from './front/page-category/page-category.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAOCwqGJhqt3mX-LPAFhKvm9sCGS6lwnqk',
  authDomain: 'cheerup-f7168.firebaseapp.com',
  databaseURL: 'https://cheerup-f7168.firebaseio.com',
  storageBucket: 'cheerup-f7168.appspot.com',
  messagingSenderId: '187281288264'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    WelcomeAreaComponent,
    PromoAreaComponent,
    PostListComponent,
    PageHomeComponent,
    PagePostComponent,
    CutTextPipe,
    PageCategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
