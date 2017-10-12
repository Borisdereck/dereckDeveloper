import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  animations: [
    trigger('bounce', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate(1000)
      ]),

      transition('void => *', [
        // style({ backgroundColor: 'rgb(236, 64, 122)', opacity: 1 }),
        animate(2000)
      ]),
    ])
  ]
})
export class ToDoComponent implements OnInit {
  items = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor() { }
  addItem(itemInput) {

  }

  removeItem(item) {

  }
  ngOnInit() {
  }

}
