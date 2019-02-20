const s3Params = require("config/params")();

module.exports = function (s3){
    s3.listObjectsV2(s3Params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            s3Params.FilesCount = data.KeyCount;
            console.log("Arquivos no bucket: " + s3Params.FilesCount);           
            // successful response
            if(s3Params.FilesCount < 10) {
                var error = new Error("Quantidade de arquivos menor que o esperado, arquivos encontrados: " + s3Params.FilesCount);
                callback(error);
            }
        }
    });
}