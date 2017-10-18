import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {
  firstName: string = 'boris';
  lastName: string;
  city: string;
  country; string;
  sexo: string;
  email: string;
  address: string

  constructor() { }

  ngOnInit() {
  }

  formSubmit(data){
    console.log('Data => ', data);
  }


}
