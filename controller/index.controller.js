//var apiUrl="http://kaola.tieson.cn/NativeApi/";
var apiUrl="http://172.16.1.241:8888/koalamall_3.2/NativeApi/"
var xhr=null;
/*
function loadIndexBillboard(){
	if(xhr){
		return;
	}
	outSet( "创建请求：" );
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function(){
		switch (xhr.readyState){
			 case 0:
            	outLine( "xhr请求已初始化" );
            break;
            case 1:
            	outLine( "xhr请求已打开" );
            break;
            case 2:
            	outLine( "xhr请求已发送" );
            break;
            case 3:
                outLine( "xhr请求已响应");
                break;
			case 4:{
				 if ( xhr.status == 200 ) {
				 		outLine( "API主机："+apiUrl);
                		 	outLine( "API接口：Index/loadSecKillList")
                		 	outLine( "请求方式："+"GET");
                		var ResponsdObj = JSON.parse(xhr.responseText);
                		var sliderOne = "";
                		var sliderTwo = "";
                		var sliderBody = "";
                		var sliderRight = "<div class=\"mui-slider-indicator mui-text-right\">";
                		for (i=0;i<ResponsdObj.length; i++) {
                			if(0==i){
                				sliderOne += "<div class=\"mui-slider-item mui-slider-item-duplicate\">"
										    	"<a href=\""+ResponsdObj[i].billboard_link+"\">""
										    		"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
										    		"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>";
										    	"</a>"
										  "</div>";
							sliderRight += "<div class=\"mui-indicator mui-active\"></div>";
							continue;
                			}
                			sliderRight += "<div class=\"mui-indicator\"></div>";
                			if(1==i){
                				sliderTwo += "<div class=\"mui-slider-item\">"
										    	"<a href=\""+ResponsdObj[i].billboard_link+"\">""
										    		"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
										    		"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>";
										    	"</a>"
										  "</div>";
							continue;
                			}
                			sliderBody += "<div class=\"mui-slider-item\">"
									    	"<a href=\""+ResponsdObj[i].billboard_link+"\">""
									    		"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
									    		"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>";
									    	"</a>"
									  "</div>";
                		}
                		sliderRight += "</div>";
                		document.getElementById("slider").innerHTML(" <div class=\"mui-slider-group mui-slider-loop\" >"+sliderOne+sliderTwo+sliderBody+sliderTwo+sliderOne+"</div>"+sliderRight);
//              		var gallery = mui(".mui-slider");
//			  		gallery.slider({
//			  			interval:10000
//			  		});
                } else {
                }
                break;
            default :
                break;
			}
		}
	}
	outLine(apiUrl+"Index/loadIndexBillboard");
	xhr.open( "POST", apiUrl+"Index/loadIndexBillboard" );
	xhr.send();
}
*/
function loadIndexBillboard() {
	
	if ( xhr ) {
		return;
	}
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function () {
        switch ( xhr.readyState ) {
            case 0:
            break;
            case 1:
            break;
            case 2:
            break;
            case 3:
                break;
            case 4:
                if ( xhr.status == 200 ) {
                		var ResponsdObj = JSON.parse(xhr.responseText);
                		var sliderOne = "";
                		var sliderTwo = "";
                		var sliderBody = "";
                		var sliderRight = "<div class=\"mui-slider-indicator mui-text-right\">";
                		for (i=0;i<ResponsdObj.length; i++) {
                			if(0==i){
                				sliderOne += "<div class=\"mui-slider-item mui-slider-item-duplicate\">"
										  +"<a href=\""+ResponsdObj[i].billboard_link+"\">"
										  +	"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
										  +	"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>"
										  +"</a>"
										  +"</div>";
							sliderRight += "<div class=\"mui-indicator mui-active\"></div>";
							continue;
                			}
                			sliderRight += "<div class=\"mui-indicator\"></div>";
                			if(1==i){
                				sliderTwo += "<div class=\"mui-slider-item\">"
										    	+"<a href=\""+ResponsdObj[i].billboard_link+"\">"
										    	+"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
										    	+"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>"
										    	+"</a>"
										  +"</div>";
							continue;
                			}
                			sliderBody += "<div class=\"mui-slider-item\">"
									    	+"<a href=\""+ResponsdObj[i].billboard_link+"\">"
									    +"<img src=\""+ResponsdObj[i].image_src+"\" height=\"200px;\" />"
									    	+"<p class=\"mui-slider-title\">"+ResponsdObj[i].billboard_title+"</p>"
									    +"</a>"
									  +"</div>";
                		}
                		sliderRight += "</div>";
					var silderDiv = "<div class=\"mui-slider-group mui-slider-loop\" >"
									+sliderOne
									+sliderTwo
									+sliderBody
									+sliderOne
									+sliderTwo
									+"</div>"
									+sliderRight;
					$("#slider").html(silderDiv);
					
					var gallery = mui(".mui-slider");
			  		gallery.slider({
			  			interval:10000
			  		});
									
//					document.getElementById("slider").innerHTML(silderDiv);
//					var mui(".mui-slider").slider({interval:10000});
//					outLine('123');
                } else {
                	 outLine('加载出错');
                }
                break;
            default :
                break;
        }
	}
	xhr.open( "GET", apiUrl+"Index/loadIndexBillboard" );
	xhr.send();
}

function xhrResponseHeader() {
	if ( xhr ) {
		if ( xhr.readyState != 4 ) {
			outLine( "xhr请求未完成" );
		} else if ( xhr.status != 200 ) {
			outSet( "xhr请求失败："+xhr.readyState );
		} else {
			outSet( "xhr请求响应头数据：" );
			outLine( xhr.getAllResponseHeaders() );
		}
	} else {
		outSet( "未发送请求" );
	}
}
function xhrAbort() {
	if ( xhr ) {
		outSet( "取消请求" );
		if ( xhr.readyState != 4 ) {
			xhr.abort();
		}
		xhr = null;
	} else {
		outSet( "未发送请求" );
	}
}

var _dout_=null
_dout_=document.getElementById("output");
// 输出内容
function outSet(s){
	_dout_.innerHTML=s+"<br/>";
	_dout_.scrollTop=0;
};
// 输出行内容
function outLine(s){
	_dout_.innerHTML+=s+"<br/>";
};
function outClean(){
	_dout_.innerHTML="";
};
