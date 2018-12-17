import storage from "./src/storageHelpers";


class Feed {
  constructor(ipfsInstance, config) {
    this.ipfs = ipfsInstance;

    // userFeed has only the posts of this user
    this.userFeed = [];
    // feed has all the posts that user can read
    this.feed = [];
    // has all friends of the user
    this.userFriends = [];

    this.pushPublicationCallback = () => {};


    // configuration
    const { isBrowser } = config;
    if (isBrowser) {
      this.useLocalStorage = true;
    } else {
      this.useLocalStorage = false;
    }
  }

  pushUserFeed(publication) {
    this.userFeed.push(publication);
    return new Promise((resolve, reject) => {
      // save in storage
    });
  }

  pushFeed(publication) {
    this.feed.push(publication);
    return new Promise((resolve, reject) => {
      // save in storage
      this._saveInStorage(publication, {
        userPublication: true,
        local: this.useLocalStorage ? 'localStorage' : 'database'
      })
      .then(() => {
        resolve(publication);
      })
      .catch(reject);
    });
  }

  *pullUserFeed() {
    for (let publication of this.userFeed) {
      yield publication;
    }
  }

  onPushPublication(callback) {
    if (callback && typeof callback === 'function') {
      this.pushPublicationCallback = callback;
    }
  }

  _saveInStorage(data, config) {
    const { local } = config;
    return new Promise((resolve, reject) => {

    });
  }

  _saveInLocalStorage(key, value) {
    return storage.saveInLocalStorage(key, value);
  }

  _saveInDatabase(key, value) {

  }

  _restoreFeedFromStorage() {

  }

  _syncFriendFeed(friend) {

  }

  _syncFriendsFeed(friends) {

  }

  _loadLocalUserData(key) {

  }
}

module.exports = Feed;