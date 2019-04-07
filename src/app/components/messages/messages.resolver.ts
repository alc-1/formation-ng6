import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, first } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { GetAllMessages } from 'src/app/store/actions/messages.actions';
import { areMessagesLoaded$ } from 'src/app/store/selectors/messages.selectors';

@Injectable({
  providedIn: 'root'
})
export class MessagesResolver implements Resolve<boolean> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    this.store.dispatch(new GetAllMessages());

    return this.store.pipe(select(areMessagesLoaded$)).pipe(
      filter((loaded: boolean) => loaded),
      first()
    );
  }
}
