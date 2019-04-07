import { of, throwError } from 'rxjs';
import { testMessage, testMessages } from 'src/app/store/state.test.data';

export const httpStub = {
  get: () => of({json: () => testMessages}),
  post: () => of({json: () => testMessage})
};

export const httpStubWithError = {
  get: () => throwError(''),
  post: () => throwError('')
};
