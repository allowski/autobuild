function inCollection(obj, list) {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x] === obj) {
            return true;
        }
    }

    return false;
}

var remember = {
	'collections' : {},
	'debug'	: true,
	'load' 	: function(){
		try{
			this.collections = JSON.parse(window.localStorage['rememberData']);
		}catch(e){
			this.firstRun();
		}
		watch(this, "collections", function(r, m){
			remember.log('watch:' + m);
			remember.save();
		});
	},
	'save'	: function(){
		window.localStorage['rememberData'] = JSON.stringify(this.collections);
	},
	'init'	: function(){
		
		if(!window.localStorage.hasOwnProperty("rememberData")){
			this.log("Localstorage is empty");
			this.firstRun();
		}else{
			this.log("Localstorage is ok");
		}
		
		this.load();
	}, 
	'log' 	: function(m){
		console.log(m);
	},
	'firstRun': function(){
		window.localStorage['rememberData'] = "{\"collections\":[]}";
		this.collections = JSON.parse(window.localStorage['rememberData']);
	},
	'create'	: function(name){
		if(name in this.collections){
			this.log("Collection '"+name+"' already exists");
		}else{
			this.log("Creating collection '"+name+"'");
			this.collections[name] = new Array();
			this.save();
		}
	},
	'ls': function(){
		console.log(this.collections);
	},
	'summary': function(collection){
		if(collection in this.collections){
			console.log("Collection: "+collection+" found");
			console.log("Collection length: "+ this.collections[collection].length +" items");
			for(item in this.collections[collection]){
				console.log(item+") "+this.collections[collection][item]);
			}
		}else{
			this.log("Collection '"+collection+"' not found");
		}
	},
	'push': function(collection, value){
		
		if(collection in this.collections){
			
			if(!inCollection(value, this.collections[collection])){
				
				this.collections[collection].push(value);
				
			}else{
				
				this.log("Repeated");
				
			}
			
		}else{
			
			this.log("Collection '"+collection+"' not found");
			
		}
		
	},
	'isCollection': function(collection){
		if(collection in this.collections){
			this.log("Collection '"+collection+"' found");
			return true;
		}
		this.log("Collection '"+collection+"' not found");
		return false;
	},
	'each': function(collection, callback){
		
		if(this.isCollection(collection)===true){
			
			if(typeof callback === 'function'){
				
				this.log("Callback ok");
				
				for(item in this.collections[collection]){
					
					callback(item, this.collections[collection][item]);
					
				}
				
			}
			
		}
		
	},
	'getItem': function(collection, indexOf){
		
		return this.collections[collection][indexOf];
		
	},
	'bind': function(formId, collection, indexOf){
		
		indexOf = indexOf || 0;
		
		if(this.isCollection(collection)===true){
			
			var frm = document.getElementById(formId);
			
			frm["collection"] = collection;
			
			frm["indexOf"] = indexOf;
			
			if(indexOf in this.collections[collection]){
				
				for(k in this.collections[collection][indexOf]){
					
					this.log("K: "+k+", V"+this.collections[collection][indexOf][k]);
					
					var ele = document.querySelector("#"+formId+" [name="+k+"]");
					
					ele.value = this.collections[collection][indexOf][k];	
					
					ele.onchange = function(){
						
						remember.collections[collection][indexOf][k] = this.value;
						
					}
					
				}
				
			}
			
		}
		
	},
	'next': function(formId, collection){
		
		var frm = document.getElementById(formId);
			
		var collection = frm["collection"];
		
		var indexOf = frm["indexOf"]+1;
		
		if(indexOf in this.collections[collection]){
			
			this.bind(formId, collection, indexOf);
			
		}else{
			
			indexOf = 0;
			
			this.bind(formId, collection, indexOf);
			
		}
		
	},
	'prev': function(formId, collection){
		
		var frm = document.getElementById(formId);
			
		var collection = frm["collection"];
		
		var indexOf = frm["indexOf"]-1;
		
		if(indexOf in this.collections[collection]){
			
			this.bind(formId, collection, indexOf);
			
		}else{
			
			indexOf = this.collections[collection].length-1;
			
			this.bind(formId, collection, indexOf);
			
		}
		
	},
	'clean': function(collection){
		
		if(this.isCollection(collection)===true){
			
			this.collections[collection] = [];
			
		}
		
	}
	
	
};

