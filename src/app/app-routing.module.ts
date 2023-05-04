import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path : 'employee',component :EmployeeListComponent},
{path : 'create-employee', component :CreateEmployeeComponent},
{path : '',  redirectTo : 'employee' ,pathMatch:'full'},
{path : 'update-employee/:id' , component: UpdateEmployeeComponent},
{path : 'update-employee/:id' , component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
