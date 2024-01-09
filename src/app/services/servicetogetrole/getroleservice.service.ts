import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetroleserviceService {
  role: any;

  constructor() {}

  setrole(value: any) {
    this.role = value;
  }

  getrole() {
    return this.role;
  }
}
