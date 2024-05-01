import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss'
})
export class Section2Component {
  setActive(option: HTMLElement) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt) => {
      opt.classList.remove('active');
    });
    option.classList.add('active');
  }
}
