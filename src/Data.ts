import { FullPost, Post } from './types'

export class Posts {
  private ws: WebSocket
  private handleNewPost?: (post: FullPost) => void 
  
  constructor() {
    this.ws = new WebSocket('ws://127.0.0.1:3005')
    this.ws.onmessage = event => { 
      this.handleNewPost?.(JSON.parse(event.data))
    }
  }

  onNewPost(callback: (post: FullPost) => void) {
    this.handleNewPost = callback
  }

  getPosts() {
    return fetch('http://127.0.0.1:3001/get_posts')
  }
  sendPost(post: Post) {
    return fetch(`http://127.0.0.1:3001/send_post?name=${post.name}&text=${post.text}`)
  }
}
