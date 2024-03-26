import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';

  notificaciones= 2;

  opened = false;

  showSpinner = false;

  selectedValue?: string;

  options: string[] = ['Angular','React','Vue'];

  objectOptions = [
    {name:'Angular'},
    {name:'Angular Material'},
    {name:'React'},
    {name:'Vue'},
  ];

  myControl = new FormControl();

  filteredOptions?: Observable<string[]>;

  //Cuenta los meses iniciando en 0 es decir abril es 3
  minDate = new Date();
  maxDate = new Date (2024, 3, 10);//disponibilidad de fechas hasta el 10 de abril

  /*
  Se usa para filtrar las fechas
  dateFilter = date => {
    const day = date.getDay();
    return date !== 0 && day !==6;
  }*/

  constructor(private snackBar: MatSnackBar){

  }

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue));
  }

  //Muestra el nombre del anterior arreglo de objetos
  displayFn(subject: any){
    return subject ? subject.name : undefined;
  }

  log(state: any){
    console.log(state);
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    }, 5000);
  }

  logChange(index: any){
    console.log(index);
  }

  openSnackBar(message: string, action: string | undefined){
    this.snackBar.open(message, action);
  }
}
