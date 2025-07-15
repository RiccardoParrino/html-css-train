import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser: Subject<User>;

  constructor() {
    let me: User = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
    this.currentUser = new BehaviorSubject<User>(me);
  }

  public setCurrentUser(newUser:User): void {
    this.currentUser.next(newUser);
  }

}
