import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  services = [
    "Business Growth Strategy Planning",
    "Google My Business Optimization",
    "AI Video Ads",
    "Logo Creation & Upgrade",
    "Website Development",
    "Social Media Management",
    "Performance Marketing",
    "Search Engine Optimization (SEO)"
  ];

  company = [
    "About Us",
    "Contact Us"
  ];

  socialLinks = [
    { icon: faFacebookF, href: "https://m.facebook.com/795333033670686/", label: "Facebook" },
    { icon: faLinkedinIn, href: "https://www.linkedin.com/company/igenprotechnologies/", label: "LinkedIn" },
    { icon: faInstagram, href: "https://www.instagram.com/igenprotechnologies", label: "Instagram" }
  ];

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMap = faMapMarkerAlt;

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
