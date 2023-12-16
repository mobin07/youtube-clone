import React from 'react'
import Button from './Button'

const list=["All","Gaming","Songs"];

// Also we need to do this scrollable
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Soccer"/>
        <Button name="Cricket"/>
        <Button name="Cooking"/>
    </div>
  )
}

export default ButtonList