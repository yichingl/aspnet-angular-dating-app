import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App!';
  users: any;

  constructor(private http: HttpClient) {
    this.ngOnInit();
  }

  /*
   * Purpose: initializes the class by requesting list of users
   */
  ngOnInit(): void {
    this.http.get('https://localhost:44321/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
