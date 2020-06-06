const Twit = require('twit');

const Twitter = new Twit({
    consumer_key: "your_api_key_here",
    consumer_secret: "your_api_key_secret_here",
    access_token:"your_access_token_here" ,
    access_token_secret: "your_access_token_secret_here"
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

