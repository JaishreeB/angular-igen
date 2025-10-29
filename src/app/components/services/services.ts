import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMapMarkerAlt,
  faVideo,
  faPalette,
  faDesktop,
  faShareAlt,
  faMousePointer,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {
  // FontAwesome Icons
  faMapMarkerAlt = faMapMarkerAlt;
  faVideo = faVideo;
  faPalette = faPalette;
  faDesktop = faDesktop;
  faShareAlt = faShareAlt;
  faMousePointer = faMousePointer;
  faSearch = faSearch;

  scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  services = [
    {
      icon: this.faMapMarkerAlt,
      title: 'Google My Business Profile Creation & Optimization',
      description:
        'Enhance local SEO and attract customers with optimized Google My Business profiles, boosting visibility and engagement in local search results.',
      features: [
        'Profile Setup & Verification',
        'Business Information Optimization',
        'Local SEO Integration',
        'Review Management & Customer Engagement',
        'Insights & Performance Reporting',
      ],
      color: '#ef4444',
    },
    {
      icon: this.faVideo,
      title: 'AI Video Ads',
      description:
        'Boost engagement and conversions with AI-generated video ads including cartoons, explainers, promotional, and branded content.',
      features: [
        'AI Cartoon & Explainer Videos',
        'Brand Storytelling Ads',
        'Product Promo Videos',
        'Social Media Video Campaigns',
        'Animated Marketing Content',
      ],
      color: '#8b5cf6',
    },
    {
      icon: this.faPalette,
      title: 'Logo Creation & Upgrade',
      description:
        'Design professional logos and brand identities that make your business memorable, modern, and scalable for all platforms.',
      features: [
        'Custom Logo Design',
        'Brand Identity Development',
        'Iconography & Typography',
        'Rebranding & Logo Refresh',
        'High-Resolution & Vector Formats',
      ],
      color: '#f59e0b',
    },
    {
      icon: this.faDesktop,
      title: 'Website Development',
      description:
        'Create responsive, SEO-friendly websites that convert visitors into customers while enhancing UX and brand presence.',
      features: [
        'Custom UI/UX Design',
        'Responsive Web Development',
        'SEO-Optimized Pages',
        'Fast & Secure Websites',
        'Conversion Rate Optimization (CRO)',
      ],
      color: '#22c55e',
    },
    {
      icon: this.faShareAlt,
      title: 'Social Media Management',
      description:
        'Grow your online presence with strategic social media campaigns that engage audiences and drive leads across platforms.',
      features: [
        'Content Creation & Scheduling',
        'Audience Engagement & Community Management',
        'Social Media Advertising',
        'Analytics & Performance Reporting',
        'Influencer & Brand Collaborations',
      ],
      color: '#ec4899',
    },
    {
      icon: this.faMousePointer,
      title: 'Performance Marketing',
      description:
        'Maximize ROI with performance marketing and PPC campaigns using Google, Facebook, and other paid platforms.',
      features: [
        'Google Ads',
        'Facebook & Instagram Ads',
        'Conversion Tracking & Optimization',
        'Lead Generation & Retargeting',
        'Campaign Performance Analytics',
      ],
      color: '#a855f7',
    },
    {
      icon: this.faSearch,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Improve website rankings and drive organic traffic with expert SEO strategies including keywords, technical SEO, and link building.',
      features: [
        'Keyword Research & Strategy',
        'On-Page SEO Optimization',
        'Off-Page SEO & Link Building',
        'Technical SEO Audits',
        'Content Optimization for Search Engines',
      ],
      color: '#3b82f6',
    },
  ];
}
