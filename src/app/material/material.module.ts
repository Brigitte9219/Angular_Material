import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';


const MaterialComponents = [
  MatButtonModule,//Botones
  MatButtonToggleModule,//Grupo de botones - botones anidados
  MatIconModule,//Iconos
  MatBadgeModule,//Notificaciones
  MatProgressSpinnerModule,//Barra de progreso - Cargando
  MatToolbarModule,//Navbar
  MatSidenavModule,//Menu lateral
  MatMenuModule,//Menu
  MatListModule,//Lista
  MatDividerModule,//Dividir secciones
  MatGridListModule,//Cuadricula - Filas y columnas
  MatExpansionModule,//Expansión del panel
  MatCardModule,//Tarjetas
  MatTabsModule,//Pestañas
  MatStepperModule,//Descripción de un paso a paso
  MatFormFieldModule,//Construir formularios
  MatInputModule,//Construir campos de entrada
  MatSelectModule,//Elementos de selección de formularios - Lista desplegable y/o con checkbox
  MatAutocompleteModule,//Autocompletar - filtro por búsqueda
  MatCheckboxModule,//Checkbox - cajas de texto
  MatRadioModule,//radio botones
  MatDatepickerModule,//Selector de fechas
  MatNativeDateModule,//Fecha nativa
  MatTooltipModule,//punta de herramienta - Funciona como un hover o letreros o indicaciones
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {


}

