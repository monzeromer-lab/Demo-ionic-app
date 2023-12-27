import { Component, OnInit } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
// import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-login-screen',
  imports: [
    // ButtonModule,
    // PasswordModule,
    CommonModule,
    FormsModule,
    ToastModule
    // ReactiveFormsModule
// BrowserModule
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  providers: [MessageService]
})
export class LoginScreenComponent  implements OnInit {
  // formGroup!: FormGroup;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
  //   this.formGroup = new FormGroup({
  //     value: new FormControl()
  // });
  }

  showPwd = false;
  psd = "";
  mail = "";

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'correct password' });
}


showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'wrong password' });
}

  check() {
    if (this.psd == "222" && this.mail == "222") {
      this.showSuccess();
    } else {
      this.showError();
    }
  }
}
