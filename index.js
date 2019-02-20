const AWS = require('aws-sdk');
const s3Params = require("config/params")();

exports.handler = function(event, context, callback) {
    var s3 = new AWS.S3();
    var FilesCount = 0;
    s3.listObjectsV2(s3Params(), function(err, data) {
        console.log(data)
        if (err)
            console.log(err, err.stack); // an error occurred
        else {
            FilesCount = data.KeyCount;
            console.log("Arquivos no bucket: " + FilesCount);           
            // successful response
            if(FilesCount < 2) {
                var error = new Error("Quantidade de arquivos menor que o esperado, arquivos encontrados: " + FilesCount);
                callback(error);
            }
        }
    });
};