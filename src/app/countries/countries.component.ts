import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from "../services/countries-info.service";


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countryObj: any;
  public countriName: string;
  public contryList: any;

 
  
  constructor(private countriesInfo: CountriesInfoService) { }

  ngOnInit() {
    this.countriesInfo.getCountrie().subscribe(res => this.contryList = res.json());
  }

  public getCapitalInfo() {
    this.countriesInfo.getCountrieDetail(this.countriName).subscribe(res => this.countryObj = res.json()[0]);
  }

}

 
