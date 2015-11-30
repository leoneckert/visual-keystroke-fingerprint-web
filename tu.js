// var tumblr = require('tumblr');

// Authenticate via OAuth
var tumblr = require('tumblr');


var client = tumblr.Client({
  consumer_key: 'YIBdo08eGqZgBXGom0spwzE0CVgtsSneeDzwKCn8mZYGEKI3jq',
  consumer_secret: 'htVQVnRLFVnIcykr52pYF0HXk3mjbqAHCoeH1PsaEE19z8NnWy',
  token: 'MT7RZkBg1CiWVXkNzQKrf6nADQQ3Inwn0dA52VHZXotayL9xNI',
  token_secret: 'nlQjmTNLrZYSESLoZvJT1nm09AY979I4czL8p40eRgrqgkzoIU'
});


// var blog = new tumblr.Blog('keyprints.tumblr.com', oauth);
 
// // blog.text({limit: 2}, function(error, response) {
// //   if (error) {
// //     // throw new Error(error);
// //     console.log('user');

// //   }
 
// //   console.log(response.posts);
// // });
 
// var user = new tumblr.User(oauth);
 
// user.info(function(error, response) {
//   if (error) {
//     throw new Error(error);
//   }
 
//   console.log(response.user);
// });