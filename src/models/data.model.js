var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	data : [
		{
            description : String,
            image_url : String,
            name : String,
            playlist_track_data : [
                {
                    album : String,
                    artist : String,
                    duration : Number,
                    name : String
                }
            ]
        }

    ],
});

module.exports = data = mongoose.model('data', schema);
