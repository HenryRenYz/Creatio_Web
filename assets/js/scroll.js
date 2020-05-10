//var div = document.getElementById('style-1');
  //div.scrollTop = div.scrollHeight + 5
  //window.scrollTo(0,5)
function ScrollHolder()
{
	//add event to window
	this.addWindowListener = function(sEventType, fnHandler) {
	    if (window.addEventListener) {
	        window.addEventListener(sEventType, fnHandler, false);
	    } else if (window.attachEvent) {
	        window.attachEvent("on" + sEventType, fnHandler);
	    } else {
	        window["on" + sEventType] = fnHandler;
	    }
	}

	//remember scrolling information when window is unloading
	this.whenUnload = function()
	{
		var scrollTop = document.getElementById('style-1').scrollTop;
		document.cookie = "scrollTop="+scrollTop;
	}

	//set current scroll bar the last page scroll bar position
	this.whenLoad = function()
	{
		var scrollTop = document.cookie.match(new RegExp("(^| )scrollTop=([^;]*)(;|$)"));
		if(scrollTop==null)
			scrollTop = 0;
		document.getElementById('style-1').scrollTo(0,scrollTop[2]);
	}

	//run this script
	this.run = function()
	{
		this.addWindowListener("unload", this.whenUnload);
		this.addWindowListener("load", this.whenLoad);
	}
}

var scrollHolder = new ScrollHolder();
scrollHolder.run();