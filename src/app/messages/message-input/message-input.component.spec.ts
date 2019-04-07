import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from 'src/app/store';
import { MessageInputComponent } from './message-input.component';
import { Subscription } from 'rxjs';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ],
      imports: [
        StoreModule.forRoot(reducers),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.debugElement.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
