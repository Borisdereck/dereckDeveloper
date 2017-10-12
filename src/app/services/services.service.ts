import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  employeRecord = [
    { name: 'Boris', city: 'Amsterdam', age: '30', id: 'e1' },
    { name: 'Carlos', city: 'Las Palmas', age: '28', id: 'e2' },
    { name: 'Jacke', city: 'Curacao', age: '50', id: 'e3' }
  ];

  constructor() {
    console.log('Service Work..!!');
  }

  public getEmploye(id: string): any {
    let employee: any;
    for (let index = 0; index < this.employeRecord.length; index++) {
      if (id == this.employeRecord[index].id) {
        employee = this.employeRecord[index];
        break;
      }
    }
    return employee;
  }

}
