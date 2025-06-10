export const paths = {
  home() {
    return '/';
  },

  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },

  postCreate(topicSlug: string) {
    return `/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/${topicSlug}/posts/${postId}`;
  },
};
