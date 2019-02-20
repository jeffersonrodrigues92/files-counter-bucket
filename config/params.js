const date = require("helper/date");

var params = function(){
    return params = {
        Bucket: 'backup-for-me',
        Delimiter: "/",
        Prefix: date()
    };
}

module.exports = function(){
    return params;
}