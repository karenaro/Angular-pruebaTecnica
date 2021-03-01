import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicomponentsRoutingModule } from './api-components-routing.module';
import {ClienteComponents} from './cliente/cliente.components';
import {ProductoComponents} from './producto/producto.components';
import {SedeComponents} from './sede/sede.components';
import {VentaComponents} from './venta/venta.components';




@NgModule({
  declarations: [VentaComponents,SedeComponents,ProductoComponents,ClienteComponents],
  imports: [
    CommonModule,
    ApicomponentsRoutingModule
  ]
})
export class ApiComponentsModule { }
