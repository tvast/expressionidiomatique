import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Router }            from '@angular/router';

@Component({
  selector: 'view',
  templateUrl: 'app/expression.component.html',
})
export class ExpressionComponent implements OnInit {

	//cv: CV[] = [];
  expression = ["Etre lent comme un escargot","Etre lent comme une limace","Avoir une faim de loup", "Entre","chien et loup", "Etre connu comme le loup blanc","Se jeter dans la gueule du loup","Arriver comme un chien dans un jeu de quilles"];
  color : any = ["#3498db", "#1abc9c" , "#e67e22" , "#95a5a6"];

  colorRandom: string;

  show : boolean;
  expressionShowed : string; 

  reponse : string ;
  reponseArray = [{reponse : "ne pas être très rapide"}, {reponse :"avoir très faim"},{reponse :"trouver cela bizare"}]
  
  constructor(
    private router: Router)
     { }

  ngOnInit(): void {

     let ex = Math.floor((Math.random() * 6) + 1);
    this.expressionShowed = this.expression[ex]
    console.log(this.expressionShowed)

    let coloured = Math.floor((Math.random() * 3) + 1);
    this.colorRandom = this.color[coloured]
    console.log(this.colorRandom)
    document.getElementById("box").style.color = this.colorRandom;
    //document.getElementById("box").style.backgroundColor = this.colorRandom;

  }

   clicked() {
    this.show = !this.show;
  }

  reload() {
    location.reload ();
  } 
   
}
