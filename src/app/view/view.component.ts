import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  onSubmit(){
    console.log("work");
    // this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=>{
    //   this.gotoEmployee();

    // })
      
  }
}
