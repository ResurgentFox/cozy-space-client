import { Post } from './types'

export class Posts {
  getPosts() {
    return fetch('http://127.0.0.1:3001/get_posts')
  }
  sendPost(post: Post) {
    return fetch(`http://127.0.0.1:3001/send_post?name=${post.name}&text=${post.text}`)
  }
}
