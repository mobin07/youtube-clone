import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
            className='h-8'
            alt='user'
            src="data:image/png;base64,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"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage