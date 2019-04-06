import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { localStorageServiceStub } from 'src/app/services/local-storage.service.stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [LoginFormComponent],
      providers: [
        AuthenticationService,
        {provide: LocalStorageService, useValue: localStorageServiceStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
