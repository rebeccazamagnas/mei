import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublicApiService } from '../../services/public-api.service';
import { ServiceItem } from '../../models/service-item.model';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  private readonly api = inject(PublicApiService);
  private readonly fb = inject(FormBuilder);

  services: ServiceItem[] = [];
  testimonials: Testimonial[] = [];
  loading = false;
  successMessage = '';
  errorMessage = '';

  readonly leadForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    serviceInterest: ['Abrir MEI', [Validators.required]],
    message: ['']
  });

  ngOnInit(): void {
    this.api.getServices().subscribe({
      next: (data) => (this.services = data),
      error: () => (this.services = [])
    });

    this.api.getTestimonials().subscribe({
      next: (data) => (this.testimonials = data),
      error: () => (this.testimonials = [])
    });
  }

  submit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.api.createLead(this.leadForm.getRawValue()).subscribe({
      next: () => {
        this.successMessage = 'Recebemos seus dados. Em breve entraremos em contato.';
        this.leadForm.reset({
          name: '',
          email: '',
          phone: '',
          serviceInterest: 'Abrir MEI',
          message: ''
        });
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Não foi possível enviar agora. Tente novamente.';
        this.loading = false;
      }
    });
  }

  scrollToForm(): void {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  }
}
