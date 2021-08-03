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

/**
 * @typedef {{key: string, name: string, date: string, text: string}} Post
 * @param {{posts: Post[]}} props
 **/
export function PostsList(props) {
  return (
    <List>
      {props.posts.map((item) => (
        <PostItem
          key={item.key}
          name={item.name}
          date={item.date}
          text={item.text}
        />
      ))}
    </List>
  )
}
