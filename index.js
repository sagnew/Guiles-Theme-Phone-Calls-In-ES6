import express from 'express';
import twilio from 'twilio';

// Account SID and auth token are stored in environment variables.
var app = express();

app.post('/voice', function(req, res) {
  console.log('Call received.');

  // Set the url of the song we are going to play
  let songUrl = 'http://ocrmirror.org/files/music/remixes/Street_Fighter_2_Guile%27s_Theme_Goes_with_Metal_OC_ReMix.mp3'

  // Generate a TwiML response
  let twiml = new twilio.TwimlResponse();

  // Set the response type as XML.
  res.header('Content-Type', 'text/xml');

  // Play Guile's theme over the phone.
  twiml.play(songUrl);

  // Send the TwiML as the response.
  res.send(twiml.toString());
});

// Make our Express server listen on port 3000.
app.listen(3000, () => console.log('Listening at http://localhost:3000'));
