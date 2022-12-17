import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2>by Abhishek Dhapare</h2>',
    // styles: [`
    //     h2{
    //         color: red
    //     }
    // `],
})

export class UserComponent { 
    // Properties
    user: User
    // Methods
    constructor() { 
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
                street: '50 Main St',
                city: 'Boston',
                state: 'MA'
            }

        }
    }
}

