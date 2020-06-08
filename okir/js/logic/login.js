$(document).ready(function () {
   $('#buttlogin').bind('click',buttloginClick);
})
function buttloginClick() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        // url: '../mock/login.json',
        url:'https://www.fastmock.site/mock/079446c1aacd8b22791e6979e2dd561e/denglu01/login/login',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            if (username == data.uid && password == data.pwd) {
                window.location.href = 'index.html'
            } else {
                alert('用户名或密码错误！')
            }
        }
    })
}

