import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlickityModule } from 'ngx-flickity';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from '../app/material.module';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routes';
import { AuthService } from './services/auth.service';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { PracticeSkillComponent } from './practiceSkill/practiceSkill.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DeactiveGuard } from './guards/deactive.guard';
import { UserEditResolver } from './resolver/user-edit.resolver';
import { SolutionsComponent } from './solutions/solutions.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';
import { TitleService } from './services/title.service';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      LoginComponent,
      PracticeSkillComponent,
      ContactComponent,
      UserListComponent,
      UserEditComponent,
      SolutionsComponent,
      PortfolioComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      FlickityModule,
      FontAwesomeModule,
      MaterialModule,
      NgxChartsModule,
      BrowserAnimationsModule,
      SlickCarouselModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      ToastrModule.forRoot({
         positionClass: 'toast-bottom-right',
         progressBar: true
      }),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AuthGuard,
      UserService,
      DeactiveGuard,
      UserEditResolver,
      TitleService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
