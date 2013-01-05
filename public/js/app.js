"use strict"

// this is the main app script

var app = {}

app.menu = function(){
	$('#linkChat').click(
		function(){
			app.chat.run()
		})
	
}



app.generic = function(appName){
	var hasBeenCreated = false
	var my = {}
	var jModule
	my.status
	
	my.run = function(){
		my.create()
		$('.module').filter(jModule).hide()
		if(jModule) jModule.show()
		my.status.text(appName + ' is running')
	}
	my.stop = function(){
		my.create()
		jModule.hide()
	}
	my.create = function(){
		if(hasBeenCreated) return
		hasBeenCreated = true
		jModule = $('<div class="module" id="'+appName+'Module">').appendTo('#modules')
		my.status = $('<div>').appendTo(jModule)
		// init socket io
		return jModule
	}
	
	return my
}

app.chat = (function(){
	var my = app.generic('chat')
	var jM
	var _create = my.create
	
	my.create = function(){
		jM = _create()
		jM.append('<div class="chatRoom dbgBorder">')
		return true
	}
	return my
})();

$(app.menu)