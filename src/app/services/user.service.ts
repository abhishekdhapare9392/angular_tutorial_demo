import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
  

export class UserService {

  users: User[];
  data!: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2021 18:00:00'),
        hide: true
      },
      {
        firstName: 'Steve',
        lastName: 'Smith',
        email: 'steve@gmail.com',
        isActive: false,
        registered: new Date('03/06/2020 10:30:00'),
        hide: true
      },
      {
        firstName: 'Susan',
        lastName: 'Johnson',
        email: 'susan@gmail.com',
        isActive: true,
        registered: new Date('12/25/2021 12:30:00'),
        hide: true
      }
    ]
  }

  getData() { 
    this.data = new Observable(observer => { 
      setTimeout(() => { 
        observer.next(1); 
      }, 1000)

      setTimeout(() => { 
        observer.next(2); 
      }, 2000)

      setTimeout(() => { 
        observer.next(3); 
      }, 3000)
    
    })

    return this.data;
  }
  
  getUsers(): Observable<User[]> { 
    return of(this.users);
  }

  addUser(user:User) { 
    this.users.unshift(user);
  }
}
