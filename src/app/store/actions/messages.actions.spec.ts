import { testMessages } from '../state.test.data';
import * as actions from './messages.actions';

describe('Messages actions', () => {
  it('GetAllMessages should return an action of type GetAllMessages without any payload', () => {
    const action = new actions.GetAllMessages();
    expect({ ...action }).toEqual({
      type: actions.ActionTypes.GetAllMessages
    });
  });

  it('GetAllMessagesSuccess should return an action of type GetAllMessageSucces', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    expect(action.type).toEqual(actions.ActionTypes.GetAllMessagesSuccess);
  });

  it('GetAllMessagesSuccess should return an action with a list of message in payload', () => {
    const action = new actions.GetAllMessagesSuccess(testMessages);
    expect(action.messages).toEqual(testMessages);
  });
});
