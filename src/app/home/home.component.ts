import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = [1, 2];
  viewMode = 'map';
  coursesAng = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  email = "dereck@btg.com";

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.coursesAng.push(
      { id: 4, name: 'course 4' }
    )
  }

  onRemove(course) {

    let index = this.coursesAng.indexOf(course);
    this.coursesAng.splice(index, 1);
  }

  onKeyUp() {
    console.log(this.email);
  }

}
