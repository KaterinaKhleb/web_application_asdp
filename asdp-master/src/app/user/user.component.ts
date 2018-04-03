import { Component } from '@angular/core';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styles: ['::placeholder { color:grey }']
})

export class UserComponent {
    
/* User component represents the general view of the user page,
 which does not contain backe/end functionality, but only uses two-way binding.
 All the main functionality with the server/side is represented in pages ORDERS and ARCHIEVE */
   first_name = "John"
  last_name = "Koecher"
  username = "johnkoecher"
  phone = "+358418093063"
  about_me = "Active, happy student. Love chocolate!"
  address = "Raviradantie 2/5, ap.9"
  city = "Mikkeli"
  postcode = "50100"
  country = "Finland"
}


