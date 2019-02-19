const AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    var s3 = new AWS.S3();
    var filesCount = 0;

    //configuring parameters
    var params = {
        Bucket: 'ke3-ci-flow-sale-files',
        Delimiter: '/',
        Prefix: '2018_09_04/'
    };

    function todayDate() {
        var today = new Date();
        var dd = new String(today.getDate());
        var mm = new String(today.getMonth()+1); //January is 0!
        var yyyy = new String(today.getFullYear());
      
        if(dd<10) {
            dd = '0'+dd;
        } 
      
        if(mm<10) {
            mm = '0'+mm;
        } 
      
        today = yyyy + '_' + mm + '_' + dd;

        return today;
      }

      console.log("Data: " + todayDate());

    s3.listObjectsV2(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            filesCount = data.KeyCount;
            console.log("Arquivos no bucket: " + filesCount);           // successful response

            if(filesCount < 10) {
                var error = new Error("Quantidade de arquivos menor que o esperado, arquivos encontrados: " + filesCount);
                callback(error);
            }
        }
    });
      
};

  