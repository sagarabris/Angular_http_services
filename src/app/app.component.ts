import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent  implements OnInit{

  // injected the userService here
  // userService Acts as the variable
  // UserService calling the class
constructor(private userService: UserService){}

//  calling the two functions here as this initialize when browser loads
ngOnInit(): void {
    this.onGetUsers();
    this.OnGetUser();
  }

// function is ongetUsers with return type of void and null args
// this.userService - using this and taking the variable and calling the getUser function from the services File
// subscribe is done to know the response which is coming from server (BACKEND)
// logging up the response!
  onGetUsers():void{
  this.userService.getUsers().subscribe(
    (response)=>console.log(response),
    (error:any)=> console.log(error),
   ()=> console.log('DONE GETTING USERS')
  )
}

OnGetUser():void{
  this.userService.getUser().subscribe(
    (response)=>console.log(response),
    ()=>console.log('Getting single user')
  )
}

}
