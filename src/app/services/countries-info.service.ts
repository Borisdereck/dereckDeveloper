import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CountriesInfoService {

  constructor(private _http: Http) { 
    console.log('CountriesService work..!');
  }

  public getCountrieDetail(nameContrie: string) {
    let _url: string = 'https://restcountries.eu/rest/v2/name/' + nameContrie + '?fulltext=true';
    return this._http.get(_url);
  }

  public getCountrie() {
    let _url: string = 'https://restcountries.eu/rest/v2/all';
    return this._http.get(_url);
  }

}
