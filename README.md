# Laravel Validator
Laravel validation rules to validate the payload in the frontend with the same rules of laravel

## Installation
```sh
npm i @elpandev/laravel-validator
```

## Rules NOT included (currently)
- dimentions
- distinct
- timezone
- current_password
- active_url
- exist
- ip
- ipv4
- ipv6

## Usage
```sh
import Validator, { IRules, IMessages } from '@elpandev/laravel-validator'

const payload: {
  name:  'Francisco Moncayo',
  web:   'https://elpan.dev'
}

const rules: IRules = {
  name:  ['required', 'alpha', 'min:4', 'max:255'],
  email: ['required', 'email'],
  web:   ['required', 'url'],
}

const messages: IMessages = {
  email: {
    required: 'Email is required',
    email:    'Email format is invalid'
  }
}

const { errors } = new Validator(payload, rules, messages)

const email_errors = errors.email // ['Email is required', 'Email formart is invalid']
```