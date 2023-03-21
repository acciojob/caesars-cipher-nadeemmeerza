// Your Script here.
document.getElementById('btn').addEventListener('click', (e)=>{
	let value = document.getElementById('input').value;
	console.log(value);
	document.getElementById('p').innerText = rot13(value);
})

function rot13(params) {
	
	let result = "";
	for(let i=0; i<params.length; i++){
		let charcode = params.charCodeAt(i);
		if(charcode >=65 && charcode <=90){
			charcode = ((charcode-65)+13)%26+65;
		}
		result += String.fromCharCode(charcode);
	}
	return result;
}