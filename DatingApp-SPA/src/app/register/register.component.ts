import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model:any={};
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model)
    .subscribe(res => {
      console.log('register success')
    },error=>{
      console.log('register error',error)
    });
  }

  cancel(){
    console.log("cancelled");
    this.cancelRegister.emit();
  }



}
