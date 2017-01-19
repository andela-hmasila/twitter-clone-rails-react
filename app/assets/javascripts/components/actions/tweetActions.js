import Types from 'constants/actionTypes';
import { createAction } from 'redux-actions';

export function createTweet(tweet) {
  const addTweet = createAction(Types.ADD_TWEET);
  return addTweet(tweet);
}

export function fetchTweets() {
  const fetchTweets = createAction(Types.FETCH_TWEETS);
  return fetchTweets();
}
