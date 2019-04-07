// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var str = ""; 
  if ( !isNaN(obj) && !Array.isArray(obj) ){ //number, null ,true, false
    str += obj;
  } else if ( typeof(obj) === "string" ){ // string
    str += "\""+obj+"\"";
  } else if (Array.isArray(obj)){ // arrary
    str += "[";
    for ( var i = 0; i < obj.length; i++ ) {
      if(i === obj.length-1){
        str += stringifyJSON(obj[i]);
      } else{
        str += stringifyJSON(obj[i]) + ",";
      }
    }
    str += "]";
  } else { //object
    str += "{";
    for( var key in obj){
      if( obj[key] === undefined || typeof(obj[key]) === "function" ){
        str += "";
      } else if( key === Object.keys(obj)[Object.keys(obj).length-1] ){
        str+= "\""+key+"\":"+stringifyJSON(obj[key]) ;
      } else{
        str+= "\""+key+"\":"+stringifyJSON(obj[key])+",";
      }
    }
    str += "}";
  }

  return str;
};



























