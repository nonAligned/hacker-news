import {
    trigger, transition, animate,
    style, state
} from '@angular/animations';

export const focusAnimation =
    trigger('focus', [
        state('focusedItem', style({
            boxShadow: '4px 4px 12px #909090',
            transform: 'scale(1.1)',
            borderRadius: '8px'
        })),
        state('unfocusedItem', style({
            boxShadow: '2px 2px 4px #909090',
            transform: 'scale(1.0)',
            borderRadius: '8px'
        })),
        state('focusedLink', style({
            transform: 'translateY(-0.5em)',
            color: '#f06200'
        })),
        state('unfocusedLink', style({
            transform: 'translateY(0em)',
            color: '#959595'
        })),
        transition('focusedItem <=> unfocusedItem', [
            animate('300ms 0ms ease-out')
        ]),
        transition('focusedLink <=> unfocusedLink', [
            animate('200ms 0ms ease-out'),
        ])
    ])