const lib = require('lib')({token: /** Your StdLib library token from dashboard.stdlib.com/dashboard */});

/**
* A basic Hello World function
* @param {string} artist Who you're saying hello to
* @param {string} to
* @returns {any}
*/
module.exports = (artist = 'eminem', to, context, callback) => {

  lib.jacoblee.recommendMusic['@2.0.0']({
    artist: artist
  }, (err, recommendedSongs) => {

    if (err) {
      return callback(err);
    }

    // callback
    lib.messagebird.tel.sms({
      originator: /** Your claimed messagebird number */,
      recipient: to,
      body: JSON.stringify(recommendedSongs)
    }, (err, result) => {
      return callback(err, result);
    });

  });

};
