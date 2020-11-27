var base = "http://ajax.frontend.itheima.net";
$.ajaxPrefilter(function (options) {
    // 1.为所有的ajax添加请求个根路径
    console.log(options.url);
    console.log(options);
    options.url = base + options.url;
    // 2.为有权限的接口添加请求头
    
    // 3.控制用户访问的权限
    // options.
});