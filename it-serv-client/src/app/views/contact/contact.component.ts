import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submit(e: Event) {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.isSubmitting = true;
    this.sendEmail(e);
  }

  private sendEmail(e: Event) {}
}
