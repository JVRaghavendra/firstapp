import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  //Step3:Create propery at child component and used @Input decorator to receive the data from any component
  
  @Input() companyPhoneNumber: string = '';

}
