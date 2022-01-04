import { NgModule } from '@angular/core';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { JwtAuthenticationService } from './services/jwtauth/jwt-authentication.service';
import { JwtAuthInterceptorService } from './services/jwtauth/jwt-auth-interceptor.service';
import { TargetDateValidatorDirective } from './directives/target-date-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LogoutComponent,
    TodoComponent,
    TargetDateValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtAuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
