var session, ans = 0;

function init()
{
	session = document.getElementById("session");
}

function comp(id)
{   
	var input = document.getElementById(id);
	var str   = input.value;

	ans = eval(str);

	var ansNode = document.createTextNode("ans: " + str + " = " + ans);
	var parNode = document.createElement("p"); 

	parNode.appendChild(ansNode);
	session.appendChild(parNode);
	input.value="";
}
