import { Component, OnInit } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
// import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
// import {
  // FormControl, FormGroup, FormsModule,
  // ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login-screen',
  imports: [
    // ButtonModule,
    // PasswordModule,
    CommonModule,
    // ReactiveFormsModule
// BrowserModule
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent  implements OnInit {
  // formGroup!: FormGroup;
  constructor() { }

  ngOnInit() {
  //   this.formGroup = new FormGroup({
  //     value: new FormControl()
  // });
  }

  showPwd = false;

}
