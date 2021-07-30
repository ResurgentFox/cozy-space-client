import React from 'react'
import styled from 'styled-components'
import { PostItem } from './PostItem'

const List = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`

export function PostsList() {
  return (
    <List>
      <PostItem
        key={'1'}
        name='ResurgentFox'
        date='14:33'
        text='Nice to meet you guys!'
      />
      <PostItem
        key={'2'}
        name='Winston_Wolf'
        date='12:15'
        text='So you guys are fans of Tarantino`s movies?'
      />
      <PostItem
        key={'3'}
        name='Butch'
        date='13:33'
        text='Here`s a really nice place!'
      />
      <PostItem
        key={'4'}
        name='Mr.Pink'
        date='11:33'
        text='Add me guys, I`m new here'
      />
      <PostItem
        key={'5'}
        name='Vincent'
        date='11:15'
        text='How can I upload my photos?'
      />
    </List>
  )
}
