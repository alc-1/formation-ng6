import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, first } from 'rxjs/operators';
import { GetAllMessages } from '../store/actions/messages.actions';
import { MessageState } from '../store/reducers/messages.reducer';
import { areMessagesLoaded$ } from '../store/selectors/messages.selectors';

@Injectable({
  providedIn: 'root'
})
export class MessagesResolver implements Resolve<boolean>{

  constructor(private store: Store<MessageState>) { }

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    this.store.dispatch(new GetAllMessages());

    return this.store.pipe(select(areMessagesLoaded$))
      .pipe(
        filter((loaded: boolean) => loaded),
        first()
      )
  }
}
