import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material'  
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import {BooksModule} from './books/books.module';
import {AuthorsModule} from './authors/authors.module';


import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AuthorsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
