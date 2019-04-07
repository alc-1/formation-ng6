import { Message } from 'src/app/models/message.model';
import * as actions from '../actions/messages.actions';
import { messageState, messageStateWithoutMessages, testMessages } from '../state.test.data';
import * as reducers from './messages.reducer';

describe('message reducers', () => {

  it('Post message should not change the state', () => {
    const action = new actions.PostMessage(new Message('Arnaud', 'Salut'));
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual(messageStateWithoutMessages);
  })

  it('Post message success should add the last message to the state', () => {
    const message = new Message('Arnaud', 'Salut')
    const action = new actions.PostMessageSuccess(message);
    const expectedState = {
      ...messageStateWithoutMessages,
      all: [message]
    }
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual(expectedState);
  })

  it('Get all messages should not update the state', () => {
    const action = new actions.GetAllMessages();
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual(messageStateWithoutMessages);
  })

  it('Get all messages success should update the state with new messages', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    const newState = reducers.messagesReducer(messageStateWithoutMessages, action);
    expect(newState).toEqual({
      ...messageStateWithoutMessages,
      all: testMessages
    });
  })

  it('Get all messages success should replace all messages', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    const newState = reducers.messagesReducer(messageState, action);
    expect(messageState.all.length).toEqual(2);
    expect(newState.all.length).toEqual(5);
  })

  it('Message error should store an error message in the state', () => {
    const action = new actions.MessageError('Error message');
    const newState = reducers.messagesReducer(messageState, action);
    expect(newState.error).toBe('Error message');
  })

});
