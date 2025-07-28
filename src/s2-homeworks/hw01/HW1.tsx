import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import  './HW1styled.css'
import avatar2 from './avatar2.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserType = {
     avatar: string
     name: string
}

type MessageContentType = {
    text: string
    time: string
}

export type MessageType = {
    id: number 
    user: UserType
    message: MessageContentType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad',  // можно менять
    },
    message: {
        text: 'Hello, when are we going to get divorce ? ', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: 'Angelina', // можно менять
    },
    message: {
        text: 'give me money first', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
      <div id={"hw1"} className="body">
        <h1 className='h1'>Homework #1</h1>
        {/*проверка отображения (не менять)*/}
        <div>
          <div>
            <div>
              <Message message={message0} />
              <FriendMessage message={friendMessage0} />
            </div>
          </div>
        </div>
        <div>
          <MessageSender M={Message} />
        </div>
        {/*для автоматической проверки дз (не менять)*/}
      </div>
    );
}

export default HW1
