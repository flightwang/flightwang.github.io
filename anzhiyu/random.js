var posts=["2024/02/02/MicroPython学习小计-相关命令-1/","2024/02/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };