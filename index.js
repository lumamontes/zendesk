var zendesk = require('node-zendesk');
var client = zendesk.createClient({
    username:  '',
    token:     '',
    remoteUri: '',
  disableGlobalState: true,
  debug: false
});
// client.tickets.list(function (err, req, result) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(JSON.stringify(result[20], null, 2, true));//gets the first page
//     // console.log(result[0]);//gets the first page
//     console.log('acabou');//gets the first page
//   });

var query = "tags:luma";
client.search.query(query, function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('entrou')
  console.log(JSON.stringify(result, null, 2, true));
  console.log('saiu')
});