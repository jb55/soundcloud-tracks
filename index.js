var soundcloudy = require('soundcloudy')

module.exports = function(clientId) {
  var request = soundcloudy(clientId || process.env.SOUNDCLOUDY_CLIENT_ID);
  
  return function(user, opts){
    opts = opts || {};
    return request()
      .resource("users/%s/tracks", user)
      .pageSize(opts.pageSize || 190)
      .concurrency(opts.concurrency || 1)
      .allStream()
  }
}
