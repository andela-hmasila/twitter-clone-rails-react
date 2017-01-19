import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';
import TweetBox from '../components/TweetBox';
import TweetsList from '../components/TweetsList';
import { connect } from 'react-redux';

class TweetApp extends React.Component {
  // const store = configureStore();
  // render(
  //   <Provider store={store}>
  //     <Router history={browserHistory} routes={routes} />
  //   </Provider>,
  //   document.getElementById('app')
  // );

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tweetsList: []
  //   };
  //
  //   this.addTweet = this.addTweet.bind(this)
  // }

  componentWillMount(){
    const {dispatch} = this.props;

    dispatch(fetchTweets());

    dispatch(createTweet(this.addTweet));
  }

  formattedTweets(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    })
    return { tweetsList: formattedList };
  }

  addTweet(tweetToAdd) {
    $.post("/tweets", { body: tweetToAdd })
    .success(savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);

      this.setState(this.formattedTweets(newTweetsList));
    })
    .error(error => console.log(error));
  }

  componentDidMount() {
    $.ajax("/tweets")
    .success(data => (this.setState(this.formattedTweets(data))))
    .error(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet}/>
        <TweetsList tweets={this.props.tweetsList}/>
      </div>
    );
  }
}

// let documentReady = () => {
//   let reactNode = document.getElementById('react')
//
//   if (reactNode) {
//     ReactDOM.render(
//       <Main/>, reactNode);
//   }
// };
//
// $(documentReady);

function mapStateToProps(state) {
  return {
    tweetsList: state.tweetsList,
  }
}

export default connect(mapStateToProps)(TweetApp);
