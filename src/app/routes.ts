import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PracticeSkillComponent } from './practiceSkill/practiceSkill.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DeactiveGuard } from './guards/deactive.guard';
import { UserEditResolver } from './resolver/user-edit.resolver';
import { AdminGuard } from './guards/admin.guard';
import { SolutionsComponent } from './solutions/solutions.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'skill', component: PracticeSkillComponent, canActivate: [AuthGuard] },
    { path: 'solutions', component: SolutionsComponent, canActivate: [AuthGuard] },
    { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [DeactiveGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
    { path: 'edit', component: UserEditComponent, canActivate: [AuthGuard], resolve: {user: UserEditResolver} },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
