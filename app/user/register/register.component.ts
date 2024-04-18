import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  reg_userName: string = "";
  reg_contactNumber: number =0;
  reg_pswd: string = "";
  reg_cfm_pswd : string = "";

  constructor ( private sessionService: SessionService,
    private router:Router,
    private apiService:ApiService
){}


ngOnInit():void{
  this.reg_userName="";

} 
}

