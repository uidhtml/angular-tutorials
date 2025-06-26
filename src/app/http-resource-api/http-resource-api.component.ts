import { Component, inject, Injector, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { z as zod } from 'zod';

const UsersSchema = zod.array(
  zod.object({
    id: zod.number(),
    name: zod.string(),
    email: zod.string(),
  })
);

const API_END_POINT = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-http-resource-api',
  imports: [
    CommonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './http-resource-api.component.html',
  styleUrl: './http-resource-api.component.scss',
})
export class HttpResourceApiComponent {
  injector = inject(Injector);

  newUser = {
    id: 40,
    name: 'Gautam Kumar',
    username: 'gkumar',
    email: 'gkumar@uidhtml.com',
    address: {
      street: '7z random street',
      suite: 'Apt. 692',
      city: 'New Delhi',
      zipcode: '111111',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'uidhtml.com',
    company: {
      name: 'Online Teaching',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  };

  userSearchStr = signal<string>('');

  users!: HttpResourceRef<User[]>;

  ngOnInit() {
    this.users = httpResource<User[]>(
      () => ({
        url: API_END_POINT,
        method: 'GET',
        headers: {
          myHeader: 'This is my header',
        },
        params: {
          name_like: this.userSearchStr(),
        },
      }),
      {
        defaultValue: [this.newUser],
        parse: UsersSchema.parse,
        injector: this.injector,
      }
    );
  }

  addUser() {
    this.users.update((users: User[]) =>
      users ? [this.newUser, ...users] : []
    );
  }

  searchUser($event: Event) {
    const input = $event.target as any;
    this.userSearchStr.set(input.value);
  }
}
