import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from "../core/services/storage.service";
import {Contact} from "../core/models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showSuccessfulContactMessage = false;

  form: FormGroup;

  error: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  } | null;

  constructor(protected storageService: StorageService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.error = null;
    this.showSuccessfulContactMessage = false;

    if (this.form.valid) {

      const contactMessage: Contact = {
        name: this.form.get('email').value,
        email: this.form.get('name').value,
        subject: this.form.get('subject').value,
        message: this.form.get('message').value
      };

      this.storageService.addContactMessage(contactMessage);

      this.showSuccessfulContactMessage = true;
      this.form.reset()
    } else {
      this.error = null;
    }
  }
}
