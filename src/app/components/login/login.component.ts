import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/Services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  formLogin: FormGroup;
  submited = false;
  datas: any = [];
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    
  }

  getLogin() {
    this.api.login(this.formLogin.value).subscribe(
      response => {
        // console.log(response.data)
        this.datas = response.data;
        localStorage.setItem('token', this.datas.token)
      }
    )
  }

  sendLogin() {
    this.submited = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.getLogin()
  }

  ngOnDestroy(): void {

  }

  get f() { return this.formLogin.controls }

}
