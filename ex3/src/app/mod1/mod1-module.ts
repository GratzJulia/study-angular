import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing-module';
import { Table } from './table/table';


@NgModule({
  declarations: [Table],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ],
  exports: [Table]
})
export class Mod1Module { }
