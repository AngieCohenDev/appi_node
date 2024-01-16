import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) {}

  public getTechnologies(){
    return this._http.get<Technology[]>(this.baseUrl + "/technologies");
  }

  public getTechnology(id: string){
    return this._http.get<Technology>(this.baseUrl + "/technology" + id)
  }

  public searchTechnology(query: string){
    return this._http.get<Technology>(this.baseUrl + "/technology/search" + query)
  }    
}
