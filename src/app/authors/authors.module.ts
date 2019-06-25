import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'  
import { MatPaginatorModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { AuthorsRoutingModule } from './authors-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule 
  ]
})
export class AuthorsModule { }
