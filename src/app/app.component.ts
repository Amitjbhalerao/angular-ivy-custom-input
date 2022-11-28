import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  field=true;
  flag: boolean = true;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.fb.group({
      emailId: ['amit', Validators.required]}
    );
  }
  get f() { return this.registerForm.controls; }
 
}
