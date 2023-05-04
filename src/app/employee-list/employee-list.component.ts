import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
   employess:Employee[]=[] ;
   constructor( private employeeservice:EmployeeService,private router :Router){
  
   }
   
   ngOnInit():void{
  //   this.employess=[{
  //  "id" :1,
  //   "firstName":"xr",
  //   "lastName":"yt",
  //   "emailId":"y",
  //   "designation":"t"
  //   }];
       this.getEmployee();
   }
   getEmployee() {
    this.employeeservice.getEmployeeList().subscribe(data =>{
      this.employess=data;
    });
   
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee' ,id]);

  }
  deleteEmployee(id :number){
    this.employeeservice.deleteEmployee(id).subscribe(data=>{
      this.getEmployee();
    })
  }
  viewEmployee(id:number){
this.employeeservice.getEmployeebyId(id).subscribe(data=>{

})
  }
}
