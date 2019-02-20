module.exports = function(){
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

    return today.concat("/");
}