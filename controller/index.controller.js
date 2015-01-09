var apiUrl="http://kaola.tieson.cn/NativeApi/";
var xhr=null;

function loadSeckillProduct() {
	if ( xhr ) {
		outLine( "xhr请求已创建" );
		return;
	}
	outSet( "创建请求：" );
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function () {
        switch ( xhr.readyState ) {
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
            case 4:
                outLine( "xhr请求已完成");
                if ( xhr.status == 200 ) {
                		var ResponsdObj = JSON.parse(xhr.responseText);
                		 	outLine( "API主机："+apiUrl);
                		 	outLine( "API接口：Index/loadSecKillList")
                		 	outLine( "请求方式："+"GET");
                		 	
                		for (i=0;i<ResponsdObj.length; i++) {
                			outLine( "xhr请求成功：id="+ResponsdObj[i].id+" name="+ResponsdObj[i].name+" price="+ResponsdObj[i].price);        
                		}
               
                } else {
                	outLine( "xhr请求失败："+xhr.status );
                }
                break;
            default :
                break;
        }
	}
	xhr.open( "GET", apiUrl+"Index/loadSecKillList" );
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
