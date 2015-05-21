var init = 0;
var count = 0;
var onSearch = 0;
var searchInput;
var lastList;


function bindClick(element, that){
	element.addEventListener("click", function(){
		if(typeof that.callback != "undefined"){
			console.log(that.callback);
			var result = new Function(that.callback)();
			if(result === false){
				return false;
			}
		}
		a4pp(that);
	});
}

var btnGoHome = document.getElementById("goHome");


btnGoHome.addEventListener('click', function(){
	init = 0;
	window.removeEventListener("popstate");
	//a4pp(app);
	window.location.href="index.html";
	return false;
});

window.addEventListener("popstate", function(){
	var lista = document.querySelectorAll(".content");
	console.log(lista);
	if(lista.length > 2){
		var remv = lista[lista.length-1];
		//remv.className = "removed";
		remv.parentNode.removeChild(remv);

		var listaLi = document.querySelectorAll("li");

		for(var i=0;i<listaLi.length;i++){
			listaLi[i].style.display = "list-item";
		}
		
	}else{
		return false;
	}
});

var searchInput = document.getElementById('searchBox');

searchInput.onkeyup = function () {
    var filter = searchInput.value.toUpperCase();
    var lis = lastList.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].innerHTML;
       //console.log(name.toUpperCase()+"!="+filter);
        if (name.toUpperCase().indexOf(filter) > -1) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}

window.app = app;

if(typeof window.localStorage['usu'] != "undefined"){
	window.app = JSON.parse(window.localStorage['usu']);
}

window.a4pp = function(data, auto){

	var thatx = this;

	var documentBody = document.getElementsByTagName("body")[0];

	var btnGoSearch = document.getElementById("goSearch");

	var search = document.getElementById("searchForm");

	var body = document.createElement("div");

	body.className = "content";

	search.style.display = "none";

	var appTitle = document.getElementById("appTitle");

	appTitle.style.display = "inline-block";

	searchInput.addEventListener("blur", function(){

		search.style.display = "none";

		appTitle.style.display = "inline-block";

	});

	var result = new Function(data.startup)();


	var iconSearch = document.getElementById("iconSearch");

	iconSearch.className = "glyphicon glyphicon-search";

	document.title=data.title;

	btnGoSearch.removeEventListener('click');

	btnGoSearch.addEventListener('click', function(){
		if(onSearch==0){ 
			//body.className = body.className + " onSearch";
			search.style.display = "inline-block";
			iconSearch.className = "glyphicon glyphicon-remove";
			searchBox.focus();
			appTitle.style.display = "none";
			onSearch = 1;
		}else{
			//body.className = body.className.replace("onSearch", "");
			search.style.display = "none";
			appTitle.style.display = "inline-block";
			iconSearch.className = "glyphicon glyphicon-search";
			onSearch = 0;
		}
		return false;
	});

	if(init == 0){

		init = 1;

		appTitle.removeEventListener("click");
		appTitle.addEventListener("click", function(){
			history.back();
		});

		var appTitleText = document.createTextNode(data.title);

		appTitle.appendChild(appTitleText);

	
	}else{

		var titlex = document.createTextNode(data.title);

		var h4 = document.createElement("h4");

		h4.appendChild(titlex);

		body.appendChild(h4);
	
	}

	if(auto!="1"){
		history.pushState(data, data.title, "#"+count);
		count = Math.random();
	}

	switch(data.model){
		case "link":
			window.open(data.details, "_system");
			return false;
		break;
		case "list":

			iconSearch.style.display = "inline-block";
			if((data.model=="list")&&(typeof data.items != "undefined")){
				var list = document.createElement("ul");
				list.className = "model-list";
				if(data.details!=""){
					var superior = document.createElement("div");
					superior.className="superior";
					superior.innerHTML = data.details;
					body.appendChild(superior);
					console.log(data.details);
				}
				if(data.items != null){
					for(var that=0;that<data.items.length;that++){
						var text;
						var item;
						var img;
						item = document.createElement("li");
						text = document.createTextNode(" "+data.items[that].title);
						item.className = "model-list-item";
						if(data.items[that].icon != null){

							console.log(data.items[that].icon);
							img = document.createElement("img");
							img.src = data.items[that].icon;
							item.appendChild(img);
						}
						if(data.items[that].glyph != "none"){

							spn = document.createElement("span");
							spn.classList.add("glyphicon");
							spn.classList.add("glyphicon-"+data.items[that].glyph);
							item.appendChild(spn);


						}
						item.appendChild(text);
						list.appendChild(item);
						console.log(that);
						bindClick(item, data.items[that]);
					}
				}
				console.log(documentBody);
				body.appendChild(list);
				lastList = list;
			}
		break;
		case "details":
			iconSearch.style.display = "none";
			if(data.model=="details"){
				body.innerHTML= data.details;
				body.classList.add("details");
			}
		break;
		case "listview":

			iconSearch.style.display = "none";
			if((data.model=="listview")&&(typeof data.items != "undefined")){
				var list = document.createElement("ul");
				list.className = "model-listview";
				for(var that=0;that<data.items.length;that++){
					var text;
					var item;
					var itemInner;
					var img;
					item = document.createElement("li");
					itemInner = document.createElement("span");
					text = document.createTextNode(data.items[that].title);
					item.className = "model-listview-item";
					itemInner.className = "model-listview-item-inner";
					if(typeof data.items[that].icon != "undefined"){
						img = document.createElement("img");
						img.src = data.items[that].icon;
						itemInner.appendChild(img);
					}
					itemInner.appendChild(text);
					item.appendChild(itemInner);
					list.appendChild(item);
					console.log(that);
					bindClick(item, data.items[that]);
				}
				console.log(documentBody);
				body.appendChild(list);
			}
		break;
	}

	documentBody.appendChild(body);

}

function addItem(data, title, type){
	var new_item = {"title":title, "model": type, "details":"http://google.com.br"};
	data.items.push(new_item);
}


var jquery = document.createElement("script");

jquery.id = "jquery";

jquery.src="js/jquery.min.js";

document.getElementsByTagName("head")[0].appendChild(jquery);

if(typeof app.runJS!="undefined"){
	eval(app.runJS);
}

/*
(function(){
	window.appRootDirName = ".myapp";
	document.addEventListener("deviceready", onDeviceReady, false);
 
	function onDeviceReady() {
		alert("device is ready");
		window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	}
	
	function fail() {
		alert("failed to get filesystem");
	}
 
	function gotFS(fileSystem) {
		console.log("filesystem got");
		fileSystem.root.getDirectory(window.appRootDirName, {
			create : true,
			exclusive : false
		}, dirReady, fail);
	}
 
	function dirReady(entry) {
		window.appRootDir = entry;
		alert(JSON.stringify(window.appRootDir));
	}
})();*/

