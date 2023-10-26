// un feture care retunreaza cel mai vechi tweet si cel mai nou

const tweet = ['hi', 'my', 'tweet', 'last']

const returnOldTweet = function (tweetArray) {
    return tweetArray[0]//oldTweet
    //0(1)

}
const returnLatTweet = function (tweetArray) {
    return tweetArray[tweetArray.length - 1]//oldTweet
    //0(1)

}

const oldTweet = returnOldTweet(tweet)
const lastTweet = returnLatTweet(tweet)
console.log(oldTweet, lastTweet)
// 0(1)

