import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formW: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.formW = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido_p: ['', Validators.required],
      apellido_m: ['', Validators.required],
      pass: ['', Validators.required],
      correo: ['', Validators.required],
      foto: ['', Validators.required]
      //status: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  async createUser() {
    const query: any = await this.userService.createUser(this.formW.value);
    console.log(query)
    this.router.navigateByUrl('/login')
  }

}
