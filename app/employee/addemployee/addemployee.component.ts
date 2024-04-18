import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class addemployeeComponent {
  empname:string="";
  mobilenumber:number=0;
  location : string = "";
  JobTitle:string = "" ;
  salary:string="";
  dateofjoining:string="";
  
  
  constructor(private router: Router, 
    private sessionService : SessionService,
    private apiService: ApiService){}

ngOnInit(): void {
this.sessionService.checkUserSession();
}
addEmployeedetails : string ='/listemployee'



addEmployee(){

let empReq = {
 
  "mobilenumber":this.mobilenumber,
  "location" : this.location,
  "JobTitle":this.JobTitle,
  "salary":this.salary,
  
  "empname": this.sessionService.getUserSession()
};
this.apiService.addEmpApi(empReq).subscribe(
() =>{
alert("Employee Added SuccesFully");
},
err => {
console.log(err);
}
);
}

redirectToViewEmployee(){
this.router.navigate(['/listemployee']);
}
}


