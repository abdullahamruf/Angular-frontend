import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee(0, '', '', '', '');
  id: any ;


  constructor(private employeeservice: EmployeeService, private route: ActivatedRoute,private router:Router) {
  
    
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      
    });

 
    this.employeeservice.getEmployeebyId(this.id).subscribe(data=>{
      console.log("not working data",data)
      this.employee=data;
    });
  }

  onSubmit(){
    this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoEmployee();

    })
      
  }
  gotoEmployee(){
    this.router.navigate(["/employee"]);
  }
}
