/**
 * 通用JS库
 * @author yangying
 * @date 2017年12月08日
 * @Description 键值是通过测试几大盒子厂商获取的遥控器按键获取
 * 版权所有，使用时还请著名出处。如果使用期间出现任何问题，欢迎致电作者： 杨英
 * phone ： 13590487847
 * qq	 :	2388700465 
 * 此版本的内容为beta版本。vesion 1.0 beta。
 * 如果碰到其他疑惑欢迎加入qq群
 */
var KEY_BACK         = 1280;    // 返回/删除
var KEY_BACK2        = 8;     // 返回2
var KEY_ENTER        = 13;    // 确定
var KEY_PAGE_UP      = 33;    // 上页
var KEY_PAGE_DOWN    = 34;    // 下页
var KEY_LEFT         = 37;    // 左
var KEY_UP           = 38;    // 上
var KEY_RIGHT        = 39;    // 右
var KEY_DOWN         = 40;    // 下
var KEY_0            = 48;    // 0       
var KEY_1            = 0x0031;    // 1
var KEY_2            = 0x0032;    // 2
var KEY_3            = 0x0033;    // 3
var KEY_4            = 0x0034;    // 4
var KEY_5            = 0x0035;    // 5
var KEY_6            = 0x0036;    // 6 
var KEY_7            = 0x0037;    // 7
var KEY_8            = 0x0038;    // 8
var KEY_9            = 0x0039;    // 9
var KEY_VOL_UP       = 259;       // Vol+，音量加
var KEY_VOL_DOWN     = 260;       // Vol-，音量减
var KEY_MUTE         = 261;       // Mute，静音
var KEY_TRACK        = 1060;      // Audio Track，切换音轨
var KEY_PLAY_PAUSE   = 263;       // >||，播放，暂停
var KEY_FAST_FORWARD = 0x0108;    // >> ，快进
var KEY_FAST_REWIND  = 0x0109;    // << ，快退
var KEY_RED          = 0x0113;    // 红色键
var KEY_GREEN        = 0x0114;    // 绿色键
var KEY_YELLOW       = 0x0115;    // 黄色键
var KEY_BLUE         = 0x0116;    // 蓝色键
//视频属性
var EVENT_MEDIA_END  = 18;   		// 视频播放结束 只做一件事情:循环播放视频  
var EVENT_MEDIA_ERROR= 116			// 视频播放错误
var start_time = new Date();	
var onkeydownShow = true;
var onkeypressShow = true;
//返回 Epg Home页
function goEPGDomain(){
//此方法机顶盒系统提供
  top.location.href=Authentication.CTCGetConfig('EPGDomain');
}
/** 按键处理 */
document.onkeypress = function (e){
	onkeydownShow = false;
	if(onkeypressShow){
		e = e || window.event;
		var keyCode = e.which || e.keyCode;
		// 视频循环播放
	    if (keyCode == 0x0300) { 
	        keyCode =  eval("oEvent = " + Utility.getEvent()).type;
	        if (keyCode == "EVENT_MEDIA_END"){
	        	key_event_media_end();
	        }else if(keyCode=='EVENT_MEDIA_ERROR'){
	        	key_event_media_error();
	        }
	 	}
		keyEventHandler(keyCode);
	}else{
		onkeydownShow = true;
	}
	return false;
};
document.onkeydown = function(e) {
	onkeypressShow = false;
	if(onkeydownShow){
		e = e || window.event;
		var keyCode = e.which || e.keyCode;
		// 视频循环播放
	    if (keyCode == 0x0300) { 
	        keyCode =  eval("oEvent = " + Utility.getEvent()).type;
	        if (keyCode == "EVENT_MEDIA_END"){
	        	key_event_media_end();
	        }else if(keyCode=='EVENT_MEDIA_ERROR'){
	        	key_event_media_error();
	        }
	 	}
		keyEventHandler(keyCode);
	}else{
		onkeypressShow = true;
	}
};
/**
 * 按键事件
 * @param keyCode
 * @returns
 */
function keyEventHandler(keyCode) {
	switch(keyCode) {
		case KEY_BACK:
			key_back_event();
			break;
		case KEY_BACK2:
			key_back_event();
			break;
		case KEY_ENTER:
			key_enter_event();
			break;
		case KEY_LEFT:
			key_left_event();
			break;
		case KEY_UP:
			key_up_event();
			break;
		case KEY_RIGHT:
			key_right_event();
			break;
		case KEY_DOWN:
			key_down_event();
			break;
		case KEY_0:
			key_numer0_event();
			break;
		case KEY_1:
			key_numer1_event();
			break;
		case KEY_2:
			key_numer2_event();
			break;
		case KEY_3:
			key_numer3_event();
			break;
		case KEY_4:
			key_numer4_event();
			break;
		case KEY_5:
			key_numer5_event();
			break;
		case KEY_6:
			key_numer6_event();
			break;
		case KEY_7:
			key_numer7_event();
			break;
		case KEY_8:
			key_numer8_event();
			break;
		case KEY_9:
			key_numer9_event();
			break;
		case KEY_VOL_UP:// 调大声音
			key_volup_event();
			break;
		case KEY_VOL_DOWN: // 调小声音
			key_voldown_event();
			break;
		case KEY_MUTE:	// Mute，静音
			key_mute_event();
			break;
		case KEY_TRACK:		//切换左声道右声道.
			key_track_event();
			break;
		case KEY_PLAY_PAUSE://暂停/播放
			key_playorpurse_event();
			break;
		case EVENT_MEDIA_END: // 循环播放
			key_event_media_end();
			break;
		case EVENT_MEDIA_ERROR://播放错误
			key_event_media_error();
			break;
		default:
			break;
	}
}
function key_back_event(){}
function key_numer0_event(){}
function key_numer1_event(){}
function key_numer2_event(){}
function key_numer3_event(){}
function key_numer4_event(){}
function key_numer5_event(){}
function key_numer6_event(){}
function key_numer7_event(){}
function key_numer8_event(){}
function key_numer9_event(){}
function key_mute_event(){}
function key_track_event(){}
function key_playorpurse_event(){}
function key_event_media_end(){}
function key_event_media_error(){}
// 调大声音
function key_volup_event(){
	mediaPlayer.volUp();
}
// 调小声音
function key_voldown_event(){
	mediaPlayer.volDown();
}

/**
 * 上面是键值封装的内容。如果需要用到对应的方法，直接重写方法就可以了。
 * 下面就是封装的代码。以上的内容是个大机顶盒厂商，以及基本的机顶盒操作方法
 * */

//遥控器光标位置
var focus = {"x" : 0,"y" :0};
var rowList = new Array();
var butArray = new Array();
//简化文本对象
function $(id){return document.getElementById(id);}
//图片的集合
function addButData(but){
	butArray.push(new _Object(but));
}
//初始化图片对象
function but(_data){
	var butobj = {
			data:_data,
			data :{
			"id" : _data.id,
			"divId":_data.divId,
			"imgdefaultsrc":_data.imgdefaultsrc,
			"imgshowsrc":_data.imgshowsrc,
			"imghidesrc":_data.imghidesrc,
			"enterUrl":_data.enterUrl,
			"gameId":_data.gameId,
			"title":_data.title,
			"index":_data.index,
			"historysrc":_data.historysrc
			},
			"execEvent":function(type){
				if(typeof(type) == "string"){
					if(type != ""){
						try{
							window[type](this);
						}catch (e) {
							try{
								eval(type+"("+this+")");
							}catch (e) {
								var temp = eval(type);
								new temp(this);
							}
						}
					}
				}else if(typeof(type) == "function"){
					
					type(this);
				}
			},
			"eventClick":function(){
				this.execEvent(this.data.eventClick);
			},
			"topClick":function (){
				this.execEvent(this.data.topClick);
			},
			"bottomClick":function(){
				this.execEvent(this.data.bottomClick);
			},
			"leftClick":function(){
				this.execEvent(this.data.leftClick);
			},
			"rigthClick":function(){
				this.execEvent(this.data.rigthClick);
			},
			"focusEvent":function(){
				this.execEvent(this.data.focusEvent);
			},
			"leaveEvent":function(){
				this.execEvent(this.data.leaveEvent);
			},
			"showDiv":function (){
				$(this.data.divId).style.display = "block";
			},
			"hideDiv":function (){
				$(this.data.divId).style.display = "none";
			},
			"show":function (){
				this.focusEvent();
				$(this.data.id).src = this.data.imgshowsrc;
				this.showDiv();
			},
			"hide":function (){
				this.leaveEvent();
				if(this.data.imghidesrc == ""){
					this.hideDiv();
				}else{
					$(this.id).src = this.data.imghidesrc;
				}
			}
	}
	//初始化图片内容
	$(butobj.data.id).src = butobj.data.imgdefaultsrc;
	return butobj;
}

//初始化对象
function _Object(_objectData){
	var butobj = {
			"data":_objectData,
			"execEvent":function(type){
				if(typeof(type) == "string"){
					if(type != ""){
						try{
							window[type](this);
						}catch (e) {
							try{
								eval(type+"("+this+")");
							}catch (e) {
								var temp = eval(type);
								new temp(this);
							}
						}
					}
				}else if(typeof(type) == "function"){
					
					try{
						type(this);
					}catch (e) {
							
					}
				}
			},
			"eventClick":function(){
				console.log(this.data.event);
				this.execEvent(this.data.event);
			},
			"topClick":function (){
				this.execEvent(this.data.top);
			},
			"bottomClick":function(){
				this.execEvent(this.data.bottom);
			},
			"leftClick":function(){
				this.execEvent(this.data.left);
			},
			"rigthClick":function(){
				this.execEvent(this.data.rigth);
			},
			"focus":function(){
				this.execEvent(this.data.focus);
			},
			"leave":function(){
				this.execEvent(this.data.leave);
			},
			"show":function (){
				this.focus();
			},
			"hide":function (){
				this.leave();
				reset();
			}
	}
	return butobj;
}

//
//获取当前对象rowList 行。
function init(){
			var rowClass =document.getElementsByClassName('rowList');
			for(var i = 0 ; i <rowClass.length; i++ ){
				butArray = [];
				var ButData = rowClass[i].getElementsByClassName("addButData");
				for(var t= 0; t<ButData.length ; t++ ){
					addButData(ButData[t]);
				}
				rowList.push(butArray); 
			}
}
//上
function key_up_event() {
	rowList[focus.x][focus.y].hide();
	var historyfocus = {"x":focus.x,"y":focus.y}
	focus.x <= 0 ? focus.x = 0 : focus.x --;
	focus.y >= rowList[focus.x].length -1 ? focus.y = rowList[focus.x].length -1 : focus.y;
	rowList[historyfocus.x][historyfocus.y].topClick();
	rowList[focus.x][focus.y].show();
	count  = 1;
	cursor_top_Timeout();
}

//下
function key_down_event() {
	
	rowList[focus.x][focus.y].hide();
	var historyfocus = {"x":focus.x,"y":focus.y}
	//console.log("focus.x :" + focus.x + "focus.y"+ focus.y);
	focus.x >= rowList.length -1 ?  focus.x = rowList.length - 1 : focus.x ++;
	focus.y >= rowList[focus.x].length -1 ? focus.y = rowList[focus.x].length -1 : focus.y;
	rowList[historyfocus.x][historyfocus.y].bottomClick();
	rowList[focus.x][focus.y].show();
	count  = 1;
	cursor_down_Timeout();
	//console.log("focus.x :" + focus.x + "focus.y"+ focus.y);
}

//确定
function key_enter_event() {
	if(rowList[focus.x][focus.y].data.title != "" && rowList[focus.x][focus.y].data.title != undefined){
		window.location.href = rowList[focus.x][focus.y].data.title;
	}else{
		rowList[focus.x][focus.y].eventClick(); 
	}
} 

//左
function key_left_event() {
	rowList[focus.x][focus.y].hide();
	var historyfocus = {"x":focus.x,"y":focus.y}
	focus.y <= 0 ? focus.y = 0 : focus.y -- ;
	rowList[historyfocus.x][historyfocus.y].leftClick();
	rowList[focus.x][focus.y].show();
	count  = 1;
	cursor_left_Timeout();
}

//右
function key_right_event() {
	rowList[focus.x][focus.y].hide();
	
	var historyfocus = {"x":focus.x,"y":focus.y}
	focus.y >= rowList[focus.x].length -1 ? focus.y = rowList[focus.x].length -1 : focus.y ++ ;
	
	rowList[historyfocus.x][historyfocus.y].rigthClick();
	rowList[focus.x][focus.y].show();
	count  = 1;
	cursor_right_Timeout(); 
}

var count  = 1;
function cursor_right_Timeout(){
		if(parseInt($("cursor").style.left) < reusltLeft() ){
			count ++;
			$("cursor").style.left = parseInt(resultCursorLeft()+1*count) +"px" ;
			setTimeout(function () { cursor_right_Timeout();},10);
		}else{
			reset();
		}
}

function cursor_left_Timeout(){
		if(parseInt($("cursor").style.left) >  reusltLeft() ){
			count ++;
			$("cursor").style.left = parseInt(resultCursorLeft()-1*count) +"px" ;
			setTimeout(function () { cursor_left_Timeout();},10);
		}else{
			reset();
		}
}

function cursor_top_Timeout(){
		if(parseInt($("cursor").style.top) > reusltTop() ){
			count ++;
			$("cursor").style.top = parseInt(resultCursorTop()-1*count) +"px" ;
			setTimeout(function () { cursor_top_Timeout();},10);
		}else{
			reset();
		}
}

function cursor_down_Timeout(){
		//console.log(reusltTop());
		if(parseInt($("cursor").style.top) <reusltTop() ){
			count ++;
			$("cursor").style.top = parseInt(resultCursorTop()+1*count) +"px" ;
			setTimeout(function () { cursor_down_Timeout();},10);
		}else{
			reset();
		}
}

function reset(){
	$("cursor").style.left = reusltLeft() +"px" ;
	$("cursor").style.top = reusltTop() +"px" ;
	$("cursor").style.height = reuslthHeight() +"px" ;
	$("cursor").style.width = reusltWidth() +"px" ;
	//console.log(""+reusltLeft()+":"+reusltTop()+":"+reuslthHeight()+":"+reusltWidth());
}
function reusltTop(){
	return parseInt(rowList[focus.x][focus.y].data.style.top);
}
function reusltLeft(){
	return parseInt(rowList[focus.x][focus.y].data.style.left);
}
function reuslthHeight(){
	return parseInt(getStyle(rowList[focus.x][focus.y].data,"height"));
}
function reusltWidth(){
	return parseInt(getStyle(rowList[focus.x][focus.y].data,"width"));
}
function resultCursorTop(){
	return parseInt(new String($("cursor").style.top));
}
function resultCursorLeft(){
	return parseInt(new String($("cursor").style.left));
}
function getStyle(obj,attr) {
	return typeof getComputedStyle ? getComputedStyle(obj,null)[attr] : obj.currentStyle[attr] ;
}
