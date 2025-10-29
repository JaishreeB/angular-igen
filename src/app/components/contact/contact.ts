import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;

  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'business-growth',
  };

  servicesList = [
    { value: 'business-growth', label: 'Business Growth Strategy Planning' },
    { value: 'gmb', label: 'Google My Business Profile Creation & Optimization' },
    { value: 'ai-video-ads', label: 'AI Video Ads' },
    { value: 'logo', label: 'Logo Creation & Upgrade' },
    { value: 'web-dev', label: 'Website Development' },
    { value: 'smm', label: 'Social Media Management' },
    { value: 'performance', label: 'Performance Marketing' },
    { value: 'seo', label: 'Search Engine Optimization (SEO)' },
  ];

  contactInfo = [
    {
      icon: this.faPhone,
      title: 'Call Us',
      details: ['+91-90032 29136'],
      color: '#3b82f6',
    },
    {
      icon: this.faEnvelope,
      title: 'Email Us',
      details: ['igenprotechnologies@gmail.com'],
      color: '#22c55e',
    },
    {
      icon: this.faClock,
      title: 'Availability',
      details: [
        'Mon - Sun (8:00 AM - 8:00 PM)',
        '24/7 Customer Support',
      ],
      color: '#f97316',
    },
  ];

  async onSubmit() {
    this.isSubmitting = true;

    const combinedMessage = `
Name: ${this.formData.name}
Email: ${this.formData.email || 'N/A'}
Phone: ${this.formData.phone || 'N/A'}
Company: ${this.formData.company || 'N/A'}
Service: ${
      this.servicesList.find((s) => s.value === this.formData.service)?.label ||
      this.formData.service
    }
Message: ${this.formData.message}
Time: ${new Date().toLocaleString()}
    `;

    const templateParams = {
      name: this.formData.name,
      message: combinedMessage,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_onmz4bv',
        'template_1xvvdnt',
        templateParams,
        '-G_fCYvueRqg2eNAi'
      );

      alert("✅ Message Sent Successfully! We'll get back within 24 hours.");
      window.location.reload();
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'business-growth',
      };
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send message. Please contact us at +91-9003229136.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
