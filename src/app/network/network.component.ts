import { Component, OnInit, ViewChild } from '@angular/core';
import { SimComponent } from '../sim/sim.component';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit  {

  networkname: string= "Airtel Network";
  @ViewChild(SimComponent) sim!: SimComponent;

    ngOnInit(): void {}

    onClickMeClicked(){
    console.log(this.sim);
    //ViewChild is used to access properties / methods of the child class.
    this.sim.simname='AIRTEL';
    this.sim.customername='vaasu';
    this.sim.custnumber='34567';
    this.sim.custaadhar='87654';
    this.sim.customeraddress='nlr';
    this.sim.pincode='500012';
    
  }
  
}
// class parentcomponent 
// { 
// @ViewChild(classname)  propertyname: classname; 
// … 
// }
// this.propertyname.property 
// this.propertyname.method( )