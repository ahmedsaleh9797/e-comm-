import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CheckPlateformService } from './../../../shared/services/checkPlateform/check-plateform.service';

export const setHeaderInterceptor: HttpInterceptorFn = (req, next) => {

const checkPlateformService : CheckPlateformService = inject(CheckPlateformService) 

if (checkPlateformService.checkIsPlateformBrowser()) {
req=req.clone({

headers : req.headers.set('token',localStorage.getItem('userToken')||'')

})
}
  return next(req);
};
