import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = 'welcome to projetBI'
  color:string="blue";
  save() {
    alert('Data saved successfully!');
  }
}
