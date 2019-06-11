import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export const toggleAnimations = trigger('openClose', [

		state('open', style({ 
			opacity: 1
		})),

		state('close', style({ 
			opacity: 0
		})),

		transition('open <=> close', animate('400ms ease-in'))

])
	
export const collapseAnimations = trigger('popOverState', [

		state('show', style({
			opacity: 1
		})),

		state('hide', style({
			opacity: 0
		})),

		transition('show => hide', animate('600ms ease-out')),
		transition('hide => show', animate('600ms ease-in'))

])	

  
		
		