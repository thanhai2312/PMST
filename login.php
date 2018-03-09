<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Thế giới quanh em</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
      <style>
      /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
      /*Inspired by Basecamp Register form */

@keyframes shake{
    0%, 100% {
      transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

@import url(https://fonts.googleapis.com/css?family=Jolly+Lodger);

body{
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 0.8em
}
html{
  height: 100%; 
  width: 100%;
}
.container{
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
	width: 800px;
  height: 400px;
}

.dolly{
  position: relative;
  width: 250px;
  height: 450px;
  float: left;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4848/dolly.jpg') no-repeat;
}
.error .dolly::before{
	content: '';
	display: block;
	position: absolute;
	top: 66px; right: -49px;
	width: 205px;
	height: 160px;
	background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4848/dolly_bad.jpg') no-repeat;
}
.dolly::after{
  content: '';
  display: block;
  position: absolute;
  
  width: 170px;
  height: 74px;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4848/arm.png') no-repeat;
}

[data-position='1'] .dolly::after{
  top: 130px;
  right: -70px;
}
[data-position='2'] .dolly::after{
  top: 165px;
  right: -62px;
  transform: rotate(30deg);
}
[data-position='3'] .dolly::after{
  top: 184px;
  right: -40px;
  transform: rotate(60deg);
}
[data-position='4'] .dolly::after{
  top: 200px;
  right: -30px;
  transform: rotate(70deg);
}


.register{
  width: 500px;
  margin-top: 20px;
  float: right;
}

.dolly .credit{
    position: absolute;
    bottom: 35px;
    right: -10px;
    font-size: 1em;
    text-decoration: none;
    color: #000;
   
}

label {
  display:block;
  margin-bottom: 5px;
  font-size: 1.2em;
  color: #7a3e1a;
}
.input-txt{
  box-sizing: border-box;
  padding: .4rem .9rem;
  width: 300px;
  margin-bottom: 1rem;
  border: 1px solid #3fb0da;
  color: #444;
  border-radius: 4px;
  font-size: 1.3em;
}
.error .input-txt:focus{
  border: 1px solid red;
  animation: shake .65s;
}
button[type=submit]{
  box-sizing: border-box;
  display:block;
  padding: 8px 30px 10px 30px;
  margin-top: 10px;
  width: 300px;
  text-shadow: 0 1px 1px #fff;
  border: 1px solid #7f3f1b;
  border-radius: 4px;
  color: #7a3e1a;
  font-size: 1.2em;
  background-image: linear-gradient(#e4d730,#998002);
}

    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>

</head>

<body>

  
  
	<div class="container" data-position="1">

	  <div class="dolly"><a href="http://maluto.com" target="_parent" class="credit"> </a></div>

	  <div class="register">
	  
	    <h1 class="register-heading">Register </h1>
	      
	    <form method="post" id="form" action="">
	      	<label for="email">Email</label>
	        <input type="email" 
	               name="email" 
	               placeholder="abc123@gmail.com" 
	               minlength="2"
	               class="input-txt" data-pos="1" required/>
	    	<label for="pass">mật khẩu</label>
                <input type="password" 
	               name="pass" 
	               placeholder="*******" 
	               minlength="2"
	               class="input-txt" data-pos="2" required/>
                
                

	        <button type="submit"> Đăng nhập </button>
	    </form>

	  </div>

	</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  

    <script  src="js/index.js"></script>




</body>

</html>
