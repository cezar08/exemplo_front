import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [AuthorService]
})
export class IndexComponent implements OnInit {

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this._authorService.getAll().subscribe(data => {
      console.log(data)
    })

  }

}
