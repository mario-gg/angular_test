import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'angular-admin-lte'; 
import { adminLteConf } from './admin-lte.conf';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
