import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

     private baseURL="http://localhost:8080/api/v1/employee";
     
      
     constructor(private httpclient:HttpClient) { }

     getEmployeeList():Observable<Employee[]>{
      return this.httpclient.get<Employee[]>(`${this.baseURL}`);


     }
     createEmployee(employee:Employee):Observable<object>{
      return this.httpclient.post(`${this.baseURL}`,employee);
     }
     getEmployeebyId(id:number):Observable<Employee>{
      return this.httpclient.get<Employee>(`${this.baseURL}/${id}`);
    }
    updateEmployee(id:number,employee:Employee):Observable<object>{
      return this.httpclient.put(`${this.baseURL}/${id}`,employee);
    }
    deleteEmployee(id:number):Observable<object>{
      return this.httpclient.delete(`${this.baseURL}/${id}`);
    }
    // viewEmployeeList():Observable<Employee[]>{
    //   return this.httpclient.get<Employee[]>(`${this.baseURL}`);
    
// }

}