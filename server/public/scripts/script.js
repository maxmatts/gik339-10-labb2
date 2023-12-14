//console.log("hej du!");
const mainContainer = document.getElementById('mainContainer');

let jsondb = fetch("http://localhost:3000/users");

jsondb.then((response) => {
	//console.log(response.json());
	return response.json();
}).then((users) => {
	console.log(users);
	const ulList = document.createElement('ul');
	users.forEach((user) =>{
		const listItem = document.createElement('li');
		listItem.style.borderColor = user.color;
		listItem.insertAdjacentHTML('afterbegin', `<span>${user.id}</span><span>${user.username}</span><span>${user.firstName}</span><span>${user.lastName}</span>`);
		ulList.appendChild(listItem);
	})
	mainContainer.appendChild(ulList);
});

