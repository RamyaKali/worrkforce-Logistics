import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';
import { GlobalConstant } from 'src/app/common/global.constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {


empdata : any [] = [];

  constructor(private apiService: ApiService,
              private sessionService: SessionService,
              private router:Router
  ){}

  ngOnInit(): void {
    
  }

  viewEmpDetails(){    
    this.apiService.getEmpApi(this.sessionService.getUserSession()).subscribe(
      (response : any)=>{
        this.empdata = response;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteEmpdata(empdata:any){
    console.log(empdata);
  }
}