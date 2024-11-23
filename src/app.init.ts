import { Injectable } from '@angular/core';;
import { from } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { environment } from './environments/environment';
declare var window: any;

@Injectable()
export class AppInitService {

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  public init() {

    return from(
        fetch(environment.appconfig).then(function(response) {
          return response.json();
        })
      ).pipe(
        map((config) => {
        window.config = config;
        return
      })).toPromise();
  }
}
