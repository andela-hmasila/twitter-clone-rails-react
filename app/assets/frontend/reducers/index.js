import {combinedReducers} from 'redux';
import tweets from './tweetReducer';

const rootReducer = combinedReducers({
  tweets
});

export default rootReducer;
