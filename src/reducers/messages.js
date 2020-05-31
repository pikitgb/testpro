import React, { useReducer, createContext } from "react";
import { SEND_MESSAGE } from "../actions/types";


const initialState = [
  {
    id: '7705652031',
    username: 'John',
    messages: [
      {
        message: 'Hi there! I am wondering if you can help me with a problem I\'ve been having.',
        time: '58m',
        direction: 'inbound'
      }
    ]
  },

  {
    id: '6783335858',
    username: 'Steven',
    messages: [
      {
        message: 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!',
        time: '2d',
        direction: 'inbound'
      }
    ]
  },

  {
    id: '4045826549',
    username: 'Bill',
    messages: [
      {
        message: 'Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...',
        time: '2w',
        direction: 'inbound'
      }
    ]
  },
]

export const MessageContext = createContext()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { payload } = action;
      const newMessage = { message: payload.message, time: Date.now(), direction: 'outbound' };

      const foundInboxIndex = state.findIndex(currentInbox => {
        return currentInbox.id === payload.id
      })

      let messages = [];
      if (foundInboxIndex !== -1) {
        messages = [ ...state[foundInboxIndex].messages, newMessage ];
      }

      const newInboxState = { ...state[foundInboxIndex], messages: messages };

      let copyState = JSON.parse(JSON.stringify(state));
      copyState[foundInboxIndex] = newInboxState;
      return copyState;
    }

    default: {
      return initialState
    }
  }
}

export const MessageContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MessageContext.Provider value={[state, dispatch]}>
      { props.children }
    </MessageContext.Provider>
  );
}