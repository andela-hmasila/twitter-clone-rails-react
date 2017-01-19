import Types from 'constants/actionTypes';

export const initialState = { data: [], isFetching: false };

export default function tweetReducer(state = initialState, action) {
  switch(action.type){
    case Types.FETCH_TWEETS:
      return Object.assign(
        {}, state, { isFetching: true }
      );

    case: Types.ADD_TWEET:
      return [...state,
        Object.assign({}, action.tweet)
      ];
    default:
      return state;
  }
}
