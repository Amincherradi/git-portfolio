// animations.ts
import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({
    opacity: 0
  })),
  transition('void => *', [
    animate('0.5s ease')
  ])
]);
