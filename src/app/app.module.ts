import { NgModule, Component } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NeedwebsiteComponent } from './needwebsite/needwebsite.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DesignprowebComponent } from './designproweb/designproweb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { blogsComponent } from './blogs/blogs.component';
import { MainComponent } from './main/main.component';
import { PlanComponent } from './plan/plan.component';
import { BlogpageComponent } from './blogpage/blogpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NeedwebsiteComponent,
    ServiceComponent,
    SidebarComponent,
    DesignprowebComponent,
    NotfoundComponent,
    AboutusComponent,
    blogsComponent,
    MainComponent,
    PlanComponent,
    BlogpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent, data: { Title: 'home' } },
      { path: 'blogs', component: blogsComponent, data: { Title: 'blogs' } },
      { path: 'aboutus', component: AboutusComponent, data: { Title: 'Aboutus' } },
      { path: 'blogpage', component: BlogpageComponent },
      { path: '**', component: NotfoundComponent, data: { Title: 'notfound' } }
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

