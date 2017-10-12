import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  public selectecIde: string;
  public observerRef: any;

  constructor(private route: ActivatedRoute) {
    // this.selectecIde = route.snapshot.params['selectecIde'];
    

   }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe(params => {
      this.selectecIde = params['selectecIde'];
    });
  }

}
