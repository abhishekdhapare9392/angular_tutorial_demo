import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }


  ngOnInit() { 
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
              street: '50 Main St',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2021 18:00:00')
        },
        {
          firstName: 'Steve',
          lastName: 'Smith',
          age: 32,
          address: {
            street: '15 School St',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/06/2020 10:30:00')
        },
        {
          firstName: 'Susan',
          lastName: 'Johnson',
          age: 26,
          address: {
              street: '60 Mill St',
              city: 'Miami',
              state: 'FL'
          },
          isActive: true,
          registered: new Date('12/25/2021 12:30:00')
        }
      ]

      this.loaded = true;
  }

  addUser(user: User) { 
    this.users.push(user)
  }

 
}
