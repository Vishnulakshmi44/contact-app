import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {// localhost:4200 -> localhost:4200/contactManager
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },

  //listing all contact details
  {
    path:'contactManager',component:ContactManagerComponent
  },

  // add new contact->  localhost:4200/contactManager/addcontact
  {
    path:'contactManager/addcontact',component:AddContactsComponent
  },
  // View a particular contact
  {
    path:'contactManager/viewcontact/:Id',component:ViewContactComponent
  },

  //edit a particular contact
  {
    path:'contactManager/editcontact/:contactId',component:EditContactComponent
  },
  //create page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
