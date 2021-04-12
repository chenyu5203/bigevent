$.ajaxPrefilter(function(options){
    options.url="http://api-breakingnews-web.itheima.net"+options.url
      // 统一为有权限的接口，设置 headers 请求头
  if (options.url.includes('/my/') ) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }
  //全局统一挂载complete回调函数
  options.complete=function(response){ 
    console.log(response);
    if(
        response.responseJSON.status===1&&
        response.responseJSON.message==='身份认证失败！'
    ){
        location.href='/login.html'
    }
}
});