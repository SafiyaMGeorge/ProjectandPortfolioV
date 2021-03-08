let btn = document.getElementById('btn');
let returnData = document.querySelector('response');
btn.addEventListener('click',function(){
	event.preventDefault();
	let input = document.getElementById('userInput').value;
	fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+input+"&page=1&r=json",{
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});
})

