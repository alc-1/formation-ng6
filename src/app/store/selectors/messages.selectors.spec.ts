import { appState, appStateWithoutMessages } from 'src/app/store/state.test.data';
import * as Selectors from './messages.selectors';

describe('Messages selectors', () => {

  it('should return the messages part of the state', () => {
    expect(Selectors.messageState$(appState)).toBe(appState.messages);
  });

  it('should return the all messages part of the state', () => {
    expect(Selectors.messages$(appState)).toBe(appState.messages.all);
  });

  it('should return true when messages aren\'t empty', () => {
    expect(Selectors.areMessagesLoaded$(appState)).toBeTruthy();
  });

  it('should return true when messages aren\'t empty', () => {
    expect(Selectors.areMessagesLoaded$(appStateWithoutMessages)).toBeFalsy();
  });

});
