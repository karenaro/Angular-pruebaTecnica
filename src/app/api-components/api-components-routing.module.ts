import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClienteComponents} from './cliente/cliente.components';
import {ProductoComponents} from './producto/producto.components';
import {SedeComponents} from './sede/sede.components';
import {VentaComponents} from './venta/venta.components';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cliente',
        component: ClienteComponents,
        data: {
          title: 'Cliente'
        }
      }, {
        path: 'sede',
        component: SedeComponents,
        data: {
          title: 'Sede'
        }
      }, {
        path: 'producto',
        component: ProductoComponents,
        data: {
          title: 'Producto'
        }
      }, {
        path: 'venta',
        component: VentaComponents,
        data: {
          title: 'Venta'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApicomponentsRoutingModule { }
