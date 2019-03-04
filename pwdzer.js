
// ask for a password to analyze

var password = process.argv[2];

// - long one, at least 9
if (password.length >= 9) {
	console.log("Length: great than 9.  Awesome!")
} else {
	console.log("Not awesome... Too short")
}
// - at least one special character

var special = "~!@#$%^&*()";
for (i = 0; i < password.length; i++) {
	if (special.includes(password[i])) {
		console.log("Special Characters... found one. More Awesome!")
	}
}

// - at least one number
var numbers = "1234567890";
for (i = 0; i < password.length; i++) {
	if (numbers.includes(password[i])) {
		console.log("Numbers... found one. More Awesome!")
	}
}

// - it can't be your email... or similar
// - at least one uppercase and one lowercase letters
