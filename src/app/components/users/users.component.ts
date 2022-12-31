import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showAddUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService:UserService) { }


  ngOnInit() { 

    this.userService.getData().subscribe(data => console.log(data))
      
    this.userService.getUsers().subscribe(users => { 
      this.users = users;
    })

      this.loaded = true;
  }

  onSubmit({ value, valid }: NgForm) { 
    if (!valid) {
      console.log('form is not valid');
    } else { 
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      
      this.form.reset()
    }
  }

 
}
