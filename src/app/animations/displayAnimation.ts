import {
    trigger, transition, animate,
    style
} from '@angular/animations';

export const displayAnimation = 
    trigger('enterLeave', [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('500ms 200ms ease-in-out', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate('200ms 0ms ease-in-out', style({
                opacity: 0,
            }))
        ])
    ])