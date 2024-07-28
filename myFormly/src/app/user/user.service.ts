import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor() {
    this.users.push(
      { Employee_id: 1234, FirstName: "Theerthesh", LastName: "T P", EmailId: "theer.tp@gmail.com", Salutation: "Mr", Gender: "Male", MobileNumber: 9294955842 },
      { Employee_id: 1234, FirstName: "Guru", LastName: "R", EmailId: "guru@gmail.com", Salutation: "Mr", Gender: "Male", MobileNumber: 7682638294 }
    );
   }

  getUser(): User[] {
    return this.users;
  }

  adduser(user:User){
    this.users.push(user);
  }

}
