import React from 'react'
import styled from 'styled-components'
import asteroid from './assets/asteroid.svg'
import { PostsList } from './PostsList'
import { Posts } from './Data'
import { PostSendForm } from './PostSendForm'


const Wrapper = styled.section`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px 15px;
`
const Main = styled.section`
  height: 100vh;
`
const Title = styled.h1`
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  font-family: 'Tourney', cursive;
  font-weight: 600;
  background: linear-gradient(45deg, #41265c 33%, #2efef7 66%, #5f04b4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 320px) {
    margin-top: 5px;
    margin-bottom: 0;
  }
`

const Img = styled.img`
  width: 60px;
  height: 60px;
  max-width: 100%;
`

const postsInteractive = new Posts()

export function App() {
  const [posts, setPosts] = React.useState(postsInteractive.getPosts())

  /** @param {{name: string, text: string}} post */

  const onSend = (post) => {
    const date = new Date(Date.now())
    const newPost = {
      key: '',
      name: post.name,
      text: post.text,
      date: date
        .toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })
        .replace(/(:\d{2}& [AP]M)$/, ':'),
    }
    const allPosts = [newPost, ...posts]
    setPosts(allPosts)
  }

  return (
    <Wrapper>
      <Main>
        <Title>
          Cozy Space <Img src={asteroid} alt="Asteroid" />
        </Title>
        <PostSendForm onSend={onSend} />
      </Main>
      <PostsList posts={posts} />
    </Wrapper>
  )
}
