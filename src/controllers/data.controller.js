const data = require('./../models/data.model.js')

function isValidObjectId(string) {



    if (!string || typeof string !== 'string') {
        return false; // Handle non-string or falsy values
    }

    // Check length (strictly 24 characters)
    if (string.length !== 24) {
        return false;
    }

    const validHexRegex = /^[0-9a-fA-F]+$/;
    return validHexRegex.test(string);


}


function post_data(playlist_track_data) {
    try {
        const post_new_data = data.create(playlist_track_data);
        return post_new_data;
    }
    catch (err) {
        return JSON.stringify
            ({ "error": "Can't share playlist data", "code": 1 })
    }
}

function get_data(database_object_id) {
    if (!isValidObjectId(database_object_id)) {
        return JSON.stringify
            ({ "error": "Can't fetch playlist data", "code": 1 })
    }
    const get_desired_data_count = data.findOne({ "_id": database_object_id }).count();
    console.log(get_desired_data_count)
    if (get_desired_data_count) {
        return JSON.stringify
            ({ "error": "Can't fetch playlist data" , "code": 2,"count":get_desired_data_count })
}
const return_data = data.findOne({ "_id": database_object_id });
return return_data;
    
}

module.exports = { post_data, get_data }