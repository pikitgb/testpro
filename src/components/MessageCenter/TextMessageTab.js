import React, { useContext, useState } from 'react';
import { MessageContext } from '../../reducers/messages';
import { SEND_MESSAGE } from '../../actions/types';
const TextMessageTab = () => {

  const [state, dispatch] = useContext(MessageContext);
  const [ currentOutboundTextMessage, setCurrentOutboundTextMessage ] = useState('');

  const renderLeftSide = () => {

    const extractLastOne = (array) => {
      return array[array.length - 1]
    }

    return state.map(currentInbox => {
      return (
        <a
          key={currentInbox.id}
          className="list-group-item list-group-item-action smsTabModal"
          id={`butinfo_${currentInbox.id}`}
          data-toggle="list"
          href={`#smsTab_${currentInbox.id}`}
          role="tab"
          aria-controls="home"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{currentInbox.username}</h5>
            <small>{extractLastOne(currentInbox.messages).time}</small>
          </div>
          <p className="mb-1">{extractLastOne(currentInbox.messages).message.substring(0, 20)}...</p>
        </a>
      )
    })
  }

  const submitData = (inboxId) => {
    dispatch({
      type: SEND_MESSAGE,
      payload: {
        id: inboxId,
        message: currentOutboundTextMessage
      }
    });
    setCurrentOutboundTextMessage('');
  }

  const renderRightSide = () => {
    const renderMessages = (messages) => {
      return messages.map(message => {
        return (
          <div className="row" key={message.time}>
            <div className="col-md-8">
              <div>
                { message.direction } |
                { message.message }
              </div>
              <p style={{ fontSize: "12px", paddingLeft: "3px" }}>
                { message.time }
              </p>
            </div>
            <div className="col-md-4">
              <p>&nbsp;</p>
            </div>
          </div>
        )
      })
    }

    return state.map(currentInbox => {
      return (
        <div key={currentInbox.id}  className="tab-pane tab-pane-sms fade" id={`smsTab_${currentInbox.id}`} role="tabpanel" aria-labelledby="list-home-list">
          <div id="sms_form">
            <div>
              { renderMessages(currentInbox.messages) }
              <textarea className="form-control" style={{ marginBottom: "1rem" }} onChange={e => setCurrentOutboundTextMessage(e.target.value)} value={currentOutboundTextMessage}>
              </textarea>
              <input
                type="button"
                className="btn btn-primary float-right"
                name="sendSms"
                id="sendSms_btn"
                value="Send"
                onClick={(e) => submitData(currentInbox.id)}
              />
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div className="col-4 float-left" style={{ paddingLeft: "0px" }}>
        <div className="list-group" id="list-tab" role="tablist">
          {renderLeftSide()}
        </div>
      </div>

      <div className="col-8 float-right">
        <div className="tab-content" id="nav-tabContent">
          {renderRightSide()}
        </div>
      </div>
    </div>
  );
};

export default TextMessageTab;
