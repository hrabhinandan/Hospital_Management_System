import { Component } from '@angular/core';
import { Users } from '../../common/users';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  users:Users[]=[];

  constructor(private service:UserService,private router:Router){}
  ngOnInit(){
    this.diplayUsers();
  }


  diplayUsers(){
    this.service.getuser().subscribe((data) => {
      console.log(data);
      this.users=data;
    })
  }
}
