import React, {useEffect, useRef, useState} from 'react'
import { message0 } from '../HW1'
import s from './MessageSender.module.css'

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (inputRef?.current) {
          inputRef.current.style.height = "0px";
          inputRef.current.style.height = inputRef.current.scrollHeight + "px";
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <input
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={inputRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <button className={s.button}
                    id={'hw1-button'}

                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </button>
            </div>
        </>
    )
}

export default MessageSender
