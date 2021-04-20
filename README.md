# Shorten-Urls

## How I tackle the challenge

- Since I am applying for a Fullstack Software Engineer, so I had to complete both front end and back end
- I opted for React for the front end and Node.js for the back end. 
- I was advised to use Typescript, however, I have a very limited experience in Typescript together with 
  the time completion in around two hours. I decided to tackle this challenge with a more familair but close enough language to Typescript which is Node.js.

### Front end

- There are two main parts in the Front end folder.
- The first one is a folder which contains reusable components.
- The second one is a folder which contains layout components.
- I connected the backend with axios library.
- After hitting Get shortended url, the frontend would call /api/url/shorten
- After getting a short link, we can click Go to check if it goes to the the right path.

### Back end

- I used MongoDB to store and retreive data.
- I used library valid-url and shortid for helping this challenge
- After hitting Get shortended url, the backend would check first if the link from the frontend is valid or not. If it is, the backend would check if the link does exist yet in the database.
  If it does, it would send the short link fromt the database to the front end. If it does not, the backend will generate an id from 'shortid' and save it to the database and send to the backend.
- As for Go button, the backend would check what the long url is and redirect the page to a given url.

### If I had more time, I would improve...

- As for the front end, I will add an alert in case url is not validated
- I will add a counter in case the generated id does already exist, avoiding collision.
- I will implement the encoding of the long URL myself.



