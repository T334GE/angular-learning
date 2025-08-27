import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Students } from './dashboard/students/students';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    {
        path: "dashboard", component: DashboardComponent, children: [
            { path: "students", component: Students }
        ]
    }
];
