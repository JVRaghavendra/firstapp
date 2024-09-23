import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  //Step1:Create propery at parent component
  //parentproperty: datatype=value;
  phonenumber:string='970199923';

  constructor() { }

  ngOnInit(): void {
  }

}
//   class parentcomponent
  // {
  // parentproperty: datatype;
  // …
  // }