import { Routes } from '@angular/router';
import { LoginContainer } from './modules/login';


export const AuthRoutes: Routes = [
	{
		path: 'login', component: LoginContainer, 
	},
	{ path: '**', redirectTo: 'login' }
];

