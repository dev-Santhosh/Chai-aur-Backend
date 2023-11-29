// console.log("Chai aur Code");
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const githubData = {
  "login": "dev-Santhosh",
  "id": 130728015,
  "node_id": "U_kgDOB8rATw",
  "avatar_url": "https://avatars.githubusercontent.com/u/130728015?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dev-Santhosh",
  "html_url": "https://github.com/dev-Santhosh",
  "followers_url": "https://api.github.com/users/dev-Santhosh/followers",
  "following_url": "https://api.github.com/users/dev-Santhosh/following{/other_user}",
  "gists_url": "https://api.github.com/users/dev-Santhosh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dev-Santhosh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dev-Santhosh/subscriptions",
  "organizations_url": "https://api.github.com/users/dev-Santhosh/orgs",
  "repos_url": "https://api.github.com/users/dev-Santhosh/repos",
  "events_url": "https://api.github.com/users/dev-Santhosh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dev-Santhosh/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 22,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-14T04:22:42Z",
  "updated_at": "2023-11-28T03:03:46Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/login',(req,res)=>{
  res.send("<h1>Login to see the page</h1>")
})

app.get('/github', (req,res)=>{
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
