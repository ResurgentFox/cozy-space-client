import React from 'react'
import styled from 'styled-components'
import asteroid from './assets/asteroid.svg'
import { PostsList } from './PostsList'

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

const Form = styled.div`
  margin: 0 auto;
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
    border: 2px solid #2efef7;
    background: linear-gradient(45deg, #41265c 33%, #2efef7 66%, #5f04b4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Label = styled.label`
  margin-top: 25px;
  margin-bottom: 8px;
  color: #746087;
  font-size: 20px;
  font-family: 'Tourney', cursive;
`

export function App() {
  return (
    <Wrapper>
      <Main>
        <Title>
          Cozy Space <Img src={asteroid} alt="Asteroid" />
        </Title>
        <Form>
          <Label>Your name</Label>
          <Input />
          <Label>Share what`s in your mind</Label>
          <Textarea />
          <Button>go!</Button>
        </Form>
      </Main>
      <PostsList />
    </Wrapper>
  )
}
