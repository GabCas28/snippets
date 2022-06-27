import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';;
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {  
  
  public userControl = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});

  constructor(private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSave(){
    console.log({snippetControl: this.userControl.value})
    this.authService.logIn(this.userControl.value).subscribe((res)=>{
      console.log({res})
    });
  }
}
