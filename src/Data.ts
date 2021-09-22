import { FullPost, Post } from './types'

const serverAddress = process.env.REACT_APP_URL || '127.0.0.1:3001'
export class Posts {
  private ws: WebSocket
  private handleNewPost?: (post: FullPost) => void 
  
  constructor() {
    this.ws = new WebSocket(`wss://${serverAddress}`)
    this.ws.onmessage = event => { 
      this.handleNewPost?.(JSON.parse(event.data))
    }
  }

  onNewPost(callback: (post: FullPost) => void) {
    this.handleNewPost = callback
  }

  getPosts() {
    return fetch(`http://${serverAddress}/get_posts`)
  }
  sendPost(post: Post) {
    return fetch(`http://${serverAddress}/send_post?name=${post.name}&text=${post.text}`)
  }
}
