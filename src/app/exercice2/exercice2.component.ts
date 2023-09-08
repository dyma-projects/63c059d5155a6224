import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myinput', {static: true}) public el: ElementRef<HTMLInputElement>


  ngAfterViewInit() {
    
    this.valeur = this.el.nativeElement.value;
  }

  ngOnInit() {
  }

}
