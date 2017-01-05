export const FETCH_POSTS = 'FETCH_POSTS';


export function fetchposts() {
  // api call
  return {
    type: FETCH_POSTS,
    payload: 42
  }
}
