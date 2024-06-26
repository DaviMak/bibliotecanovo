import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    login!: string;
    senha!: string;

    router = inject(Router);

    logar(){
      
      if(this.login == "davi" && this.senha == "123"){
        this.router.navigate(["admin/livros"]);
      }else{
        alert("dados incorretos")
      }
    }
}

