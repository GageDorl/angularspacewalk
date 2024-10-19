import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    nameControl: new FormControl(''),
    emailControl: new FormControl(''),
    phoneControl: new FormControl(''),
    msgControl: new FormControl(''),
    productionControl: new FormControl(''),
    mixingControl: new FormControl(''),
    otherControl: new FormControl(''),
    bikeControl: new FormControl('')
  });
  onSubmit(){
    location.href = `mailto:sp4ce.w4lk.4@gmail.com?subject=Message from ${this.contactForm.value.nameControl}&body=Name: ${this.contactForm.value.nameControl}%0D%0AEmail: ${this.contactForm.value.emailControl}%0D%0APhone: ${this.contactForm.value.phoneControl}%0D%0AMessage: ${this.contactForm.value.msgControl}%0D%0AProduction: ${this.contactForm.value.productionControl}%0D%0AMxing: ${this.contactForm.value.mixingControl}%0D%0AOther: ${this.contactForm.value.otherControl}%0D%0ABike: ${this.contactForm.value.bikeControl}`;
  }
}
