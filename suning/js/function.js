/*1.获取类名的兼容函数*/
function getClass(classname,father){
	father=father||document;//undefined||document//Boolean
	if(father.getElementsByClassName){
		return father.getElementsByClassName(classname);
		 
	}else{
		var all=father.getElementsByTagName("*");
		//alert(all.length)
		var newarr=[];
		for(var i=0;i<all.length;i++){
			if(checkRep(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;		
	}
}
function checkRep(str,classname){
	var arr=str.split(" ");//"one","box"==>"box"
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}


/******************************************************/


/*2.获取样式
obj:获取哪一个对象
attr：属性名*/
/*获取样式的兼容函数*/

function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);
	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);
	}
}


/*********************************************************/




/*3.获取元素
/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)匹配标签名
*/
function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/,"");
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1),father);
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return father.getElementsByTagName(selector);
		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selector)){
			selector=selector.slice(1,-1);
			return document.createElement(selector);
		}
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}




/*****************************************************************************/




/*4.获取子节点 （兼容问题）*/
function getChild(father){
	var childs=father.childNodes;
	var newarr=[];
	for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1){
			newarr.push(childs[i]);
		}
	}
	return newarr;
}





/****************************************************/




/*5.获取第一个子节点*/
function getFirst(father){
	return getChild(father)[0];
}




/****************************************************/




/*6.获取最后一个子节点*/
function getLast(father){
	return getChild(father)[getChild(father).length-1];
}




/****************************************************/




/*7.获取指定位置的子节点*/
function getNum(father,num){
	return getChild(father)[num];
}





/****************************************************/





/*8.获取下一个兄弟节点*/
function getNext(nodeobj){
	var next=nodeobj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
		return false;
		}
	}
	return next;
}





/****************************************************/





/*9.获取上一个兄弟节点*/
function getPrevious(nodeobj){
	var previous=nodeobj.previousSibling;
	if(previous==null){
		return false;
	}
	while(previous.nodeType==3||previous.nodeType==8){
		previous=previous.previousSibling;
		if(previous==null){
		return false;
		}
	}
	return previous;
}





/****************************************************/





/*10.将一个元素插·入到另一个元素之后*/
function insertAfter(newobj,nowobj){
	var next=getNext(nowobj);
	var father=nowobj.parentNode;
	if(next){
		return father.insertBefore(newobj,next);
	}else{
		return father.appendChild(newobj);
	}
}







/****************************************************/





/*11.将一个元素插·入到另一个元素之前*/
function insertbefore(newobj,nowobj){
	var father=nowobj.parentNode;
	return father.insertBefore(newobj,nowobj);
}







/****************************************************/





/*12.响应程序兼容问题*/
function addEvent(obj,event,fun){
	if(obj.addEventListener){
		return obj.addEventListener(event,fun,false);
	}else{
		return obj.attachEvent("on"+event,fun);
	}
}
/****************************************************/





/*13.删除事件兼容问题*/
function removeEvent(obj,event,fun){
	if(obj.removeEventListener){
		return obj.removeEventListener(event,fun,false);
	}else{
		return obj.detachEvent("on"+event,fun);
	}
}
/****************************************************/





/*14.滚轮事件兼容问题*/
function mousewheel(obj,upfun,downfun){
	if(obj.addEventListener){
		obj.addEventListener("mousewheel",scroll,false);
		obj.addEventListener("DOMMouseScroll",scroll,false);
	}else{
		obj.attachEvent("onmousewheel",scroll);
	}
	function scroll(e){
		var ev=e||window.event;
		if(ev.preventDefault){
			ev.preventDefault();
		}else{
			ev.returnValue=false;
		}
		var direction=ev.detail||ev.wheelDelta;
		if(direction==120||direction==-3){
			upfun.call(obj);
		}else if(direction==-120||direction==3){
			downfun.call(obj);
		}
	}
}
//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover(obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
