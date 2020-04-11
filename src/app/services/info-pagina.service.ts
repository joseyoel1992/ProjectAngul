import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: infoPaginaInterface={};

  constructor(private http: HttpClient) {
    // console.log('Hola desde el servicio');
    this.http.get('assets/data/data-pagina.json').subscribe(
      (result: infoPaginaInterface) => {
        this.info=result;
        console.log(result.instagram);
      }
    );

  }
}
