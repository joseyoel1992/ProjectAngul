import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripción.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public producto: ProductoDescripcion = {};
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
public id: string;
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(params.id);

      this.productService.getProductParam(params.id).subscribe(
        (resp: ProductoDescripcion) => {
          this.producto = resp;
          console.log(resp);

        });

    });


  }

}
