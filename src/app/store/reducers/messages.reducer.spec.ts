import * as actions from '../actions/messages.actions';
import {
  messageStateWithoutMessages,
  messageStateWithTwoMessages,
  testMessages
} from '../state.test.data';
import * as reducers from './messages.reducer';

describe('message reducers', () => {

  it('Get all messages should not update the state', () => {
    const action = new actions.GetAllMessages();
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual(messageStateWithoutMessages);
  });

  it('Get all messages success should update the state with new messages', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual({
      ...messageStateWithoutMessages,
      all: testMessages
    });
  });

  it('Get all messages success should replace all messages', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    const newState = reducers.messagesReducer(messageStateWithTwoMessages, action);
    expect(messageStateWithTwoMessages.all.length).toEqual(2);
    expect(newState.all.length).toEqual(5);
  });

});
