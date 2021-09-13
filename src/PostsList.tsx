import React from 'react'
import styled from 'styled-components'
import { PostItem } from './PostItem'
import { FullPost } from './types'

const List = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {
  posts: FullPost[]
}

export function PostsList(props: Props) {
  return (
    <List>
      {props.posts.map((item) => (
        <PostItem
          key={item._id}
          name={item.name}
          date={String(item.timestamp)}
          text={item.text}
        />
      ))}
    </List>
  )
}
