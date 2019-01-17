import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  user:User
  @ViewChild('editForm') editForm:NgForm
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  constructor(private route:ActivatedRoute,private alertify:AlertifyService,
    private userService:UserService,private authService:AuthService) { }
  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.user = data['user'];
      console.log(this.user)
    })
  }

  updateUser(){
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
    .subscribe(next => {
      this.editForm.reset(this.user)
      this.alertify.success("profile updated successfuly")
    },err=>{
      this.alertify.error(err)
    });

  }


}
