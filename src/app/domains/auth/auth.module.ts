import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginContainer } from './modules/login';
import { AuthRoutes } from './auth.routes';
// import { DomainSharedModule } from '@domains/shared/shared.module';


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild( AuthRoutes )
		// DomainSharedModule
	],
	declarations: [
		LoginContainer
	]
})
export class DomainAuthModule { 

}

