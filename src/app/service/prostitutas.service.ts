import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
  import { Prostituta }  from '../modelo/prostituta'

@Injectable({
  providedIn: 'root'
})
export class ProstitutasService {
  prostituta:Prostituta[]
  constructor(
    private http: HttpClient, 
  )
  {}

  getAllProstitutas(){
     return this.http.get<Prostituta[]>("http://localhost:8080/api/v1/prostitutas");

    //const headersx = this.getHeaders();
    // return this.http.get("localhost:8080/api/v1/prostitutas",
    // {headers: this.getHeaders()});
  }

  // createProstitutas(prostituta : Prostituta){
  //   return this.http.post("http://localhost:8080/api/v1/prostitutas",prostituta)
  // }

  createProstitutas(prostituta : Partial<Prostituta>){
    return this.http.post("http://localhost:8080/api/v1/prostitutas",prostituta)
  }


  // getHeaders(): any {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json');
  //   return headers;
  // }
}
