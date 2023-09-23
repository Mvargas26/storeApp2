import { Component,inject } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeApp2';

  http = inject(HttpClient);
  ArrayProductos:Producto[]=[]; //lista de Producto que inicializa en vacio

  ngOnInit(){
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data:any)=>{
      this.ArrayProductos =data;
    });
  }
}
