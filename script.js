const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const regex=/[^A-Za-z0-9]/gi;

checkButton.addEventListener("click",checkPalindrome);
inputText.addEventListener('keydown',(e)=>{
if(e.key==='Enter'){
  checkPalindrome();
}
});

function checkPalindrome (){
const str= inputText.value;
if(str==="" ||str === null || str === undefined){
  alert("Please input a value");
  return;
}
console.log(str)
const strFiltered = str.replace(regex,"").toLowerCase();
if(strFiltered === strFiltered.split("").reverse().join("")){
  const drr= strFiltered.split("").reverse().join("");
  console.log(drr)
  const pInnerText = "is a palindrome.";
  createNode(str,pInnerText);
}else{
  const pInnerText = "is not a palindrome"
  createNode(str,pInnerText);
}
}
const createNode=(str,pInnerText)=>{
resultDiv.replaceChildren();
const presult = document.createElement('p');
const pText = document.createTextNode(`${str} ${pInnerText}`) ;
presult.id="pText";
resultDiv.appendChild(presult.appendChild(pText));
inputText.value="";
}