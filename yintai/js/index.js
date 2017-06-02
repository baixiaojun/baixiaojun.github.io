$(function(){
	var imgs=$("a",$(".imgbox")[0]);
	var btnbox=$(".btnbox")[0];
	var btn=$(".btn");
	var banner=$(".banner")[0];
	var bannerbox=$(".bannerbox")[0];
	var leftbtn=$(".leftbtn")[0];
	var rightbtn=$(".rightbtn")[0];
	var bgcolor=["url(img/5.jpg) center center","url(img/1.jpg) center center","url(img/6.jpg) center center","url(img/130.jpg) center center"];
	var flag=true;
	var num=0;
	function change(type){
		if(flag){
			flag=false;
			type=type||"right";
			if(type=="right"){
				num++;
				if(num>=imgs.length){
					num=0;
				}
			}else if(type=="left"){
				num--;
				if(num<=-1){
					num=imgs.length-1;
				}
			}		
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.opacity=0;
				btn[i].style.background="black";
			}
			animate(imgs[num],{opacity:1},500,function(){
				flag=true;
			});
		btn[num].style.background="rgba(255,0,0,1)";
		bannerbox.style.background=bgcolor[num];		
		}
	}
	var y=setInterval(change,2000);
	for(var i=0;i<btn.length;i++){
		btn[i].aa=i;
		btn[i].onmouseover=function(){
			if(flag){
				flag=false;
				  for(var j=0;j<btn.length;j++){
					btn[j].style.background="black";
					imgs[j].style.opacity=0;
				}
			this.style.background="rgba(255,0,0,1)";
			animate(imgs[this.aa],{opacity:1},500,function(){
				flag=true;
			})
			bannerbox.style.background=bgcolor[this.aa];
			num=this.aa;
			}		  
		}
		
	}
	banner.onmouseover=function(){
		clearInterval(y);
		leftbtn.style.display="block";
		rightbtn.style.display="block";		
	}
	banner.onmouseout=function(){
		y=setInterval(change,2000);
		leftbtn.style.display="none";
		rightbtn.style.display="none";	
	}
	leftbtn.onclick=function(){
		change("left");
	}
	rightbtn.onclick=function(){
		change("right");
	}
/*banner 结束*/
/*选项卡  开始*/


	/*function tab(num){
		var titlebox=getClass("x_title")[num];
		var title=$("li",titlebox);
		var conbox=$(".x_conbox")[num];
		var sanjiao=$("span",titlebox);
		alert(sanjiao.length)
		var con=$("li",conbox);
		for(var i=0;i<title.length;i++){
			title[i].aa=i;
			title[i].onmouseover=function(){
				for(var j=0;j<title.length;j++){
					title[j].style.borderBottom="5px solid black";
					title[j].style.fontWeight="normal";
					con[j].style.display="none";
					sanjiao[j].style.display="none";
				}
			title[this.aa].style.borderBottom="5px solid #e5004f";
			title[this.aa].style.fontWeight="bold";
			con[this.aa].style.display="block";
			sanjiao[this.aa].style.display="block";
			}
		}
			
	}
	for(var i=0;i<2;i++){
		tab(i);
	}*/




	var titlebigbox=getClass("contentbox-left")[0];
	var titlebox=getClass("title",titlebigbox)[0];
	var title=titlebox.getElementsByTagName("li");	
	var sanjiao=titlebox.getElementsByTagName("span");
	var conbox=getClass("conbox")[0];
	var con=conbox.getElementsByTagName("li");
	var contu=conbox.getElementsByTagName("a");
	for(var i=0;i<title.length;i++){
		title[i].bb=i;
		title[i].onmouseover=function(){
		for(var j=0;j<title.length;j++){	
				title[j].style.borderBottom="5px solid #333";
				sanjiao[j].style.display="none";
				con[j].style.display="none";
				title[j].style.fontWeight="normal";
			}
			title[this.bb].style.borderBottom="5px solid #e5004f";
			sanjiao[this.bb].style.display="block";
			con[this.bb].style.display="block";
			title[this.bb].style.fontWeight="bold";
		}
	}
	for(var i=0;i<contu.length;i++){
		contu[i].onmouseover=function(){
			this.style.opacity=0.7;
		}
		contu[i].onmouseout=function(){
			this.style.opacity=1;
		}
	}
	for(var i=0;i<8;i++){
		contu[i].onmouseover=function(){
			this.style.opacity=1;
		}
	}


	var specialtitlebox=getClass("specialbox-top")[0];
	var specialtitle=specialtitlebox.getElementsByTagName("li");
	var specialsanjiao=specialtitlebox.getElementsByTagName("span");
	var specialconbox=getClass("special")[0];
	var specialcon=specialconbox.getElementsByTagName("li");
	var specialtu=specialconbox.getElementsByTagName("a");
	for(var i=0;i<specialsanjiao.length;i++){
		specialtitle[i].aa=i;
		specialtitle[i].onmouseover=function(){
			for(var j=0;j<specialsanjiao.length;j++){
				specialtitle[j].style.borderBottom="3px solid #333";
				specialtitle[j].style.fontWeight="normal";
				specialsanjiao[j].style.display="none";
				specialcon[j].style.display="none";
			}
			this.style.borderBottom="3px solid #e5004f";
			this.style.fontWeight="bold";
			specialsanjiao[this.aa].style.display="block";
			specialcon[this.aa].style.display="block";
		}
	}
	for(var i=0;i<6;i++){
		specialtu[i].onmouseover=function(){
			this.style.opacity=0.7;
		}
		specialtu[i].onmouseout=function(){
			this.style.opacity=1;
		}
	}



/*选项卡  结束*/
	 /*内容1 线 开始*/
    var linebox=$(".linebox");
    var leftxian=$(".leftxian");
    var rightxian=$(".rightxian");
    var topxian=$(".topxian");
    var bottomxian=$(".bottomxian");
    for(var i=0;i<linebox.length;i++){
    	linebox[i].aa=i;
    	linebox[i].onmouseover=function(){
    		var w=getStyle(this,"width");
    		var h=getStyle(this,"height");
    		animate(leftxian[this.aa],{height:h+2});
    		animate(topxian[this.aa],{width:w+2});
    		animate(bottomxian[this.aa],{width:w+2});
    		animate(rightxian[this.aa],{height:h+2});
    	}
    	linebox[i].onmouseout=function(){
    		var w=getStyle(this,"width");
    		var h=getStyle(this,"height");
    		animate(leftxian[this.aa],{height:0});
    		animate(topxian[this.aa],{width:0});
    		animate(bottomxian[this.aa],{width:0});
    		animate(rightxian[this.aa],{height:0});
    	}
    }

    /*内容1 线 结束*/



     /*节点轮播   开始*/
    function lunbo(obj,n){
		var box=obj;
	    var tu=$("a",box);
	    var xiaobtn=$(".xiaobtn",$(".xiaobtnbox")[n]);
	    var left=$(".centerbtnleft")[n];
	    var right=$(".centerbtnright")[n];
	    var w=tu[0].offsetWidth;
	    var now=0;
	    /*for(var i=0;i<xiaobtn.length;i++){
	    	xiaobtn[i].index=i;
	    	xiaobtn[i].onmouseover=function(){
	    		if(i==1){
	    			animate(tu[this.index],{left:0},500);
	    			animate(tu[0],{left:-w},500);
		    		xiaobtn[this.index].style.background="url(img/136.png) 0 -13px";
		    		xiaobtn[0].style.background="url(img/136.png)";
	    		}
	    		if(i==0){
	    			animate(tu[this.index],{left:0},500);
	    			animate(tu[1],{left:w},500);
		    		xiaobtn[this.index].style.background="url(img/136.png) 0 -13px";
		    		xiaobtn[1].style.background="url(img/136.png)";
	    		}
	    	}
	    }*/
	    box.onmouseover=function(){
	    	left.style.display="block";
	    	right.style.display="block";
	    }
	    box.onmouseout=function(){
	    	left.style.display="none";
	    	right.style.display="none";
	    }
	    left.onclick=function(){
	    	if(now==1){	
	    		animate(tu[1],{left:w},500);
	    		animate(tu[0],{left:0},500);
	    		xiaobtn[0].style.background="url(img/136.png) 0 -13px";
	    		xiaobtn[1].style.background="url(img/136.png)";
	    		left.style.background="url(img/4.png)";
	    		now=0;
	    	}
	    	right.onmouseover=function(){
	    		right.style.background="url(img/4.png) -30px -60px";
	    	} 
	    }
	    right.onclick=function(){
	    	if(now==0){
	    		tu[1].style.left=w+"px";
	    		animate(tu[0],{left:-w},500);
	    		animate(tu[1],{left:0},500);
	    		xiaobtn[1].style.background="url(img/136.png) 0 -13px";
	    		xiaobtn[0].style.background="url(img/136.png)";
	    		right.style.background="url(img/4.png) -30px 0";
	    		now=1;
	    	}
	    	left.onmouseover=function(){
	    		left.style.background="url(img/4.png) 0 -60px";
	    	} 
	    		
	    }
    }
    for(var i=0;i<5;i++){
    	lunbo($(".piccenter")[i],i);
    }
    




    /*节点轮播   结束*/



   /* 双下标轮播  开始*/
    function move(a){
	   	var now=0;
		var next=0;
		var fashionleftbottom=$(".fashionleft-bottom");
		var nodebox=$(".fashionbottombox",fashionleftbottom[a])[0];
		var fashionnode=$(".fashionbottom",nodebox);
		var leftnode=$(".fashionleft-leftbtn",fashionleftbottom[a])[0];
		var rightnode=$(".fashionleft-rightbtn",fashionleftbottom[a])[0];
		var w=getStyle(fashionnode[now],"width");
		var flag=true;
		leftnode.onclick=function(){
			if(flag){
				flag=false;
				next=now+1;
				if(next>fashionnode.length-1){
					next=0;
				}
			fashionnode[next].style.left=-w+"px";
			animate(fashionnode[now],{left:w},500,function(){
				flag=true;
			});
			animate(fashionnode[next],{left:0},500);
			now=next;	
			}
							
		}
		rightnode.onclick=function(){
			if(flag){
				flag=false;
				next=now-1;
				if(next<0){
					next=fashionnode.length-1;
				}
			fashionnode[next].style.left=w+"px";
			animate(fashionnode[now],{left:-w},500,function(){
				flag=true;
			});
			animate(fashionnode[next],{left:0},500);
			now=next;
			}
				
		}
	}
	for(var i=0;i<10;i++){
		move(i);
	}

	/* 双下标轮播  开始*/
    /*banner右边   开始*/
    var bannerleft=$(".banner-left")[0];
    var bannerul=$("ul",bannerleft);
    var bannerli=$(".bannerli",bannerleft);
    for(var i=0;i<bannerli.length;i++){
   		bannerli[i].index=i;
	   	bannerli[i].onmouseover=function(){
	   		bannerul[this.index].style.display="block";
	   	}
	   	bannerli[i].onmouseout=function(){
	   		
	   		bannerul[this.index].style.display="none";
	   	}
    }


    /*banner右边   结束*/
    /*楼层跳转  开始*/
    var floorbox=$(".floorbox")[0];
    var floorli=$("li",floorbox);
    var floorf10=$(".f10",floorbox)[0];
    var fashionboxBottom=$(".fashionbox-bottom");
    var floordiv=$("div",floorbox);
    floorf10.onclick=function(){
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		var top=obj.scrollTop;
		animate(obj,{scrollTop:0});
    }
    window.onscroll=function(){
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		var top=obj.scrollTop;
   		if(top>1200){
   			floorbox.style.display="block"
   		}else{
   			floorbox.style.display="none";
   		}
   		for(var i=0;i<floorli.length-1;i++){
			if(top>=fashionboxBottom[i].offsetTop-300){
				for(var j=0;j<floorli.length-1;j++){
					floordiv[j].style.display="none";
				}
			floordiv[i].style.display="block";
			now=i;
			}
		}
    }
    for(var i=0;i<floorli.length-1;i++){
		floorli[i].index=i;
		floorli[i].onclick=function(){
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			var top=fashionboxBottom[this.index].offsetTop-70;
			animate(obj,{scrollTop:top},500);
			now=this.index;
		}
		floorli[i].onmouseover=function(){
			floordiv[this.index].style.display="block";
		}
		floorli[i].onmouseout=function(){
			if(now==this.index){

			}else{
				floordiv[this.index].style.display="none";
			}
		}
	}
    /*楼层跳转  结束*/





})