//console.log("hej du!");

const userList = document.getElementById('userList');

let jsondb = fetch("http://localhost:3000/users");

jsondb.then((response) => {
	//console.log(response.json());
	return response.json();
}).then((users) => {
	console.log(users);
	const html = "";
	users.forEach((user) =>{
		const list = `<li></li>`
	})
});

