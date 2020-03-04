import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IUser} from '../IUser';
import {UserServiceService} from '../../user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  createUserForm;

  constructor(private formBuilder: FormBuilder,
              private userServiceService: UserServiceService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(data) {
    let user: IUser = {
      name: data.value.name,
      address: data.value.address,
      email: data.value.email,
      phone: data.value.phone
    };
    console.log(user);
    this.userServiceService.add(user);
    this.route.navigate(['/users']);
  }

  get name() {
    return this.createUserForm.get('name');
  }

  get address() {
    return this.createUserForm.get('address');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  get phone() {
    return this.createUserForm.get('phone');
  }
}
