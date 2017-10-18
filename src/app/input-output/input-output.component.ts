import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input('name') employeName: string;
  @Input('city') employeCity: string;
  @Input('salary') employeSalary: number;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();

    constructor() { }

  ngOnInit() {
  }

  public emitsentrecordevent(){
    let selectedEmployeObj: any = {
      selectedName: this.employeName,
      selectedCity: this.employeCity,
      selectedSalary: this.employeSalary
    };
    this.sendRecord.emit(selectedEmployeObj);

  }

}
