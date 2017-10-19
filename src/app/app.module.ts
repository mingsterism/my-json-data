import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookList } from './book-list.component';
import { BookListService } from './book-list.services'
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BookList
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BookListService, 
    HttpClient, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
