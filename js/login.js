document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('userEmail');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //get user Password
    const passwordField = document.getElementById('userpass');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    //check email and password
    if (userEmail == 'faruk@gmail.com' && userPassword == '12345') {
        // console.log('Valid user')
        window.location.href = 'banking.html'
    } else {
        console.log('invalid user!!')
    }
})
