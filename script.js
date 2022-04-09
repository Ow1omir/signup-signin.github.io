var users = {
	admin: {passwd: "12345678", logged: false,},
};

function addnewUser(a, b) {
	const main = document.querySelector("div.users-main");
	const div = document.createElement("div");
	div.innerHTML = `<div class="user-body"><div class="user-name">${a}</div><div class="user-passwd">${b}</div</div>`;
	main.appendChild(div);
};
const signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", () => {
	console.log('-------------------');
	const signUpLogin = document.querySelector("input#signUpLogin").value;
	const signUpPasaswd = document.querySelector("input#signUpPasaswd").value;
	const signUpRpPasaswd = document.querySelector("input#signUpRpPasaswd").value;

	if(signUpLogin.length > 20 || signUpLogin.length < 3) {
		console.log('Логин болжен быть 3 < пароль < 20 символов');
		const signUpLoginred = document.querySelector("input#signUpLogin").style.border = "1px solid red";
		setTimeout(() => {
			const signUpLoginold = document.querySelector("input#signUpLogin").style.border = "1px solid #ccc";
		}, 1000);
		return "error";
	};
	if(signUpLogin in users) {
		console.log("Такой логин уже используется");
		const signUpLoginred = document.querySelector("input#signUpLogin").style.border = "1px solid red";
		setTimeout(() => {
			const signUpLoginold = document.querySelector("input#signUpLogin").style.border = "1px solid #ccc";
		}, 1000);
		return null;
	};
	if(signUpPasaswd.length > 28 || signUpPasaswd.length < 8) {
		console.log("Пароль болжен быть 8 < пароль < 28 символов");
		const signUpPasaswdred = document.querySelector("input#signUpPasaswd").style.border = "1px solid red";
		setTimeout(() =>  {
			const signUpPasaswdold = document.querySelector("input#signUpPasaswd").style.border = "1px solid #ccc";
		}, 1000);
		return "error";
	};
	if(signUpPasaswd != signUpRpPasaswd) {
		console.log("Пароли должны совпадать");
		const signUpPasaswdred = document.querySelector("input#signUpPasaswd").style.border = "1px solid red";
		const signUpRpPasaswdred = document.querySelector("input#signUpRpPasaswd").style.border = "1px solid red";
		setTimeout(() =>  {
			const signUpPasaswdold = document.querySelector("input#signUpPasaswd").style.border = "1px solid #ccc";
			const signUpRpPasaswdred = document.querySelector("input#signUpRpPasaswd").style.border = "1px solid #ccc";
		}, 1000);
		return "ee";
	};
	console.log('Регистрация');
	addnewUser(signUpLogin, signUpPasaswd)
	return users[signUpLogin] = {
		passwd: signUpPasaswd,
		logged: false,
	};
});

const signInBtn = document.querySelector("#signInBtn");
signInBtn.addEventListener("click", () => {
	console.log('-------------------');
	const signInLogin = document.querySelector("input#signInLogin").value;
	const signInPasswd = document.querySelector("input#signInPasswd").value;

	if(signInLogin in users) {
		console.log("Идентификация прошла успешно");
		if(signInPasswd != users[signInLogin].passwd) {
			console.log("Не верный пароль");
			const signInLogin = document.querySelector("input#signInLogin").style.border = "1px solid red";
			const signInPasswd = document.querySelector("input#signInPasswd").style.border = "1px solid red";
			setTimeout( () => {
				const signInLogin = document.querySelector("input#signInLogin").style.border = "1px solid #ccc";
				const signInPasswd = document.querySelector("input#signInPasswd").style.border = "1px solid #ccc";
			},1000);
			return "error";
		};
	} else {
		const signInLogin = document.querySelector("input#signInLogin").style.border = "1px solid red";
		const signInPasswd = document.querySelector("input#signInPasswd").style.border = "1px solid red";

		setTimeout( () => {
			const signInLogin = document.querySelector("input#signInLogin").style.border = "1px solid #ccc";
			const signInPasswd = document.querySelector("input#signInPasswd").style.border = "1px solid #ccc";
		},1000);
		console.log("Идентификация не прошла успешно");
		return null;
	};
	console.log('Вход');
	const hiddenText = document.querySelector("div.hidden-text span").style.display = '';
	const username = document.querySelector("span#username").innerHTML = signInLogin;
	const signInLogingrean = document.querySelector("input#signInLogin").style.border = "1px solid greenyellow";
	const signInPasswdgraen = document.querySelector("input#signInPasswd").style.border = "1px solid greenyellow";
	setTimeout( () => {
		const signInLoginold = document.querySelector("input#signInLogin").style.border = "1px solid #ccc";
		const signInPasswdold = document.querySelector("input#signInPasswd").style.border = "1px solid #ccc";
	},1000);
	return users[signInLogin].logged = true;
});
