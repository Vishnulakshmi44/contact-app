import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit{

  allGroups:any=[]//To hold group Information

  // contactName:string='';
  contact:MyContact={}//all contact details in the form object

  constructor(private api:ApiService, private router:Router){
  this.contact.GroupId="Select a Group";
}
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data;
      
    })
   
  }

  addContact(){
    this.api.addcontact(this.contact).subscribe((result:any)=>{
this.router.navigateByUrl('')
    })
  }
}
