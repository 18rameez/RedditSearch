const users = require('./user');
import  RedditApi  from './RedditApi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', e => {

    const searchValue = searchInput.value;
    const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
    const limitValue = document.getElementById('limit').value;

    // alert(searchValue.length)
    
    if(searchValue === ''){
        
        showMessage('Search value cannot be empty', 'alert-danger');
        
    }

    searchInput.value = '';

    RedditApi.search(searchValue, sortBy, limitValue)
    .then(result => {

        let output = '<div class="row">' ;

       
        console.log(result.data.children[0].data.subreddit) 
            
        const resultArray = result.data.children.map(data => {
         
               return data.data
            
            })
        
        console.log(resultArray)    
            
        resultArray.forEach(post => {

           let image = post.preview ? post.preview.images[0].source.url : "https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg"
            
            output += `
             <div class="col-sm-6">
                 <div class="card " >
                <img src="${image}" class="card-img-top" alt="..." > 
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.selftext}</p>
                    <a href="${post.url}" class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div> `
        });

        output += '</div>'

        document.getElementById('results').innerHTML = output;

    });

    e.preventDefault();  
});


function showMessage(message, className){

    const alertDiv = document.createElement('div');

    
    alertDiv.className = `alert ${className}`;
    
    alertDiv.appendChild(document.createTextNode(message));

    

    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');

    searchContainer.insertBefore(alertDiv,search);


    setTimeout(() => {

        document.querySelector('.alert').remove();

    },2000)
}