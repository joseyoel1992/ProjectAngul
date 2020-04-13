import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public buscar: string;
  constructor(public infoPaginaService: InfoPaginaService, private route: Router) { }
  ngOnInit(): void {

  }

  buscarProductos(){
    console.log(this.buscar);


  }
}
