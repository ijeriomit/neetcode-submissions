class Twitter {
    #users;
    #tweetsQueue;
    #maxFeed = 10;
    constructor() {
        this.#users = new Map();
        this.#tweetsQueue = [];
    }
    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const tweet = new Tweet(tweetId, userId);
        if(!this.#users.has(userId)){
            let user = new User(userId, tweet);
          this.#users.set(userId, user);
        } else {
            this.#users.get(userId).tweets.push(tweet);
        }
        this.#tweetsQueue.push(tweet);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const user = this.#users.get(userId);
        const newsFeed = [];
        let i = this.#tweetsQueue.length - 1;
        while(newsFeed.length < this.#maxFeed && i >= 0 ){
            const tweet = this.#tweetsQueue[i];
            if(user.followList.has(tweet.userId) || user.id == tweet.userId){
                newsFeed.push(tweet.id);
            }
            i--;
        }
        return newsFeed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.#users.has(followerId)){
            this.#users.set(followerId, new User(followerId));
        }
        if(!this.#users.has(followeeId)) {
            this.#users.set(followeeId, new User(followeeId));
        }
        this.#users.get(followerId).followList.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.#users.has(followerId)){
            this.#users.set(followerId, new User(followerId));
        }
        if(!this.#users.has(followeeId)) {
            this.#users.set(followeeId, new User(followeeId));
        }        
        this.#users.get(followerId).followList.delete(followeeId);
    }
}

class User{
    id;
    tweets;
    followList;
    constructor(id, tweet=null, following=null){
        this.id = id;
        this.tweets = tweet==null ? [] : [tweet];
        this.followList = following==null ? new Set() : new Set(following);
    }
}

class Tweet{
    id;
    userId;
    constructor(id, userId){
        this.id = id;
        this.userId = userId;
    }
}
