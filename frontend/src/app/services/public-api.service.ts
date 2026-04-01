import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServiceItem } from '../models/service-item.model';
import { Testimonial } from '../models/testimonial.model';
import { LeadPayload } from '../models/lead.model';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getServices(): Observable<ServiceItem[]> {
    return this.http.get<ServiceItem[]>(`${this.baseUrl}/services`);
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.baseUrl}/testimonials`);
  }

  createLead(payload: LeadPayload): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/leads`, payload);
  }
}
