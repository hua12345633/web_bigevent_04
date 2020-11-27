$(function () {
    // 1.点击按钮切换注册登录页面
    $('#form_reg').on('click', function () {
        $('.reg_box').show();
        $('.login_box').hide();
    })
    $('#form_login').on('click', function () {
        $('.reg_box').hide();
        $('.login_box').show();
    })

    // 2.验证表单的格式
    var form = layui.form;
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            if (value !== $('.reg_box [name=password]').val()) {
                return "两次密码不一致，请重新输入"
            }
        }
    })

    // 3.注册ajax
    $('#reg_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                // console.log(res);
                layui.layer.msg("注册成功");
                $('#form_login').click();
            }
        })
    })
    // 4.登录ajax
    $('#login_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                localStorage.setItem("token", res.token);
                location.href = "/index.html";
            }
        })
    })
})