import { Routes } from '@angular/router';

export const routes: Routes = [{ 
    path: '', 
    loadChildren: () => import('./mod2/mod2-module').then(m => m.Mod2Module) 
  }];
