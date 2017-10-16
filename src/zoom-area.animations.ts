import { trigger, state, style, transition, animate } from '@angular/animations';

export const ZOOM_AREA_ANIMATIONS = [
    trigger('visibilityChanged', [
        state('shown', style({ opacity: 1, display: 'block' })),
        state('hidden', style({ opacity: 0, display: 'none' })),
        transition('shown => hidden', animate('300ms')),
        transition('hidden => shown', animate('300ms')),
    ])
];