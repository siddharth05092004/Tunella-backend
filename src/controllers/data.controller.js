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


function post_data(playlist_track_data){
    try{
        const post_new_data = data.create(playlist_track_data);
        return post_new_data;
    }
    catch(err){
        return "Can't share playlist data"
    }
}

function get_data(database_object_id){
    if(!isValidObjectId(database_object_id)){return JSON.stringify
        ({"error":"Can't fetch playlist data"})}
        const get_desired_data_count = data.findOne({"_id":database_object_id}).count();
        
        if(get_desired_data_count){return JSON.stringify
            ({"error":"Can't fetch playlist data"})}
        return data.findOne({"_id":database_object_id});
    
}

module.exports = {post_data,get_data}