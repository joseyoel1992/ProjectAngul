import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: infoPaginaInterface={};
  public equipo:any;

  constructor(private http: HttpClient) {

  this.cargarInfo();
  this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe(
      (result: infoPaginaInterface) => {
        this.info=result;
      }
    );
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-c9b39.firebaseio.com/equipo.json').subscribe(
      (result: any) => {
        this.equipo=result;
        console.log(result);
      }
    );
  }

}
