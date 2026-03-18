import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from, lastValueFrom, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const auth = inject(AuthService);

  // Skip for non-API requests if needed, but here we target our local API
  if (!req.url.includes('/api/')) {
    return next(req);
  }

  return from(auth.getSession()).pipe(
    switchMap(session => {
      if (session?.access_token) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${session.access_token}`
          }
        });
        return next(authReq);
      }
      return next(req);
    })
  );
};
