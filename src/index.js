module.exports = function reverse (n) {
	n=Math.abs(n);
	n=String(n);//'123'
  var k=n.length-1;
  str1='';
  while(k>=0){
	str1 +=n[k];  
	k -=1;
  }
  return Number(str1);
  
}
