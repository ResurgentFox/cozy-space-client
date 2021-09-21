import React from 'react'
import styled from 'styled-components'
import asteroid from './assets/asteroid.svg'
import { PostsList } from './PostsList'
import { Posts } from './Data'
import { PostSendForm } from './PostSendForm'
import { Post, FullPost } from './types'
import { Loader } from './Loader'

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
  const [posts, setPosts] = React.useState<FullPost[]>([])
  const [loading, setLoading] = React.useState(false)

  const onSend = async (post: Post) => {
    await postsInteractive.sendPost(post)
  }

  const fetchPosts = async () => {
    setLoading(true)
    const newPosts = await postsInteractive.getPosts()
    setPosts(await newPosts.json())
    setLoading(false)
  }

  React.useEffect(() => {
    fetchPosts()
  }, [])

  React.useEffect(() => {
    postsInteractive.onNewPost((newPost) => {
      const newPosts = [newPost, ...posts]
      setPosts(newPosts)
    })
  }, [posts])

  return (
    <Wrapper>
      <Main>
        <Title>
          Cozy Space <Img src={asteroid} alt="Asteroid" />
        </Title>
        {loading ? <Loader /> : <PostSendForm onSend={onSend} />}
      </Main>
      <PostsList posts={posts} />
    </Wrapper>
  )
}
