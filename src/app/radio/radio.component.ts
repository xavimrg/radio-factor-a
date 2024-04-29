import { Component, OnInit } from '@angular/core';
import radios from '../data/radio.json' // el nombre emisoras se pone como quieras, y angular asume que el [] es el del archivo que genero. 
import { FormsModule } from '@angular/forms';
import {Radio} from '../interfaces/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit {
title = "radiosingular"; // le damos una propiedad a un clase - definir una clase
valuePlaceholder  = "escribe el nombre de la emisora";
radioSations: Radio[] = [];
inputValue: string = ""; 
filterArray!:Radio[];

ngOnInit(): void {
  this.radioSations = radios;
}


searchRadio(){
  console.log(this.inputValue)
  this.filterArray= this.radioSations.filter((radio:Radio) => 
    radio.name.includes(this.inputValue)
  )
}

}
