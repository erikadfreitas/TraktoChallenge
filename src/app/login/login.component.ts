import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  buttonText: string = "Entrar";
  faCircleNotch = faCircleNotch;

  constructor(private elementRef: ElementRef,
              private toastr: ToastrService,
              private api: ApiService,
              private router: Router) {}

  ngOnInit() {
    if(sessionStorage.getItem('accessToken')) {
      this.router.navigate(['home']);
    }
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#EFF2F9";
  }

  login() {
    if (this.email === "" || this.password === "") {
      this.showWarning("Os campos E-mail e Senha são obrigatórios.");
      return;
    }

    if (!this.validateEmail()) {
      this.showWarning("Informe um E-mail válido.");
      return;
    }

    this.buttonText = "Entrando...";

    sessionStorage.clear();

    this.api.authenticate(this.email, this.password)
    .subscribe({
      next: (result: any) => {
        sessionStorage.setItem('accessToken', result.access_token);
        sessionStorage.setItem('refreshToken', result.refresh_token);
        sessionStorage.setItem('firstname', result.firstname);
        sessionStorage.setItem('lastname', result.lastname);
        sessionStorage.setItem('email', result.email);
        sessionStorage.setItem('avatarUrl', result.logo.url.raw.url);
        
        this.showSuccess("Usuário autenticado com sucesso!", "Redirecionando...");
        this.router.navigate(['home']);
      },
  
      error: (error) => {
        this.showError(error.error.message);
        this.buttonText = "Entrar";
        throw error.message;
      },
    });
  }

  showSuccess(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  showError(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  showWarning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  validateEmail() {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(this.email);
  }


}
