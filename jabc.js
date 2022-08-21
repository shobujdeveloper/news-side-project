"use strict";

var searchBox = document.querySelectorAll(
'.search-box input[type="text"] + span');


searchBox.forEach(elm => {
  elm.addEventListener("click", () => {
    elm.previousElementSibling.value = "";
  });
});


*{margin:0;padding:0;}
html,body {
	height:100%;
}

body {
	margin: 0 auto;
	}

.full_wrapper{
	width:1200px;
	background:#ffff;
	margin:0 auto;
	height:100%;
	font-family:cambria;
}
.logo{
	padding:30px;
	float:left;
	position:relative;
	z-index:100;	
}
.logo a{
	font-size:50px;
	font-weight:bold;
	text-decoration:none;
	color:black;
}
.menu{
	float:left;
	padding-top:30px;
	position:relative;
	z-index:95;	
}

.menu ul{
	background:white;
	width:550px;
	height:27px;
	padding-top:12px;
	margin-left:100px;
	list-style-type:none;
	
}
.menu ul li{
	display:inline;
	padding-left:25px;
	
}
.menu ul li a{
	text-decoration:none;
	color:black;
	
}
.menu ul li a:hover{
	color:orange;
}
.phone{
	position:relative;
	z-index:90;
	top:-69px;
}
.phone img{	
	float:right;
	width:664px;
	cursor:pointer;
}
.wrapper{
	width:442px;
	position:relative;
	z-index:85;	
	
}
.wrapper h1{
	padding-top:250px;
	padding-left:30px;
	font-size:35px;
}
.wrapper span{
	color:#fba70b;
}
.wrapper p{
	padding-left:30px;
	padding-top:30px;
	font-family:justify;
	font-size:16px;
}
.wrapper p span{
	color:blue;
	font-size:16px;
	cursor:pointer;
}
.wrapper button{
	margin-left:30px;
	margin-top:30px;
	padding:10px 30px 10px 30px;
	border-radius:25px;
	background:#fba70b;
	color:#ffff;
	cursor:pointer;
}

.wrapper0{
	margin-left:180px;
	position:relative;
	z-index:80;	
}
.wrapper1{
	width:220px;
	height:260px;
	float:left;
	margin-top:268px;
	text-align:center;
	padding:20px;
	background:#fffefd;
	border:2px solid #f4f4f4;
	border-radius:5px;
}
.wrapper1 img{
	padding-top:10px;
	padding-bottom:10px;
	cursor:pointer;
}
.wrapper1 h2{
	padding-bottom:10px;
}
.wrapper1 p{
	padding-bottom:20px;
}
.wrapper1 button{
	padding:10px 30px 10px 30px;
	border-radius:25px;
	background:#fba70b;
	color:#ffff;
	cursor:pointer;
}
.wrapper2{
	width:220px;
	height:260px;
	float:left;
	margin-top:28px;
	text-align:center;
	padding:20px;
	background:#fffefd;
	border:2px solid #f4f4f4;
	border-radius:5px;
	margin-left:30px;
}
.wrapper2 img{
	padding-top:10px;
	padding-bottom:10px;
	cursor:pointer;
}
.wrapper2 h2{
	padding-bottom:10px;
}
.wrapper2 p{
	padding-bottom:20px;
}
.wrapper2 button{
	padding:10px 30px 10px 30px;
	border-radius:25px;
	background:#fba70b;
	color:#ffff;
	cursor:pointer;
}
.wrapper3{
	width:220px;
	height:260px;
	float:left;
	margin-top:27px;
	text-align:center;
	padding:20px;
	background:#fffefd;
	border:2px solid #f4f4f4;
	border-radius:5px;
	margin-left:30px;
	

}
.wrapper3 img{
	padding-top:10px;
	padding-bottom:10px;
	cursor:pointer;
}
.wrapper3 h2{
	padding-bottom:10px;
}
.wrapper3 p{
	padding-bottom:20px;
}
.wrapper3 button{
	padding:10px 30px 10px 30px;
	border-radius:25px;
	background:#fba70b;
	color:#ffff;
	cursor:pointer;
}
.leayr{
	float:left;
	margin-right:500px;
	position:relative;
	z-index:40;
	top:-100px;
}

.leayr img{
	width:426px;
}
.phone1{
	position:relative;
	z-index:70;
	top:-650px;
}
.phone1 img{
	margin-left:220px;
	width:350px;
	cursor:pointer;
}
.full_content{
	float:right;
	position:relative;
	z-index:70;
	top:-1020px;
	margin-right:60px;

}
.content{
	
}
.img1{
	float:left;
	cursor:pointer;
}
.img2{
	float:right;
	cursor:pointer;
}
.img3{
	float:right;
	cursor:pointer;
}

.content1{
	float:left;
	width:400px
}
.content1 h3{
	margin-left:15px;
	margin-bottom:15px;
}
.content1 p{
	margin-left:15px;
	line-height:1.5em;
	margin-bottom:30px;
}
.content1 p span{
	color:#2180e4;
	cursor:pointer;
} 
.content2{
	float:left;
	width:400px;
}
.content2 h3{
	margin-left:15px;
	margin-bottom:15px;
}
.content2 p{
	margin-left:15px;
	line-height:1.5em;
	margin-bottom:30px;
}
.content2  p span{
	color:#2180e4;
	cursor:pointer;
}
.content3{
	float:left;
	width:400px;
}
.content3 h3{
	margin-left:15px;
	margin-bottom:15px;
}
.content3 p{
	margin-left:15px;
	line-height:1.5em;
}
.leayr1{
	float:right;
	margin-left:500px;
	position:relative;
	z-index:60;
	top:-1070px;
}
.leayr1 img{
	width:350px;
}
.conten_4{
	width:1200px;
	background:#ffff;
	position:relative;
	z-index:55;
	top:-1600px;
	padding-top:100px;
	float:left;
}
.conten5{
	text-align:center;
}
.conten5 h2{
	padding-bottom:20px;
	font-size:30px;
}
.conten5 h2 span{
	color:#f47d3a;
} 
.conten5 p{
	margin-left:240px;
	margin-right:240px;
	padding-bottom:80px;
	
	
}
.contact6{
	width:300px;
	height:250px;
	background:#f3665a;
	text-align:center;
	float:left;
	margin-left:250px;
	
}
.contact6 h6{
	padding-top:40px;
	font-size:25px;
	
}
.contact6 h6 span{
	color:#ffff;
}
.contact6 h2{
	padding-top:10px;
	padding-bottom:10px;
	color:#ffff;
}
.contact6 p{
	line-height:1.3em;
	color:#ffff;
}
.contact6 h5{
	margin-top:15px;
	color:#ffff;
}
.contact7{
	width:300px;
	height:250px;
	background:#f3665a;
	text-align:center;
	float:left;
	margin-left:80px;
	
}
.contact7 h6{
	padding-top:40px;
	font-size:25px;
	
}
.contact7 h6 span{
	color:#ffff;
}
.contact7 h2{
	padding-top:10px;
	padding-bottom:10px;
	color:#ffff;
}
.contact7 p{
	line-height:1.3em;
	color:#ffff;
}
.contact7 h5{
	margin-top:15px;
	color:#ffff;
}
.contact8{
	float:right;
	width:80px;
	height:80px;
	background:#f3665a;
	border-radius:10px;
	margin-right:140px;
	margin-top:60px;
	position:relative;
	z-index:65;
	cursor:pointer;
}
.contact8 h6{
	text-align:center;
	color:#ffff;
	padding-top:20px;
	font-size:30px;
	cursor:pointer;
}
.contact9{
	float:right;
	width:80px;
	height:80px;
	background:#f47c45;
	border-radius:10px;
	margin-right:80px;
	margin-top:px;
	position:relative;
	z-index:70;
	top:-20px;
	cursor:pointer;
}
.contact9 h6{
	text-align:center;
	color:#ffff;
	padding-top:20px;
	font-size:30px;
	cursor:pointer;
	
}
.man{
	position:relative;
	z-index:60;
	top:-384px;
	margin-left:186px;
	border-radius:10px;
}
.man img{
	cursor:pointer;
}
.man1{
	float:right;
	position:relative;
	z-index:60;
	top: -1912px;
    margin-right: 504px;
	border-radius:10px;
	cursor:pointer;
}
.mein_footer{
	position:relative;
	z-index:30;
	top: -1550px;
	height: 580px;
}
.footer{
	position:relative;
	z-index:60;
	
}
.footer img{
	width:1200px;
	
}
.footer1{
	width:500px;
	height:350px;
	position:relative;
	z-index:65;
	top: -430px;
	background:#ffff;
	margin-left:130px;
	border-radius:10px;
}
.footer1 form{
	
}
.footer1 form input{
	width:200px;
	height:35px;
	margin-left:25px;
	margin-top:50px;
	padding-left:7px;
}
#Message input{
	width:440px;
	padding-bottom:50px;
}
.footer1 form button {
	margin-left: 158px;
    padding: 12px 23px 12px 23px;
	margin-top:20px;
	border-radius:25px;
	background:#fba70b;
	color:#ffff;
	cursor:pointer;
}
.footer2{
	width:500px;
	float:right;
	position:relative;
	z-index:65;
	top: -730px;
	margin-right:50px;
	
}
.footer2 h2{
	padding-bottom:15px;
	padding-top:5px;
	font-size:35px;
	color:#ffff;
}
.footer2 p{
	line-height:1.4em;
	color:#ffff;
}
.footer3{
	float:right;
	position:relative;
	z-index:60;
	top: -700px;
	margin-left:400px;
	margin-right:355px;
	
}
.footer3 img{
	width:20px;
	height:20px;
	padding-left:20px;
}










	