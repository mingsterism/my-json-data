import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookList } from './book-list.component';
import { BookView } from './book-view.component'
import { BookListService } from './book-list.services'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { HighlightDirective } from './Directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    BookList, 
    BookView,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
  ],
  providers: [
    BookListService, 
    HttpClient, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
