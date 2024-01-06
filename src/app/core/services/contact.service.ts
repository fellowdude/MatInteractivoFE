import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private api: ApiService) {}

  postContactForm(form: any, idFormEmail: string): Observable<any> {
    const emailTemplate = {
      id_form_email: idFormEmail,
      data: form,
    };
    return this.api.post(`/email/send-email-template`, emailTemplate);
  }

  getContactFormId(): Observable<{
    content_contactenos: { id_form_email: string };
  }> {
    return this.api.get('/static-page/data/contact_us');
  }

  contactLambda(form: any):Observable<any>{
    return this.api.lambdaPost(form);
  }
}
