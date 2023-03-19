import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


//IonicPage()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //plt;

  public formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder,) {
    //this.plt = localStorage.getItem('platform');
    //console.log(this.plt);
    this.formLogin = this.formBuilder.group({
      correo: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  //ngOnInit() {
  //}
  ngOnInit(): void {
  }

  goToMobileCode() {
    this.router.navigate(['/mobile-code']);
  }

  //goToHome() {
  //  this.router.navigate(['/chat-list']);
  //}

  async login() {
    const query: any = await this.userService.signup(this.formLogin.value);
    console.log(query)
    if (query.ok) {
      localStorage.setItem('token', query.token)
      this.router.navigateByUrl('/chat-list')

      const user_id1 = query.data.user_id;
      //localStorage.setItem('user_id', query.data.user_id)
      localStorage.setItem('user_id1', user_id1.toString());
      console.log("Esta es la info del usuario", user_id1)
      
    }
  }

}