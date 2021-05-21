import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({});
 
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]],
     
    });
    
  }

  get firstName() { return this.contactForm.get('firstName') as FormControl; }
  get lastName() { return this.contactForm.get('lastName') as FormControl; }
  get email() { return this.contactForm.get('email') as FormControl; }
  get message() { return this.contactForm.get('message') as FormControl; }
 

  onSubmit() {

  }

}

