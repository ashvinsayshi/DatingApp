import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BusyService } from '../_services/busy.service';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle()
      })
    )
  }
}
