import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Output() loggedIn: EventEmitter<void> = new EventEmitter();

  // constructor(private trainerService: TrainerService) {}

  // public loginTrainerForm: FormGroup = new FormGroup({
  //   trainerName: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(2),
  //     Validators.maxLength(42) // Important number
  //   ])
  // });

  // // Getters & Setters
  // public get trainerName(): AbstractControl {
  //   const getTrainer = this.loginTrainerForm.get('trainerName')?.value;
  //   return getTrainer;
  // }

  // // Event Handlers
  // public onLoginClick(): void {
  //   this.trainerService.loginTrainer(this.trainerName.value.trim());
  //   this.loggedIn.emit();
  // }
  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(42)
          ]
        ]
      }
    );
  }

  get getFormData(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
}
