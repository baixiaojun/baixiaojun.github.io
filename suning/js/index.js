/*banner  开始*/
window.onload=function(){
	var bannerbox=$(".bannerbox")[0];
	var imgbox=getClass("imgbox")[0];
	var imgs=imgbox.getElementsByTagName("img");
	var btnbox=getClass("btnbox")[0];
	var btn=getClass("btn");
	var banner=getClass("bannersmallbox")[0];
	var imgleft=$(".imgleft")[0];
	var imgright=$(".imgright")[0];
	var bgcolor=["#2c0055","#c002ff","#eb5010","#878cb2","#20160c","#fef3e1"]
	var a=0;
	var b=0;
	var flag=true;
	function lunbo(type){
		if(flag){
			flag=false;
			type=type||"right";
			if(type=="right"){
				b=a+1;
				if(b>imgs.length-1){
					b=0;
				}
			}
			if(type=="left"){
				b=a-1;
				if(b<0){
					b=imgs.length-1;
				}
			}
			animate(imgs[b],{opacity:1},500,function(){
				flag=true;
			});
			animate(imgs[a],{opacity:0},500);
			btn[a].style.background="#5c4d51";
			btn[b].style.background="#ff7128";
			bannerbox.style.background=bgcolor[b];
			a=b;
		}
	}
	var t=setInterval(lunbo,2000);
	banner.onmouseover=function(){
		clearInterval(t);
		imgleft.style.display="block";
		imgright.style.display="block";
	}
	banner.onmouseout=function(){
		t=setInterval(lunbo,2000);
		imgleft.style.display="none";
		imgright.style.display="none";
	}
	for(var i=0;i<btn.length;i++){
		btn[i].aa=i;
		btn[i].onmouseover=function(){
			if(flag){
				flag=false;
				if(a==this.aa){
					flag=true;
				}else{
					btn[this.aa].style.background="#ff7128";
					btn[a].style.background="#5c4d51";
					animate(imgs[this.aa],{opacity:1},500,function(){
						flag=true;
					});
					animate(imgs[a],{opacity:0},500);
					bannerbox.style.background=bgcolor[this.aa];
					a=this.aa;
				}
			}
		}  
	}
	imgleft.onclick=function(){
		lunbo("left");
	}
	imgright.onclick=function(){
		lunbo("right");
	}
	/*bannerleft 开始*/
	var bannerleft=$(".banner-left")[0];
	var div=$(".bannerleft",bannerleft);
	var li=$("li",bannerleft);
	for(var i=0;i<div.length;i++){
		div[i].index=i;
		div[i].onmouseover=function(){
			for(var j=0;j<div.length;j++){
				li[j].style.display="none";
			}
			li[this.index].style.display="block";
		}
		div[i].onmouseout=function(){
			li[this.index].style.display="none";
		}

	}





	/*bannerleft 结束*/
	/*bannerRight 开始*/
	var bannerRight=getClass("banner-right-top")[0];
	var toptitle=getClass("toptitle")[0];
	var bannertitle=toptitle.getElementsByTagName("li");
	var bannerconbox=getClass("topconbox")[0];
	var bannercon=bannerconbox.getElementsByTagName("li");
	for(var i=0;i<bannertitle.length;i++){
		bannertitle[i].aa=i;
		bannertitle[i].onmouseover=function(){
			for(var j=0;j<bannertitle.length;j++){
			bannertitle[j].style.borderBottom="0";
			bannertitle[j].style.fontWeight="normal";
			bannercon[j].style.display="none";
			}
			this.style.borderBottom="2px solid #ff6000";
			this.style.fontWeight="bold";
			bannercon[this.aa].style.display="block";
		}
		
	}
	/*bannerRight 结束*/
	/*节点  开始*/
	var picturebox=$(".picturebox")[0];
	var left=$(".left")[0];
	var right=$(".right")[0];
	var pic=$(".picture")[0];
	var picture=$("ul",pic);
	var w=getStyle(picture[0],"width");
	var now=0;
	var next=0;
	var flag=true;
	picturebox.onmouseover=function(){
		left.style.display="block";
		right.style.display="block";
	}
	picturebox.onmouseout=function(){
		left.style.display="none";
		right.style.display="none";
	}
	left.onclick=function(){
		if(flag){
			flag=false;
				next=now+1;
			if(next>picture.length-1){
				next=0;
			}
		picture[next].style.left=-w+15+"px";
		animate(picture[now],{left:w},1000,function(){
			flag=true;
		});
		animate(picture[next],{left:0},1000);
		now=next;
		}
	
	}
	right.onclick=function(){
		if(flag){
			flag=false;
			next=now-1;
			if(next<0){
				next=picture.length-1;
			}
		picture[next].style.left=w+15+"px";
		animate(picture[now],{left:-w},1000,function(){
			flag=true;
		});
		animate(picture[next],{left:0},1000);
		now=next;
		}
		
	}

	/*节点  结束*/
	/*选项卡  开始*/
	/*function choose(m){
		var clothboxright=$(".clothboxright")[m];
		var kabox=$(".kabox",clothboxright);
		var clothfontright=$(".clothfontright")[m];
		var title=$("p",clothfontright);
		var span=$("span",clothfontright);
		for(var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onmouseover=function(){
				for(var j=0;j<title.length;j++){
					kabox[j].style.display="none";
					title[j].style.color="black";
					span[j].style.display="none";
				}
				kabox[this.index].style.display="block";
				title[this.index].style.color="#783e18";
				span[this.index].style.display="block";
			}
		}
	}
	for(var j=0;j<12;j++){
		choose(j);
	}*/

	/*选项卡   结束*/
	/*透明度轮播   开始*/
	function change(n){
		var activebox=$(".activebox")[n];
		var firsttus=$("img",activebox);
		var clothleft=$(".clothleft",activebox)[0];
		var clothright=$(".clothright",activebox)[0];
		var clothbtn=$(".clothbtn",activebox);
		var tehui=$(".firstfont",activebox);
		var f=setInterval(move,1500);
		var g=0;
		function move(type){
			type=type||"right";
			if(type=="right"){
				g++;
				if(g>firsttus.length-1){
					g=0;
				}
			}else if(type=="left"){
				g--;
				if(g<0){
					g=firsttus.length-1;
				}
			}
			for(var i=0;i<firsttus.length;i++){
				animate(firsttus[i],{opacity:0});
				tehui[i].style.display="none";
				clothbtn[i].style.background="rgba(0,0,0,0.3)";
			}
			animate(firsttus[g],{opacity:1});
			tehui[g].style.display="block";
			clothbtn[g].style.background="rgba(255,0,0,0.4)";
		}
		clothleft.onclick=function(){
			move("left");
		}
		clothright.onclick=function(){
			move("right");
		}
		activebox.onmouseover=function(){
			clearInterval(f);
			clothleft.style.display="block";
			clothright.style.display="block";
		}
		activebox.onmouseout=function(){
			f=setInterval(move,1500);
			clothleft.style.display="none";
			clothright.style.display="none";
		}
		for(var i=0;i<clothbtn.length;i++){
			clothbtn[i].index=i;
			clothbtn[i].onmouseover=function(){
				for(var j=0;j<firsttus.length;j++){
				animate(firsttus[j],{opacity:0});
				tehui[j].style.display="none";
				clothbtn[j].style.background="rgba(0,0,0,0.3)";
			}
			animate(firsttus[this.index],{opacity:1});
			tehui[this.index].style.display="block";
			clothbtn[this.index].style.background="rgba(255,0,0,0.3)";
			g=this.index;
			}
		}
	}
	for(var i=0;i<11;i++){
		change(i);
	}
	

	/*透明度轮播   结束*/
	/*楼层跳转  开始*/
	var floorbox=$(".floorbox")[0];
	var floorul=$("ul",floorbox)[0];
	var floorli=$("li",floorul);
	var floors=$(".clothbox");
	var now;
	window.onscroll=function(){
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		var top=obj.scrollTop;
		if(top>1500){
			floorul.style.display="block";
		}else if(top<1500){
			floorul.style.display="none";
		}
		for(var i=0;i<floors.length;i++){
			if(top>=floors[i].offsetTop-300){
				for(var j=0;j<floorli.length;j++){
					floorli[j].style.background="transparent";
					floorli[j].style.color="#000";
				}
			floorli[i].style.background="#fa0";
			floorli[i].style.color="#fff";
			now=i;
			}
		}
	}
	for(var i=0;i<floorli.length;i++){
		floorli[i].index=i;
		floorli[i].onclick=function(){
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			var top=floors[this.index].offsetTop-70;
			animate(obj,{scrollTop:top},500);
			now=this.index;
		}
		floorli[i].onmouseover=function(){
			floorli[this.index].style.background="#fa0";
			floorli[this.index].style.color="#fff";
		}
		floorli[i].onmouseout=function(){
			if(now==this.index){

			}else{
				floorli[this.index].style.background="transparent";
				floorli[this.index].style.color="#000";
			}
			
		}
	}

	/*楼层跳转  结束*/

	/*下拉框  开始*/
	function xiala(a){
		var shang=$(".my")[0];
		var hidden=$(".hidden",shang)[0];
		var h=getStyle($("li",hidden)[0],"height");
		var li=$("li",hidden).length;
		var height=h*li;
		shang.onmouseover=function(){
			animate(hidden,{height:height},100);
			shang.style.background="#fff";
			shang.style.borderColor="#eee";
			shang.style.borderBottom=0;
			hidden.style.borderColor="#eee";
			hidden.style.borderTop=0;
		}
		shang.onmouseout=function(){
			animate(hidden,{height:0},100);
			shang.style.borderColor="#f5f5f5";
			shang.style.background="#f5f5f5";
			shang.style.borderBottom=0;
			hidden.style.borderTop=0;
			hidden.style.borderColor="#fff";
		}
	}
	for(var i=0;i<1;i++){
		xiala(i);
	}

	function kuang(a){
		var shang=$(".xia")[a];
		var hidden=$(".hidden",shang)[0];
		var h=getStyle($("li",hidden)[1],"height");
		var li=Math.ceil($("li",hidden).length/2);
		var height=h*li;
		shang.onmouseover=function(){
			animate(hidden,{height:height},100);
			shang.style.background="#fff";
			shang.style.borderColor="#eee";
			shang.style.borderBottom=0;
			hidden.style.borderColor="#eee";
			hidden.style.borderTop=0;
		}
		shang.onmouseout=function(){
			animate(hidden,{height:0},100);
			shang.style.borderColor="#f5f5f5";
			shang.style.background="#f5f5f5";
			shang.style.borderBottom=0;
			hidden.style.borderTop=0;
			hidden.style.borderColor="#fff";
		}
	}
	for(var i=0;i<4;i++){
		kuang(i);
	}


	function nav(a){
		var shang=$(".webnav")[a];
		var hidden=$(".hidden",shang)[0];
		var h=getStyle($("li",hidden)[1],"height");
		var height=h;
		shang.onmouseover=function(){
			animate(hidden,{height:height},100);
			shang.style.background="#fff";
			shang.style.borderColor="#eee";
			shang.style.borderBottom=0;
			hidden.style.borderColor="#eee";
			hidden.style.borderTop=0;
		}
		shang.onmouseout=function(){
			animate(hidden,{height:0},100);
			shang.style.borderColor="#f5f5f5";
			shang.style.background="#f5f5f5";
			shang.style.borderBottom=0;
			hidden.style.borderTop=0;
			hidden.style.borderColor="#fff";
		}
	}
	for(var i=0;i<1;i++){
		nav(i);
	}








	/*下拉框 结束*/

	/*右边   开始*/

	function r(a){
		var shang=$(".r3box")[a];
		var hidden=$(".rhidden",shang)[0];
		var w=getStyle($("p",hidden)[0],"width");
		var width=w;
		shang.onmouseover=function(){
			animate(hidden,{width:width},100);
		}
		shang.onmouseout=function(){
			animate(hidden,{width:0},100);
		}
	}
	for(var i=0;i<7;i++){
		r(i);
	}
	function r1(a){
		var shang=$(".r6box")[0];
		var hiddens=$(".rhidden1",shang)[0];
		var hidd=$(".rh1",hiddens)[0];
		var hidden=$("img",$(".rh1",hiddens)[0])[0];
		var w=getStyle(hidd,"width");
		var rsan=$(".rsan",shang)[0];
		var width=w;
		shang.onmouseover=function(){
			animate(hidd,{width:width},200);
			rsan.style.display="block";
		}
		shang.onmouseout=function(){
			animate(hidd,{width:0},200);
			rsan.style.display="none";
		}
	}
	for(var i=0;i<1;i++){
		r1(i);
	}

	/*右边   结束 */
	/*内容猜你喜欢 开始*/
	var likefontright=$(".likefontright")[0];
	var likeconbox=$(".likeconbox")[0];
	var likeul=$("ul",likeconbox);
	var linow=0;
	var linext=0;
	likefontright.onclick=function(){
		linext=linow+1;
		if(linext>likeul.length-1){
			linext=0;
		}
		for(var i=0;i<likeul.length;i++){
			likeul[i].style.display="none";
		}
		likeul[linext].style.display="block";
		linow=linext;
	}



	/*内容猜你喜欢 结束*/
	/*返回顶部  开始*/
	var returns=$(".return")[0];
	var fanhui=$(".rhidden",returns)[0];
	fanhui.onclick=function(){
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		var top=obj.scrollTop;
		animate(obj,{scrollTop:0});
	}


	/*返回顶部  结束*/





}




