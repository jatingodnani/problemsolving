
// Problem: Given a string, write a JavaScript function that returns the first non-repeating character. If there is no non-repeating character, return null.
// Example
// 	•	Input: "swiss"
// 	•	Output: "w"
// 	•	Input: "aabbcc"
// 	•	Output: null
function findrep(str){
    let obj={};
    
    for(let i=0;i<str.length;i++){
      if(!obj[str[i]]){
        obj[str[i]]=1;
      }else{
        obj[str[i]]+=1;
      }
    }
    for(let key in obj){
        if(obj[key]==1){
            return key;
        }
    }
    return null;

}

console.log(findrep("abracadabra"));



function fetchdata(url){

}