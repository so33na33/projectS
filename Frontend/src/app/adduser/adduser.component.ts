import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  register={
    name:"",
    address:"",
    phoneno:"",
    email:"",
    username:"",
    password:""
  }
  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
  }
Adduser(){
  console.log(this.register)
  this.api.adduser(this.register).subscribe(
    (response)=>{
      if(!response.message){
      alert("Successfully Added");
      console.log(response)
      }
      if(response.message){
        console.log("hi")
         this.message=response.message
         console.log(this.message)
      }
    }
  )
}

message:any=[]
}
