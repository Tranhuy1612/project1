
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var form = document.querySelector('form');
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}


function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'không được để trống')
        } else {
            showSuccess(input)
        }
    });
    return isEmptyError
}
//chack email
function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isEmptyError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'chưa đúng định dạng email ')
    }
    return isEmptyError
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([email, password])

    //chack email
    let isEmailError = checkEmailError(email)


    // if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError) {
    //     // một trong các tiêu chí mà lỗi thì không cho thực hiện cái khác

    // } else {

    // }

});
