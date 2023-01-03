import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NeedwebsiteComponent } from './needwebsite/needwebsite.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlanComponent } from './plan/plan.component';
import { DesignprowebComponent } from './designproweb/designproweb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticlesComponent } from './articles/articles.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NeedwebsiteComponent,
    ServiceComponent,
    SidebarComponent,
    PlanComponent,
    DesignprowebComponent,
    NotfoundComponent,
    AboutusComponent,
    ArticlesComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

