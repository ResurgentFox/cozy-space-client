import { FullPost, Post } from './types'
import { setWsHeartbeat } from 'ws-heartbeat/client'

const serverAddress = process.env.REACT_APP_URL || '127.0.0.1:3001'

export class Posts {
  private ws: WebSocket
  private handleNewPost?: (post: FullPost) => void 
  
  constructor() {
    this.ws = new WebSocket(`wss://${serverAddress}`)
    setWsHeartbeat(this.ws, '{"kind":"ping"}', {
      pingTimeout: 60000,
      pingInterval: 25000, 
    })
    this.ws.onmessage = event => { 
      const { data } = event
      const parsed = JSON.parse(data)
      if (parsed.name && parsed.text) {
        this.handleNewPost?.(parsed)
      } 
    }
  }

  onNewPost(callback: (post: FullPost) => void) {
    this.handleNewPost = callback
  }

  getPosts() {
    return fetch(`https://${serverAddress}/get_posts`)
  }
  sendPost(post: Post) {
    return fetch(`https://${serverAddress}/send_post?name=${post.name}&text=${post.text}`)
  }
}
