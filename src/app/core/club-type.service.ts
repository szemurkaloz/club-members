import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClubTypeService {
  public subject= new Subject<string>();

  constructor() { }

  // Service message commands
  sendClubType(value: string) {
    this.subject.next(value);
  }

  //Get the message observable
  getClubType(): Observable<any> {
    return this.subject.asObservable();
}
}
