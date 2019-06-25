import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author'
import { Book } from '../../models/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [AuthorService]
})
export class IndexComponent implements OnInit {

  public authors = new Array<Author>();
  public books: Book[] = new Array<Book>();

  constructor(private _authorService: AuthorService) { }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'actions'];
  dataSource = new MatTableDataSource<Author>(this.authors);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  delete(id: number) {
    this._authorService.delete(id).subscribe(
      data => {
        this.getAuthors();    
      }, 
      error => {
        console.log(error.error)
      }
    );
  }

  setBooks(books: Book[]) {
    this.books = books
  } 

  getAuthors() {
    this._authorService.getAll().subscribe(data => {
      this.authors = data
      this.dataSource = new MatTableDataSource<Author>(this.authors);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {

    this.getAuthors();

  }

}
