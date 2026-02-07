import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing-module';
import { Mod1Module } from '../mod1/mod1-module';
import { TablePage } from './table-page/table-page';

@NgModule({
  declarations: [TablePage],
  imports: [CommonModule, Mod2RoutingModule, Mod1Module],
})
export class Mod2Module {}
