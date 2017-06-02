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
		}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
			return father.getElementsByTagName(selector);
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





/*10.将一个元素插入到另一个元素之后*/
function insertAfter(father,newobj,nowobj){
	var next=getNext(nowobj);
	if(next){
		return father.insertBefore(newobj,next);
	}else{
		return father.appendChild(newobj);
	}
}