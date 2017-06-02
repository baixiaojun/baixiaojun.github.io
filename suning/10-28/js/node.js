$(function(){
	var now=0
	var next=0
	var box=$(".box")[0]
    var imgs=$(".img-li")
    var btns=$(".btn-li")
    var left=$(".left")[0]
    var width=imgs[0].offsetWidth
    var right=$(".right")[0]
    var t=setInterval(move,1500)
    function move(){
         next=now+1
         if(next>=imgs.length){
         next=0
         }
         imgs[next].style.left=width+"px"
         animate(imgs[now],{left:-width},500)
         animate(imgs[next],{left:0},500)
         btns[now].style.background="#000"
         btns[next].style.background="red"
         now=next
    }
    box.onmouseover=function(){
        clearInterval(t)
        left.style.display="block"
        right.style.display="block"
    }
    box.onmouseout=function(){
        t=setInterval(move,1500)
        left.style.display="none"
        right.style.display="none"
    }
    right.onclick=function(){
        move()
    }
    left.onclick=function(){
        next=now-1
         if(next<0){
         next=imgs.length-1
         }
         imgs[next].style.left=-width+"px"
         animate(imgs[now],{left:width},500)
         animate(imgs[next],{left:0},500)
         btns[now].style.background="#000"
         btns[next].style.background="red"
         now=next
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].index=i
        btns[i].onclick=function(){
            if(this.index>now){
                imgs[this.index].style.left=width+"px"
                animate(imgs[now],{left:-width},500)
                animate(imgs[this.index],{left:0},500)
                btns[this.index].style.background="red"
            }else if(this.index<now){
                imgs[this.index].style.left=-width+"px"
                animate(imgs[now],{left:width},500)
                animate(imgs[this.index],{left:0},500)
                btns[this.index].style.background="red"
            }
            btns[now].style.background="black"
            now=this.index
        }
    };
    
    
})