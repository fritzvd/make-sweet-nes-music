var song = require('nesly-sound')();

song.square1(['C5', 'E5', 'G5', 'C6'])
    .timing(1/8);

song.done();
song.write();
