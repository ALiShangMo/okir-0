$(document).ready(function(){
    $('#btnLogin').bind('click',btnLoginClick);
})


function btnLoginClick(){

    var username=$('#username').val();
    var password=$('#password').val();

    $.ajax({
       /* url:'../mock/login.json',*/
        url:'../../mock/login.json',
        method:'get',
        dataType:'json',

        success:function(data){

              if(username==data.uid&&password==data.pwd){
                       window.location.href='index.html';
                }else{
                      alert('用户名和密码错误');
                }
        }
    })
}

