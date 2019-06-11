import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.sass'],
  providers: [AuthorService]
})
export class SaveComponent implements OnInit {

  public author = new Author();

  constructor(private _authorService: AuthorService, private _router: Router, private _activedRouter: ActivatedRoute) { }

  submit() {
    if (this.author.id > 0) {
      this._authorService.update(this.author.id, this.author).subscribe(data => {
        console.log(data)
        this._router.navigate(['/authors'])
      }, error => {
        console.log(error)
      })
    } else {
      this._authorService.create(this.author).subscribe(data => {
        console.log(data)
        this._router.navigate(['/authors'])
      }, error => {
        console.log(error)
      })
    }
  }

  back() {
    this._router.navigate(['/authors'])
  }

  ngOnInit() {
    let id = Number(this._activedRouter.snapshot.paramMap.get('id'));
    
    if (id > 0) {
      this._authorService.get(id).subscribe(
        data => {
          this.author = data;
        },
        error => {
          console.log(error);
        }
      )
    } 

  }

}
