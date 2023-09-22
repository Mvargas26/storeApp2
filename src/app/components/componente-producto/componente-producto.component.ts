import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-componente-producto',
  templateUrl: './componente-producto.component.html',
  styleUrls: ['./componente-producto.component.css']
})
export class ComponenteProductoComponent {
  @Input() Producto!:Producto; //el signo ! es para indicar que se inicializara luego
}
