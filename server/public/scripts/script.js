//console.log("hej du!");

let jsondb = fetch("http://localhost:3000/users");

jsondb.then((response) => {
	//console.log(response.json());
	return response.json();
}).then((users) => {
	console.log(users);
});

