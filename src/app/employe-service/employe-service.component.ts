import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services/services.service";

@Component({
  selector: 'app-employe-service',
  templateUrl: './employe-service.component.html',
  styleUrls: ['./employe-service.component.css']
})
export class EmployeServiceComponent implements OnInit {

  employeObj = [
    { name: 'null', city: 'null', age: 'null', id: 'null' }
  ];
  empId: any;

  constructor(private employeServ: ServicesService) { }

  ngOnInit() {
  }

  getEmployedetail(): void {
    this.employeObj = this.employeServ.getEmploye(this.empId);
  }

}
