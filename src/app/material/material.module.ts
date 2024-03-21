import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

const MaterialComponents = [
  MatButtonModule,//Botones
  MatButtonToggleModule,//Grupo de botones - botones anidados
  MatIconModule,//Iconos
  MatBadgeModule,//Notificaciones
  MatProgressSpinnerModule,//Barra de progreso - Cargando
  MatToolbarModule,//Navbar
  MatSidenavModule,

]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {


}

