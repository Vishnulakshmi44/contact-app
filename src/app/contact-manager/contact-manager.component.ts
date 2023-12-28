import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  searchkey: string = ''//To hold search value
  loginDate: any;// To hold system current date
  // to holdcontact details
  allContacts: any = [];
  // String Interpolation
  heading: string = 'Contact Details List';

  //api -dependency injection     

  constructor(private api: ApiService) {
    this.loginDate = new Date();
  }

  ngOnInit(): void {
    this.getAllContacts()
  }

  getAllContacts() {
    this.api.getAllContact().subscribe((data: MyContact) => {
      console.log(data); // array of contacts
      this.allContacts = data
    })

  }
  search(event: any) {
    console.log(event.target.value);
    this.searchkey = event.target.value

  }
  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((result: any) => {
      alert("Deleted Successfully")
      this.getAllContacts()
    })
  }
}

