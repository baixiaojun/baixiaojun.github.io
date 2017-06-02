/*获取类名*/
/*
classname:类名
father:对象
farher:范围
*/
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
/***************************************************/
/*获取样式的兼容函数
obj:获取哪一个对象
attr:属性
*/
function getStyle(obj,attr){
   if(obj.currentStyle){
       return parseInt(obj.currentStyle[attr])
   }else{
      return parseInt(getComputedStyle(obj,null)[attr])
   }
}
/************************************************/
/*2016.10.24
3.获取元素
selector：选择器
*/
function $(selector,father){
     father=father||document;
     if(typeof selector=="string"){
     	selector=selector.replace(/^\s*|\s*$/,"")
     	if(selector.charAt(0)=="."){
     		return getClass(selector.substring(1),father)
     	}else if(selector.charAt(0)=="#"){
            return document.getElementById(selector.slice(1))
     	}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
     		return father.getElementsByTagName(selector)
     	}
        }else if(typeof selector=="function"){
    	window.onload=function(){
    		selector()
    	}
    }
}

/*************************************************************/
/*
4、获取字节点个数
*/
function getChilds(father){
      var childs=father.childNodes
      var newarr=[]
      for (var i = 0; i < childs.length; i++) {
      	if(childs[i].nodeType==1){
      		newarr.push(childs[i])
      	}
      }
      return newarr
}


/******************************************/
// 获取第一个子节点
function getFirst(father){
      return getChilds(father)[0]
}
// 获取最后一个子节点
function getLast(father){
      return getChilds(father)[getChilds(father).length-1]
}
// 获取指定节点 Appoint:指定
function getAppoint(father,sum){
      return getChilds(father)[sum]
}
// 获取下一个兄弟节点
function getNext(nodeobj){
      var next=nodeobj.nextSibling
      if(next==null){
         return false
      }
      while(next.nodeType==3||next.nodeType==8){
      	next=next.nextSibling
      	if(next==null){
         return false
      }
      }
      return next
}
// 获取上一个兄弟节点 getPrevious:上一个
 function getPrevious(nodeobj){
  var pre=nodeobj.previousSibling
      if(pre==null){
         return false
      }
      while(pre.nodeType==3||pre.nodeType==8){
      	pre=pre.previousSibling
      	if(pre==null){
         return false
      }
      }
      return pre
 }
//将一个元素查到另一个元素之后
function insertAfter(father,newobj,nowobj){
	    var next=getNext(nowobj)
         if(next){
       return father.insertBefore(newobj,next)
         }else{
         return father.appendChild(newobj)
         }
}