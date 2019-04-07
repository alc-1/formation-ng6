import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MessagesState } from '../store/reducers/messages.reducer';
import { GetAllMessages } from '../store/actions/messages.actions';
import { areMessagesLoaded$ } from '../store/selectors/messages.selectors';
import { tap, filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesResolver implements Resolve<boolean>{

  constructor(private store: Store<MessagesState>) { }

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    this.store.dispatch(new GetAllMessages());

    return this.store.pipe(select(areMessagesLoaded$))
      .pipe(
        filter((loaded: boolean) => loaded),
        first()
      )
  }
}
