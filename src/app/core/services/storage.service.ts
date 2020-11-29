import { Injectable } from '@angular/core';
import {Contact} from "../models/contact.model";

@Injectable()
export class StorageService {

	addContactMessage(contactMessage: Contact): void {
    let contactMessages = JSON.parse(localStorage.getItem('contact_messages'));
    if(contactMessages === null) {
      contactMessages = [contactMessage];
    } else {
      contactMessages[contactMessages.length] = contactMessage;
    }
    console.log(contactMessages);
    contactMessages = JSON.stringify(contactMessages);
    localStorage.setItem('contact_messages', contactMessages);
	}
}
