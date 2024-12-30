import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostsIndexController extends Controller {
  @service router;
  @service store;

  @action
  async viewComments(post) {
    await post.hasMany('comments').reload();
  }

  @action
  viewMore(postId) {
    this.router.transitionTo('posts.post', postId);
  }

  @action
  createPost() {
    const title = prompt('Enter post title:');
    const content = prompt('Enter post content:');
    if (title && content) {
      this.store.createRecord('post', { title, content }).save();
    }
  }

  @action
  editPost(post) {
    const newTitle = prompt('Edit post title:', post.title);
    const newContent = prompt('Edit post content:', post.content);
    console.log(post);
    if (newTitle && newContent) {
      post.set('title', newTitle);
      post.set('content', newContent);
      post.save();
    }
  }

  @action
  deletePost(post) {
    if (confirm('Are you sure you want to delete this post?')) {
      post
        .destroyRecord()
        .then(() => {
          console.log('Post deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  }

  @action
  deleteComment(comment) {
    if (confirm('Are you sure you want to delete this comment?')) {
      comment.destroyRecord();
    }
  }
}
