import { Component } from '@angular/core';
import { fadeInAnimation } from './../animations';

@Component({
  selector: 'app-section-3',
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss',
  animations: [fadeInAnimation]
})
export class Section3Component {
  steps = [
    { date: 'Present', position: 'left', content: 'DIGI4 S.A.R.L, Full-Stack developer' },
    { date: '2023', position: 'right', content: 'PUB STYLE, Graphique Designer' },
    { date: '2022', position: 'left', content: 'IRIMBAS, Développeur Junior IT / Web Marketer' },
    { date: '2021', position: 'right', content: 'Honest Media S.A.R.L, Agent Mailer' },
    { date: '2020', position: 'left', content: 'Honest Media S.A.R.L, Developer IT Practical training' }
  ];
}
