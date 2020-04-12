import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPaginaInterface } from '../interfaces/info-pagina.interface';
// import { productInterface } from '../interfaces/productInterface.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: infoPaginaInterface = {};
  public equipo: any;
  // public product: Array<productInterface>;


  constructor(private http: HttpClient) {

  this.cargarInfo();
  this.cargarEquipo();
  // this.getProduct();

  }

  // private getProduct(){
    // this.http.get('https://angular-html-c9b39.firebaseio.com/productos_idx.json').subscribe(
      // (result: Array<productInterface>) => {
        // this.product = result;
        // console.log(this.product);
      // }
    // );
  // }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe(
      (result: infoPaginaInterface) => {
        this.info = result;
      }
    );
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-c9b39.firebaseio.com/equipo.json').subscribe(
      (result: any) => {
        this.equipo = result;
        // console.log(result);
      }
    );
  }

}
