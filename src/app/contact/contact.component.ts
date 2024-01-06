import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../core/services/contact.service';

@Component({
  selector: 'snr-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactFormId = '';
  contactForm = this.fb.group({
    nombre: [null, Validators.required],
    correo: [null, [Validators.required, Validators.email]],
    direccion: [null],
    telefono: [null],
    mensaje: [null, Validators.required],
  });
  isSent: boolean;
  loadingSend: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.contactService.getContactFormId().subscribe((res) => {
      this.contactFormId = res.content_contactenos?.id_form_email;
    });
  }

  sendForm() {
    if (this.contactForm.invalid) return;
    this.loadingSend = true;
    this.contactService.contactLambda(this.contactForm.value).subscribe(() => {
      this.loadingSend = false;
      this.isSent = true;
      setTimeout(() => {
        this.isSent = false;
      }, 5000);
    });
  }
}
