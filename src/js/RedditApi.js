export default class RedditApi {

    static search(value, sort, limit){

          
       return fetch(`http://www.reddit.com/search.json?q=${value}&sort=${sort}&limit=${limit}`)
        .then(res => {
           return res.json();
        })
        .catch(err => {
            console.log(err);
        })
    }
}
