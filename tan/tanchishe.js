$(function(){
	var box=$(".box")[0]
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var div=$("<div>")
			div.id=j+"-"+i
			box.appendChild(div)
		};
	};
	var she=[{x:0,y:0},{x:1,y:0},{x:2,y:0}]
	for (var i = 0; i < she.length; i++) {
		id=she[i].x+ "-" +she[i].y
		var obj=$("#"+id)
		obj.className="snake"
	};
	var food=getfood()
	function getfood(){
		do{
         var x=Math.floor(Math.random()*20)
         var y=Math.floor(Math.random()*20)
		}while(check(x,y))

		var food=$("#"+ x +"-" + y)
		food.className="food"	
		return {x:x,y:y}
	}
	function check(a,b){
        for (var i = 0; i < she.length; i++) {
        	if(a==she[i].x &&b==she[i].y){
        		return true
        	}
             
        };
         return false
       
	}
	var t=setInterval(move,100)
	var direction="r"
    function move(){
    	if(direction=="r"){

    	var oldHead=she[she.length-1]
    	var newHeadId=oldHead.x+1+"-"+oldHead.y
    	var newHeadobj=$("#"+newHeadId)
    	if(newHeadobj==null|| check(oldHead.x+1,oldHead.y)){
    		alert("游戏结束")
    		clearInterval(t)
    		return
    	}
    	newHeadobj.className="snake"
    	she.push({x:oldHead.x+1,y:oldHead.y})
    	if(food.x==oldHead.x+1&&food.y==oldHead.y){
         food=getfood()
         return
    	}
    	var sheEnd=$("#"+she[0].x+"-"+she[0].y)
    	sheEnd.className=""
    	she.shift()
    }else if(direction=="l"){
         var oldHead=she[she.length-1]
    	var newHeadId=oldHead.x-1+"-"+oldHead.y
    	var newHeadobj=$("#"+newHeadId)
    	if(newHeadobj==null || check(oldHead.x-1,oldHead.y)){
    		alert("游戏结束")
    		clearInterval(t)
    		return
    	}
    	newHeadobj.className="snake"
    	she.push({x:oldHead.x-1,y:oldHead.y})
    	if(food.x==oldHead.x-1&&food.y==oldHead.y){
         food=getfood()
         return
    	}
    	var sheEnd=$("#"+she[0].x+"-"+she[0].y)
    	sheEnd.className=""
    	she.shift()
    }else if(direction=="d"){
        var oldHead=she[she.length-1]
    	var newHeadId=oldHead.x+"-"+(oldHead.y+1)
    	var newHeadobj=$("#"+newHeadId)
    	if(newHeadobj==null || check(oldHead.x,oldHead.y+1)){
    		alert("游戏结束")
    		clearInterval(t)
    		return
    	}
    	newHeadobj.className="snake"
    	she.push({x:oldHead.x,y:oldHead.y+1})
    	if(food.x==oldHead.x&&food.y==oldHead.y+1){
         food=getfood()
         return
    	}
    	var sheEnd=$("#"+she[0].x+"-"+she[0].y)
    	sheEnd.className=""
    	she.shift()
    }else if(direction=="t"){
    	 var oldHead=she[she.length-1]
    	var newHeadId=oldHead.x+"-"+(oldHead.y-1)
    	var newHeadobj=$("#"+newHeadId)
    	if(newHeadobj==null || check(oldHead.x,oldHead.y-1)){
    		alert("游戏结束")
    		clearInterval(t)
    		return
    	}
    	newHeadobj.className="snake"
    	she.push({x:oldHead.x,y:oldHead.y-1})
    	if(food.x==oldHead.x&&food.y==oldHead.y-1){
         food=getfood()
         return
    	}
    	var sheEnd=$("#"+she[0].x+"-"+she[0].y)
    	sheEnd.className=""
    	she.shift()
    }

    	
    }
     document.onkeydown=function(e){
     var ev=e||window.event
     if(ev.keyCode==37){
        if(direction=="r"){
                return;
            }
       direction="l"
     }
       else if(ev.keyCode==38){
        if(direction=="d"){
                return;
            }
       direction="t"
     }
       else if(ev.keyCode==39){
        if(direction=="l"){
                return;
            }
       direction="r"
     }
       else if(ev.keyCode==40){
        if(direction=="t"){
                return;
            }
       direction="d"
     }
   }
})