var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'YIBdo08eGqZgBXGom0spwzE0CVgtsSneeDzwKCn8mZYGEKI3jq',
  consumer_secret: 'htVQVnRLFVnIcykr52pYF0HXk3mjbqAHCoeH1PsaEE19z8NnWy',
  token: 'MT7RZkBg1CiWVXkNzQKrf6nADQQ3Inwn0dA52VHZXotayL9xNI',
  token_secret: 'nlQjmTNLrZYSESLoZvJT1nm09AY979I4czL8p40eRgrqgkzoIU'
});


// Make the request
// client.userInfo(function (err, data) {
//     data.user.blogs.forEach(function (blog) {
//         console.log(blog.name);
//     });
// });

client.photo('keyprints', { source: 'http://i.imgur.com/ghrMbDS.jpg' }, function (err) {console.log(err);});