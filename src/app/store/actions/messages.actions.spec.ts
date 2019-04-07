import { testMessage, testMessages } from '../state.test.data';
import * as actions from './messages.actions';

describe('Messages actions', () => {

  it('GetAllMessages should return an action of type GetAllMessages without any payload', () => {
    const action = new actions.GetAllMessages();
    expect({...action}).toEqual({
      type: actions.ActionTypes.GetAllMessages
    })
  })

  it('GetAllMessagesSuccess should return an action of type GetAllMessageSucces', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    expect(action.type).toEqual(actions.ActionTypes.GetAllMessagesSuccess);
  })

  it('GetAllMessagesSuccess should return an action with a list of message in payload', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    expect(action.messages).toEqual(testMessages);
  })

  it('PostMessage should return an action of type PostMessage with a message as payload', () => {
    const action = new actions.PostMessage(testMessage);
    expect({...action}).toEqual({
      type: actions.ActionTypes.PostMessage,
      message: testMessage
    })
  })

  it('PostMessageSuccess should return an action of type PostMessageSuccess with a message as payload', () => {
    const action = new actions.PostMessageSuccess(testMessage);
    expect({...action}).toEqual({
      type: actions.ActionTypes.PostMessageSuccess,
      message: testMessage
    })
  })

  it('MessageError should return an action of type MessageError with an error message as payload', () => {
    const action = new actions.MessageError('Error message');
    expect({...action}).toEqual({
      type: actions.ActionTypes.MessageError,
      error: 'Error message'
    })
  })

  it('MessageErrorConsumed should return an action of type MessageErrorConsumed', () => {
    const action = new actions.MessageErrorConsumed();
    expect({...action}).toEqual({
      type: actions.ActionTypes.MessageErrorConsumed,
    })
  })

})
