import { Component, OnInit } from "@angular/core";
import {User} from "../../models/User.model";
import {UsersService} from "../../services/users.service";

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(result => {
      console.log(result)
    })
  }
}
