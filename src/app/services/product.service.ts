import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/productInterface.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Array<ProductInterface>;
  public cargando = true;
  public productosFiltrados: ProductInterface[];

  constructor(private http: HttpClient) {
    this.getProduct();
  }

  private getProduct() {

    return new Promise ((resolve, reject) =>{
    this.http.get('https://angular-html-c9b39.firebaseio.com/productos_idx.json').subscribe(
      (result: Array<ProductInterface>) => {
        this.product = result;
        this.cargando = false;
        console.log(this.product);
        resolve();
        //Falta completar la parte de las promesas para el buscador
      }
    );
  });
  }
  getProductParam(id: string) {
    return this.http.get(" 'https://angular-html-c9b39.firebaseio.com/productos/' + id + '.json' ");
    // El argumento de get también podría representarse así:
    // `https://angular-html-c9b39.firebaseio.com/productos/${ id }.json`
    // Es un template nueva del EC6
  }

  buscarProdFilt(termino: string) {
    this.productosFiltrados = this.product.filter(producto => {
      return true;
    });
    // console.log(this.productosFiltrados);
  }
}
