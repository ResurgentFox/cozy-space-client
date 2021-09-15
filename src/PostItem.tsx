import React from 'react'
import styled from 'styled-components'


const PostMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Tourney', cursive;
  font-weight: 900;
`

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 25px;
`

const UserName = styled.div`
  color: #746087;
  font-size: 12px;
`

const PostUploadTime = styled.time`
  font-size: 12px;
  color: #6c6c6c;
`

const TextMessage = styled.div`
  max-width: 400px;
  min-height: 50px;
  padding: 15px;
  border-radius: 30px;
  background-color: #7984e8;
  font-size: 14px;
  word-wrap: break-word;
`

interface Props {
  name: string
  timestamp: number
  text: string
}

export function PostItem(props: Props) {
  const time = new Date(props.timestamp).toLocaleString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })
  
  return (
    <PostMessage>
      <UserData>
        <UserName>{props.name}</UserName>
        <PostUploadTime>{time}</PostUploadTime>
      </UserData>
      <TextMessage>{props.text}</TextMessage>
    </PostMessage>
  )
}
