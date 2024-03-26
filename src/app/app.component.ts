import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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

  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();


  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog ){

  }

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.dataSource.sort = this.sort;
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

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Vishwas'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logData(row: any){
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
