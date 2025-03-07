import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UserWithApiService } from '../../Service/user-with-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-reactive',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css'
})
export class UserReactiveComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserWithApiService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumbers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)])
      ]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fullName() { return this.userForm.get('fullName')!; }
  get email() { return this.userForm.get('email')!; }
  get password() { return this.userForm.get('password')!; }
  get mobileControls(): FormArray {
    return this.userForm.get('mobileNumbers') as FormArray;
  }
  addMobile() {
    this.mobileControls.push(this.fb.control('', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]));
  }

  removeMobile(index: number) {
    this.mobileControls.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.registerUser(this.userForm.value).subscribe(res => {
        alert('User registered successfully!');
        this.userForm.reset();
      });
    }
  }


  
}
