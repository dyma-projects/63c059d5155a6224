import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() { }
  @Output("increment") incrementCompteur = new EventEmitter();
  @Input() result?:number = 0;

  ngOnInit() {
  }

  addResult(){
    this.result++;
    this.incrementCompteur.emit({
      value: this.result
    });
    
    
  }

  decResult(){
    this.result--;
    this.incrementCompteur.emit({
      value: this.result
    });
  }
 
  
  

}
