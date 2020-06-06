const Twit = require('twit');

const Twitter = new Twit({

  consumer_key: "6u3uqpYurfd7GgarwYB1IAECI",

  consumer_secret: "kbscCc2a2yNgQ7SywZRblwNRm07b8tF3sbSlBFQINjAnRSw5Fp",

  access_token:"814895221863497728-vinhtxs7fqLoppIr6Wr0WlqB6rPkaoL" ,

  access_token_secret: "6lEFq1mvDkI6JvO0PMrw3KUUZZC4vSiO0cqfhZxL0tJgR"

});

// starting stream and to track tweets
const stream = Twitter.stream('statuses/filter', {track: '#leetcode'});

// event handler on the stream 
stream.on('tweet', tweet => {
   // retweet the tweets
  Twitter.post('statuses/retweet/:id', {id: tweet.id_str}, (err,data,response)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Retweeted')
    }
 
  });

  // like the tweets
  Twitter.post('favorites/create', {id: tweet.id_str}, (err,data,response)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Liked the tweet');
    }
 
  }); 

});