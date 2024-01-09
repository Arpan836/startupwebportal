import { Emitters } from './emitterss/emitter';
// lock-route.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LockRouteGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    // Check the value of the event emitter variable
    const isRouteLocked = Emitters.authEmitter;

    if (isRouteLocked) {
      this.router.navigate(['/']); // Redirect to a locked route or display an error page
      return false; // Deny access to the route
    }

    return true; // Allow access to the route
  }
}
