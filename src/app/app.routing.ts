import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/stock', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockComponent },
  { path: 'placeorder', component: PlaceorderComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);