import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstant } from '../common/global.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }


  getApi(apiUrl:string){
    return this.httpClient.get(apiUrl);
  }

  postApi(apiUrl:string, request:any){
    return this.httpClient.post(apiUrl, request);
  }

  putApi(apiUrl:string, request:any){
    return this.httpClient.put(apiUrl, request);
  }

  deleteApi(apiUrl:string){
    return this.httpClient.delete(apiUrl);
  }

  getLoginUser(userName: string, pswd:string){
    let apiUrl = GlobalConstant.userApiURL + "?username=" + userName + "&password=" + pswd;
    return this.getApi(apiUrl);
  }

  addEmpApi(request : any){
    return this.postApi(GlobalConstant.empApiURL, request);
  }

  getEmpApi(userName: string){
    let apiUrl = GlobalConstant.empApiURL + "?username=" + userName;
    return this.getApi(apiUrl);
  }

}
