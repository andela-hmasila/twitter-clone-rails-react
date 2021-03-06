import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: []
    };
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
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

export default Root;
