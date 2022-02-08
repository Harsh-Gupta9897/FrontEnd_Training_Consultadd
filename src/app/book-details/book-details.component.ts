import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';
import { Author } from '../user.interface';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  users: Author[] = []
  constructor(private httpService : HttpServiceService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.httpService.getAuthors().subscribe(users => this.users = users)
  }
}
