import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem('user')!==null){
    return true
  }else{
    router.navigate(['auth/login']);
    return false;
  }
};
