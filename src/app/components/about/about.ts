import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faAward, faChartLine, faClock, faBullseye, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  // FontAwesome Icons
  faUsers = faUsers;
  faAward = faAward;
  faChartLine = faChartLine;
  faClock = faClock;
  faBullseye = faBullseye;
  faLightbulb = faLightbulb;
  faHeart = faHeart;

  stats = [
    { icon: this.faUsers, value: '100%', label: 'Commitment to Clients', color: 'blue' },
    { icon: this.faAward, value: '24/7', label: 'Dedicated Support', color: 'green' },
    { icon: this.faChartLine, value: 'Emerging', label: 'Innovation-Focused', color: 'purple' },
    { icon: this.faClock, value: 'Future', label: 'Shaping Tomorrow', color: 'orange' },
  ];

  values = [
    {
      icon: this.faBullseye,
      title: 'Results-Focused',
      description: 'We craft digital strategies designed to strengthen your brand presence and deliver meaningful outcomes.',
    },
    {
      icon: this.faLightbulb,
      title: 'Creative & Adaptive',
      description: 'We stay flexible, innovative, and ahead of trends to provide solutions tailored to evolving markets.',
    },
    {
      icon: this.faHeart,
      title: 'Client-First',
      description: 'Every decision we make centers around creating value, building trust, and supporting long-term growth.',
    },
  ];
}
