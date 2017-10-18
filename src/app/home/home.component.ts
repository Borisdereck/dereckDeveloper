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

  public employeRecord: any = [
    { eName: 'boris', ecity: 'New york', eSalary: 5000 },
    { eName: 'Jhon', ecity: 'Mumbay', eSalary: 70000 },
    { eName: 'Roger', ecity: 'ranchi', eSalary: 80000 },
    { eName: 'Steben', ecity: 'New york', eSalary: 5000 },

  ];

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

  public selectedEmployeData: any = {
    selectedName: '',
    selectedCity: '',
    selectedSalary: ''
  };
  getRecord(data: any): void {
    this.selectedEmployeData = data;
    console.log(JSON.stringify(this.selectedEmployeData));
    // console.log('Name: ' + this.selectedEmployeData.selectedName +
    //   ', City: ' + this.selectedEmployeData.selectedCity +
    //   ', Salary: ' + this.selectedEmployeData.selectedSalary );
  }

}
