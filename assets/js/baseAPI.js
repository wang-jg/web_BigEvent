//
$.ajaxPrefilter(function (option) {

    option.url = 'http://ajax.frontend.itheima.net' + option.url
    // option.url = 'http://www.liulongbin.top:3007' + option.url

    if (option.url.indexOf('/my/') != -1) {
        option.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //全局统一挂在
    // option.complate = function(res) {
    //     if (res.responseJSON.status === 1 && res.responseJSON.message == '身份认证失败') {
    //         localStorage.removeItem('token')
    //         location.href = '/login.html'
    //     }
    option.complete = function (res) {
        // console.log('执行了 complete 回调：')
        // console.log(res)
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 1. 强制清空 token
            localStorage.removeItem('token')
            // 2. 强制跳转到登录页面
            location.href = './login.html'
        }

    }
})