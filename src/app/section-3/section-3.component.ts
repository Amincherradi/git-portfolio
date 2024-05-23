import { Component } from '@angular/core';
import { fadeInAnimation } from './../animations';

@Component({
  selector: 'app-section-3',
  templateUrl: './section-3.component.html',
  styleUrls: ['./section-3.component.scss'],
  animations: [fadeInAnimation]
})
export class Section3Component {
  steps = [
    { date: 'Present', position: 'left', title: 'Full-Stack Developer', 
    details: `Designing user interfaces using HTML/CSS/TypeScript frameworks like Angular.
    Ensuring the application is responsive and works across different devices and browsers.
    Consuming APIs and handling data from the back end.
    Ensuring smooth data flow and proper error handling.
    Debugging issues related to front end or back end functionality.
    Designing and developing RESTful APIs using Express.js.
    Implementing Authentication and authorization mechanisms (e.g., JWT, OAuth).
    Collaborating with other developers using tools like GitHub, GitLab, SourceTree, Bitbucket.`, 
    content: 'DIGI4 S.A.R.L, Full-Stack developer' },
    { date: '2023', position: 'right', title: 'Graphique Designer', 
      details: `Creating or modifying digital designs for printing.
                Operating the printing press to produce printed materials.
                Receiving and processing orders.
                Dealing with customer inquiries and orders.`,
      content: 'PUB STYLE, Graphique Designer' },
    { date: '2022', position: 'left', title: 'Digital Content Creator', 
      details: `Developing and customizing WordPress pages and themes.
                Integrating and configuring WooCommerce for e-commerce functionality.
                Optimizing WordPress sites for performance and SEO.
                Designing and developing landing pages using HTML, CSS, and PHP.
                Integrating front-end components with back-end services.
                Setting up and configuring online stores using WooCommerce.
                Managing product listings, pricing, and promotions.
                Analyzing website traffic and user behavior using tools like Google Analytics / GTmetrix.`, 
      content: 'Digital Content Creator' },
    { date: '2021', position: 'right', title: 'Email Agent', 
      details: `Managed and executed email marketing campaigns to promote company products and services.
      Developed and scheduled email content, including promotional offers and product updates, using marketing automation tools such as Mailchimp and HubSpot.
      Monitored campaign performance, analyzed key metrics, and made data-driven decisions to optimize email engagement and conversion rates.
      Collaborated with marketing and sales teams to align email marketing strategies with overall company objectives.
      Maintained email contact lists and ensured compliance with email marketing regulations (CAN-SPAM, GDPR).`, 
      content: 'Honest Media S.A.R.L, Email Agent' },
    { date: '2020', position: 'left', title: 'Desktop Software Developer Internship', 
    details: `Designing the architecture of the desktop application, including the database schema design (using SQL Server), user interface design, and application flow.
    Writing code in C# to implement the desktop application's functionality, ensuring code quality and adherence to coding standards.
    Providing ongoing support for the desktop application, fixing bugs, and making enhancements based on user feedback and changing requirements.
    Documenting the design, code, and deployment processes.`, 
    content: 'Honest Media S.A.R.L, Desktop Software Developer Internship' }
  ];

  selectedStep = null;
  shiftLeft = false;
  shiftRight = false;

  selectStep(step) {
    if (step.position === 'right') {
      this.shiftLeft = true;
      this.shiftRight = false;
    } else {
      this.shiftLeft = false;
      this.shiftRight = true;
    }
    this.selectedStep = step;
  }
}
