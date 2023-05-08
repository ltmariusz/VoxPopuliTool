import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  listPH = [
    {
      id: 0,
      name: 'Testowy tester',
      acronym: 12352343,
      email: "testowy@gmail.com",
      archived: false,
      activated: true
    },
    {
      id: 1,
      name: 'Koneser Koneserowicz',
      acronym: 54752343,
      email: "koneserowicz@gmail.com",
      archived: false,
      activated: false
    }
  ]

  editUser(id: number){

  }

}
