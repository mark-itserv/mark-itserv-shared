import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  isSubmitting = false;
  form = this._formBuilder.group({
    name: ['', Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [''],
    subject: [''],
    message: ['', Validators.required],
  });

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get subject() {
    return this.form.get('subject');
  }

  get message() {
    return this.form.get('message');
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit(e: Event) {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.isSubmitting = true;
    this.sendEmail(e);
  }

  private sendEmail(e: Event) {
    emailjs
      .sendForm(
        'service_0fgawsv',
        'template_z2fgtmb',
        e.target as HTMLFormElement,
        'ETKzyvMei2cm3LVNM'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this._toastr.success(
            'Your query has been submitted. We will be in touch shortly. Thank you',
            'Success',
            {
              positionClass: 'toast-bottom-right',
              timeOut: 5000,
            }
          );
          this.isSubmitting = false;
          this.form.reset();
        },
        (error) => {
          this._toastr.error(
            'We were unable to send your query. Please email help@itserv.com.au',
            'Oh no...',
            {
              positionClass: 'toast-bottom-right',
              timeOut: 0,
              extendedTimeOut: 0,
              closeButton: true,
            }
          );
          this.isSubmitting = false;
          this.form.reset();
        }
      );
  }
}
