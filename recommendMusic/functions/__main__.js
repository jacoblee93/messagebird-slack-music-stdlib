const lib = require('lib')({token: '5-ATnJUhwb2IrMROu73iFvQVcPX70aqjwP_mn0UsI4Y-yVZTB-T1MrOk6y9ZLjPX'});

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
      originator: '13615022997',
      recipient: to,
      body: JSON.stringify(recommendedSongs)
    }, (err, result) => {
      return callback(err, result);
    });

  });

};
