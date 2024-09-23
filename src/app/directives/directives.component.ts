import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //NGIF & NGFOR

  show = true;

 // show = true ;

 mobiles = ['oneplus', 'redmi','iphone']

 //NGSwitch

 num1:number = 4;
 num2:number = 6;

 op:string='*';


  constructor() { }

  ngOnInit(): void {
  }

}
