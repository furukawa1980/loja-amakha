import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
	selector: 'login-container',
	templateUrl: './login.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { 
	}
})

export class LoginContainer implements OnInit {
	
	constructor() {}
	
	ngOnInit() {}
	
}
