import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Service/user-auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const userService =inject(UserAuthService);
  const router = inject(Router)
  if(userService.isUserLogged){
    return true
  }else{
    alert('please login frist');
    router.navigate(['/userLogin']);
    return false;
  }
};
