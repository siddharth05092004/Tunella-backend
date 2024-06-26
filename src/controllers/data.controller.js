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

async function get_data(database_object_id) {
    if (!isValidObjectId(database_object_id)) {
        return JSON.stringify
            ({ "error": "Can't fetch playlist data", "code": 1 })
    }
    let get_desired_data = await data.findOne({ "_id": database_object_id });
    if (!get_desired_data) {
        return JSON.stringify
            ({ "error": "Can't fetch playlist data" , "code": 2})
}
const return_data = data.findOne({ "_id": database_object_id });
return return_data;
    
}

module.exports = { post_data, get_data }