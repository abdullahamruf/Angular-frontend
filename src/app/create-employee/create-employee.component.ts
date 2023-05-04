import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;
  employee: Employee = new Employee(0, '', '', '', '');

  constructor(private employeeservice: EmployeeService,private router :Router) {
    this.employeeForm = new FormGroup({
      'firstName': new FormControl(this.employee.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      'lastName': new FormControl(this.employee.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      'emailId': new FormControl(this.employee.emailId, [
        Validators.required,
        Validators.email
      ]),
      'designation': new FormControl(this.employee.designation, [Validators.required])
    });
  }
  

  


  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      'firstName': new FormControl(this.employee.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      'lastName': new FormControl(this.employee.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      'emailId': new FormControl(this.employee.emailId, [
        Validators.required,
        Validators.email
      ]),
      'designation': new FormControl(this.employee.designation, [Validators.required])
    });
  }

  saveEmployee() {
    this.employee = Object.assign(this.employee, this.employeeForm.value);
    this.employeeservice.createEmployee(this.employee).subscribe(data => {
      this.gotoEmployee();
    })
  }
  
  gotoEmployee(){
    this.router.navigate(["/employee"]);
  }
  
  onSubmit() {
    console.log(this.employeeForm.value);
    this.saveEmployee();
  }
}
