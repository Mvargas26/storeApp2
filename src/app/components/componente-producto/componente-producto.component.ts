import { Component, Input, inject } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import {  HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-componente-producto',
  templateUrl: './componente-producto.component.html',
  styleUrls: ['./componente-producto.component.css']
})
export class ComponenteProductoComponent {
  @Input() Producto!:Producto; //el signo ! es para indicar que se inicializara luego

  http = inject(HttpClient);
  ArrayProductos:Producto[]=[]; //lista de Producto que inicializa en vacio

  ngOnInit(){
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data:any)=>{
      this.ArrayProductos =data;
      console.log(this.ArrayProductos);
    });
  }

  getProductGroups(ArrayProductos: Producto[], groupSize: number) {
    const groups = [];
    for (let i = 0; i < ArrayProductos.length; i += groupSize) {
      groups.push(ArrayProductos.slice(i, i + groupSize));
    }
    return groups;
  }
}
