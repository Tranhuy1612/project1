var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
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
//check số lượng kí tự đăng nhập và mật khẩu
function checkLengthError(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, `phải có ít nhất ${min} kí tự `)
        return true
    }
    if (input.value.length > max) {
        showError(input, `không được quá ${max} kí tự`)
        return true
    }
    return false
}
// check mật khẩu trùng nhau
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }
    return false
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 6, 20)
    let isPasswordLengthError = checkLengthError(password, 6, 20)
    let isMatchError = checkMatchPasswordError(password, confirmPassword);

    // if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError) {
    //     // một trong các tiêu chí mà lỗi thì không cho thực hiện cái khác

    // } else {

    // }

});

//localStorag
function dangki(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    };
    if (isEmailError && isEmptyError && isUsernameLengthError && isPasswordLengthError && isMatchError) {
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        swal(" chúc mừng !", "bạn đã đăng kí thành công", "success");
        // alert('chúc mừng bạn đăng kí thành công');

    }
}

function dangnhap(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null) {
        alert("vui lòng nhập tên đăng nhập và mật khẩu")
    } else if (username == data.username && email == data.email && password == data.password) {
        alert("đăng nhập thành công")
        window.location.href = "trangchuyoutube.html"
    } else {
        alert("đăng nhập thất bại")
    }

}


// Đoạn code này là một chương trình JavaScript, dùng để xử lý một form đăng kí người dùng,
// bao gồm các chức năng như kiểm tra các trường nhập liệu, kiểm tra định dạng email,
//  kiểm tra độ dài tối thiểu và tối đa của tên đăng nhập và mật khẩu, và kiểm tra xem hai trường mật khẩu có khớp nhau không.
//   Đoạn code này sử dụng một số hàm để xử lý các tình huống lỗi và hiển thị các thông báo lỗi và thành công tương ứng.


// Cụ thể, các biến username, email, password, và confirmPassword lưu trữ các thẻ input trong form, và biến form lưu trữ thẻ form chính của form.


// Hàm showError được sử dụng để hiển thị thông báo lỗi cho một input,
//  bao gồm thêm class error vào phần tử cha và hiển thị thông báo lỗi trong phần tử small.


// Hàm showSuccess được sử dụng để xóa class error khỏi phần tử cha và xóa thông báo lỗi trong phần tử small.


// Hàm checkEmptyError được sử dụng để kiểm tra xem các input có bị để trống không, nếu có thì hiển thị thông báo lỗi tương ứng.
//  Hàm trả về giá trị true nếu có ít nhất một input bị để trống.



// Hàm checkEmailError được sử dụng để kiểm tra định dạng email của input email.
// Hàm sử dụng biểu thức chính quy để kiểm tra định dạng email và hiển thị thông báo lỗi tương ứng nếu không đúng định dạng.



// Hàm checkLengthError được sử dụng để kiểm tra độ dài tối thiểu và tối đa của tên đăng nhập và mật khẩu.
// Nếu độ dài không nằm trong khoảng cho phép, hàm sẽ hiển thị thông báo lỗi tương ứng.



// Hàm checkMatchPasswordError được sử dụng để kiểm tra xem hai trường mật khẩu có khớp nhau không.
// Nếu không khớp, hàm sẽ hiển thị thông báo lỗi tương ứng.


// Sau khi các hàm kiểm tra được thực hiện trên form,
// sự kiện submit sẽ được lắng nghe để thực hiện đăng kí người dùng và lưu trữ thông tin người dùng vào localStorage.
//  Nếu các kiểm tra không có lỗi, đoạn mã sẽ lưu trữ thông tin người dùng vào localStorage và hiển thị thông báo đăng kí thành công.



// Hàm dangnhap được sử dụng để đăng nhập

