const API_KEY = "YOUR_API_KEY";
async function getStock(){
const symbol=document.getElementById("symbol").value;
const url=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
const response=await fetch(url);
const data=await response.json();
const stock=data["Global Quote"];
document.getElementById("result").innerHTML=`
<h2>${symbol}</h2>
<p>Price : $${stock["05. price"]}</p>
<p>Change : ${stock["09. change"]}</p>
<p>Change % : ${stock["10. change percent"]}</p>
`;
}
