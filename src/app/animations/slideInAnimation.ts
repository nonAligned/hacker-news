import {
    trigger, transition, animate,
    style,
    query,
    group,
    sequence
} from '@angular/animations';

export const slideInAnimation = [
    trigger('slideIn', [
        transition(':enter', [
            style({transform: 'translateX(-50em)'}),
            query('img, hn-navigation', [
                style({opacity: 0, transform: 'translateY(-10em)'})
            ]),
            sequence([
                animate('500ms 0ms', style({transform: 'translateX(0)'})),
                group([
                    query('img', [
                        animate('500ms 0ms ease-in-out', style({opacity: 1, transform: 'translateY(0)'}))
                    ]),
                    query('hn-navigation', [
                        animate('500ms 0ms ease-in-out', style({opacity: 1, transform: 'translateY(0)'}))
                    ])
                ])
            ])
        ])
    ])
]