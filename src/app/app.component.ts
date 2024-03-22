import { Component } from '@angular/core';

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
}
