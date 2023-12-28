import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId: string = ''// To hold Id of contact
  contact: any = [] // To hold the contact information
  groupId: string = ''//To hold the group id of the contact
  groupName: string = ''//To hold the group name
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);// Id:":1Id" object
      console.log(data.Id);// 1Id
      this.contactId = data.Id;//1
      //get details of particular content
      this.api.viewContactDetails(this.contactId).subscribe((result: any) => {
        console.log(result);//contact details - object
        this.contact = result
        this.groupId = result.GroupId
        console.log(this.groupId);


        this.api.getGroupName(this.groupId).subscribe((data: any) => {
          console.log(data);//{id: '1', name: 'company'}
          this.groupName = data.name
          console.log(this.groupName);//company

        })


      })
    })
  }
}
