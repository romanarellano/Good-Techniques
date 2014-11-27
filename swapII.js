
function isDigit(num){
    if(/\d/.test(num))return true;
     return false;
}

function isChar(lette){
     
      if(/[a-zA-Z]/.test(lette))
      	return false;
     else return true;
}

function isPhrase(str){
     for(i=0;i<str.length;i++){
     	if(isChar(str[i]))
        return false;
}
return true;
}



function splitTypes(str){

	result=[]
     first=0;
   before = isDigit(str[0]);

	for(i=1;i<str.length;i++){
       after = isDigit(str[i])
       if(before != isDigit(str[i])){
       	result.push(str.slice(first,i))
       first=i;
       before = after; 
   }
   }
   result.push(str.slice(first,str.length))
   return result;
}



function swapII(str){
	switch_letter = new Array(str.length);//[,,,,,,,,,]
   for(i=0;i<str.length;i++){
   	if(/[a-zA-Z]/.test(str[i])){

     	if(str[i] !=  str[i].toUpperCase())
          switch_letter[i]=str[i].toUpperCase();
        else switch_letter[i]=str[i].toLowerCase();
        }
   else switch_letter[i]=str[i]//5;
}//"5roM-AN6"
  
  var  splitting=  splitTypes(switch_letter.join(""));
       
       for(var i=1;i<splitting.length;i++){
        if(isPhrase(splitting[i]) && isDigit(splitting[i-1]) && isDigit(splitting[i+1])){
          
          var number = splitting[i-1]//5;
            splitting[i-1]=splitting[i+1]//6;

            splitting[i+1]=number;
          
        }}
      return splitting;
}


console.log(swapII("R5Oma4nb"))