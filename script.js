if (localStorage.getItem("Usernames") == null) {
	localStorage.setItem("Usernames", "[]");
}
if (localStorage.getItem("Emails") == null) {
	localStorage.setItem("Emails", "[]");
}
if (localStorage.getItem("Passwords") == null) {
	localStorage.setItem("Passwords", "[]");
}


const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
registerlink.addEventListener('click', () => {
	loginsec.classList.add('active')
})
loginlink.addEventListener('click', () => {
	loginsec.classList.remove('active')
})

// function loginpg() {
//     var vaildpass = document.getElementById("pass").value;
//     if (vaildpass.length <= 8 || vaildpass.length >= 20) {
//       document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
//       return false;
//     } else {
//       document.getElementById("vaild-pass").innerHTML = "";
//     }
//   }
function addNewWEField() {
	// console.log("Add");

	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 2);
	newNode.setAttribute('placeholder', "Enter");

	let weOb = document.getElementById("we");
	let weAddButtonOb = document.getElementById("weAddButton");

	weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewsField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("sField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 2);
	newNode.setAttribute('placeholder', "Enter");

	let sOb = document.getElementById("s");
	let sAddButtonOb = document.getElementById("sAddButton");

	sOb.insertBefore(newNode, sAddButtonOb);
}

function addNewAQField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("aqField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 2);
	newNode.setAttribute('placeholder', "Enter");

	let aqOb = document.getElementById("aq");
	let aqAddButtonOb = document.getElementById("aqAddButton");

	aqOb.insertBefore(newNode, aqAddButtonOb);
}
// generate resume
function generateresume() {
	let nameField = document.getElementById("nameField").value;

	let nameT = document.getElementById("nameT");

	nameT.innerHTML = nameField;

	document.getElementById("nameT2").innerHTML = nameField;

	document.getElementById("mobileT").innerHTML = document.getElementById("mobileField").value;

	document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

	document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

	document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

	document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;

	document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

	let wes = document.getElementsByClassName("weField");
	let str = "";
	for (let e of wes) {
		str = str + `<li> ${e.value} </li>`;
	}
	document.getElementById("weT").innerHTML = str;


	let sqs = document.getElementsByClassName("sField");
	let str1 = "";
	for (let e of sqs) {
		str1 += `<li> ${e.value} </li>`;
	}
	document.getElementById("sT").innerHTML = str1;

	let aqs = document.getElementsByClassName("aqField");
	let str2 = "";
	for (let e of aqs) {
		str2 += `<li> ${e.value} </li>`;
	}
	document.getElementById("aqT").innerHTML = str2;

	//set image
	let file = document.getElementById("imgField").files[0];
	console.log(file);
	let reader = new FileReader();
	reader.readAsDataURL(file);
	console.log(reader.result);

	reader.onloadend = function() {
		document.getElementById("imgTemplate").src = reader.result;
	};

	document.getElementById("resume-form").style.display = "none";
	document.getElementById("resume-template").style.display = "block";
}

function printresume() {
	// Hide the print button
	var printButton = document.getElementById("print");
	printButton.style.display = "none";

	// Call the print function
	window.print();

	// Show the print button again after printing
	printButton.style.display = "block";
}



// added later

function login() {

	const email = document.getElementById("lemail").value;
	const pass = document.getElementById("lpassword").value;

	const Emails = JSON.parse(localStorage.getItem("Emails"));
	const Passwords = JSON.parse(localStorage.getItem("Passwords"));

	let found = false;
	for (let i = 0; i < Emails.length; i++) {
		if (Emails[i] === email.toString() && Passwords[i] === pass.toString()) {
			found = true;
			break;
		}
	}

	if (found) {

		// open the resume builder html Headers, add that file instead of index.html
		window.open("resume.html");
	} else {
		alert("User Not Found! Please enter valid credentials.");
	}

	return false;
}



function signup() {

	var username = document.getElementById("username").value
	var email = document.getElementById("semail").value
	var pass = document.getElementById("spassword").value

	var ok = true;

	if (email === "" || email === null) {
		alert("Email is empty");
		ok = false;
	} else if (pass.length < 8) {
		alert("Enter a minimum 8-character password");
		ok = false;
	}


	if (ok) {

		var old_u = JSON.parse(localStorage.getItem("Usernames"));
		old_u.push(username);
		localStorage.setItem("Usernames", JSON.stringify(old_u));

		var old_e = JSON.parse(localStorage.getItem("Emails"));
		old_e.push(email);
		localStorage.setItem("Emails", JSON.stringify(old_e));

		var old_pw = JSON.parse(localStorage.getItem("Passwords"));
		old_pw.push(pass);
		localStorage.setItem("Passwords", JSON.stringify(old_pw));

		window.open("index.html");
	}

	return false;
}