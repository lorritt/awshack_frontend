import {
  Injectable
} from 'ngx-onsenui';
import {Observable, Subject} from 'rxjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Injectable()
export class MenuService {
  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }
  open() {
    console.log("Opening Menu");
    this.subject.next();
  }
}
