import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/productInterface.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
public product: Array<ProductInterface>;
public cargando = true;
  constructor(private http: HttpClient) {
this.getProduct();
  }

  private getProduct(){
    this.http.get('https://angular-html-c9b39.firebaseio.com/productos_idx.json').subscribe(
      (result: Array<ProductInterface>) => {
        this.product = result;
        this.cargando = false;
        console.log(this.product);
      }
    );
  }
}
