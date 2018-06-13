import {
  Injectable
} from 'ngx-onsenui';
import {Observable, Subject} from 'rxjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }
  open() {
    console.log("Opening Menu");
    console.log(this.subject);
    this.subject.next('home');
  }
}
