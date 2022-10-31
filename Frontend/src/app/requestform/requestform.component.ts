import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {
    apply={
      name:"",
      income:"",
      aadhar:"",
      pan:"",
      account:"",
      ifsc:""
  
  }

  constructor(private api:ApiService) { 
    api.viewrequest().subscribe(
      (response)=>{
        this.data=response
        console.log(this.data)
      }
    )
  }

  ngOnInit(): void {
  }
data:any=[]
}
