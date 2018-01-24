function RequeteApi(url,id)
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById(id).innerHTML = jsonPretty;
}
};
xmlhttp.open("GET",url, true);
xmlhttp.send();
}

function myFunction1() {
      var input = document.getElementById("AdressInput").value;
      var isAddress = /^[0-9a-zA-Z]{34}$/.test(input);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress").innerHTML = jsonPretty;
      }
      };
      xmlhttp.open("GET", "https://bitcoin.mubiz.com/address/" + input + "/", true);
      xmlhttp.send();
    }
	
function myFunction2() {
      var input = document.getElementById("AdressInput2").value;
      var xmlhttp = new XMLHttpRequest();
	  var isHash = /^[0-9a-fA-F]{64}$/.test(input);
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress2").innerHTML = jsonPretty;
      }
      };
      xmlhttp.open("GET", "https://bitcoin.mubiz.com/block_hash/" + input + "/", true);
      xmlhttp.send();
    }

	function myFunction3() {
      var input = document.getElementById("AdressInput3").value;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress3").innerHTML = jsonPretty;
      }
      };
      xmlhttp.open("GET", "https://bitcoin.mubiz.com/block_index/" + input + "/", true);
      xmlhttp.send();
    }
	
	function myFunction4() {
      var input = document.getElementById("AdressInput4").value;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress4").innerHTML = jsonPretty;
      }
      };
      xmlhttp.open("GET", "https://bitcoin.mubiz.com/transaction/bitcoin_trx/" + input + "/", true);
      xmlhttp.send();
    }
	
RequeteApi("https://bitcoin.mubiz.com/info","info");
RequeteApi("https://bitcoin.mubiz.com/blockchaininfo","blockchaininfo");
RequeteApi("https://bitcoin.mubiz.com/mininginfo","mininginfo");
RequeteApi("https://bitcoin.mubiz.com/peerinfo","peerinfo");











