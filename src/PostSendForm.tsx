import * as React from 'react'
import styled from 'styled-components'
import { Post } from './types'

const Form = styled.div`
  top: 0;
  position: sticky;
  margin: 0 auto;
  margin-bottom: 5%;
  padding-top: 5%;
  @media (max-width: 320px) {
    padding-top: 5px;
  }

  max-width: 400px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  background-color: #746087;
  border: 1px solid #1e1d1f;
  border-radius: 10px;
  outline: none;
  font-family: 'Tourney', cursive;
  font-weight: 800;
`

const Textarea = styled.textarea`
  resize: none;
  min-height: 100px;
  padding: 10px;
  border-radius: 15px;
  outline: none;
  border: 1px solid #1e1d1f;
  background-color: #746087;
  font-family: 'Tourney', cursive;
  font-weight: 800;
`

const Button = styled.button`
  margin-top: 7%;
  max-width: 120px;
  max-height: 40px;
  outline: none;
  border-radius: 30px;
  background: linear-gradient(45deg, #66538f 30%, #7984e8 60%, #2d3159);
  border: transparent;
  color: #000;
  font-size: 28px;
  font-family: 'Bungee Shade', cursive;
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;
  top: 0;
  position: relative;
  &:hover {
    top: 5px;
  }
`

const Label = styled.label`
  margin-top: 25px;
  margin-bottom: 8px;
  color: #746087;
  font-size: 20px;
  font-family: 'Tourney', cursive;
`

const ErrorText = styled.div`
  font-family: 'Tourney', cursive;
  margin-top: 3rem;
  margin-bottom: 5%;
  padding: 8px;
  color: #4ef2e7;
  text-align: center; 
  font-size: 20px;     
  font-weight: 600;
  border: 2px solid  #4ef2e7;
  border-radius: 15px; 
  max-width: 400px;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorTextSmall = styled.div`
  color: #4ef2e7;
  font-size: 14px; 
  min-height: 14px;
  margin-bottom: 2px;
`

interface Props {
  onSend: (post: Post) => void
}

export function PostSendForm(props: Props) {
  const [name, setName] = React.useState('')
  const [text, setText] = React.useState('')

  const [validName, setValidName] = React.useState(true)
  const [validText, setValidText] = React.useState(true)
  const [hasError, setHasError] = React.useState(false);

  const onButtonClick = () => {
    const post: Post = {
      name,
      text,
    }
    
    if (name.trim() && text.trim()){
      props.onSend(post) 
      setHasError(false)
    } else {
      setHasError(true)
    }
    setText('')
  }

  const onKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onButtonClick()
      e.preventDefault()
    }
  }

  const onNameBlur = () => { 
    setValidName(!!name)
  }

  const onTextBlur = () => {
    setValidText(!!text)
  }

  return (
    <Form>
      <Label>Your name</Label>
      <ErrorTextSmall>{!validName ? 'Please enter the name!' : ''}</ErrorTextSmall>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)} 
        onBlur={onNameBlur}
      />
      <Label>Share what`s in your mind</Label>
      <ErrorTextSmall>{!validText ? 'You can`t send empty messages :c' : ''}</ErrorTextSmall>
      <Textarea
        value={text}
        onKeyPress={onKeyEnter}
        onChange={(e) => setText(e.target.value)}     
        onBlur={onTextBlur}
      />
      <Button onClick={onButtonClick}>go!</Button>
      {hasError && <ErrorText>! You need to fill name and text areas !</ErrorText>}
    </Form>
  )
}
