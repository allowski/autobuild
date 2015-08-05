window.currentEntry = 0;

console.log("Init called");

if(typeof window.localStorage['sdatos']=="undefined"){
	
	console.log("sdatos is undefined");
	
	window.localStorage['sdatos'] = "[{}]";
	
}

function take_photo(){
		
	openCamera(320, 256, 90, function (dat){
	
		$("#theImg").attr("src", dat);
		
		$("input[name=pic]").val(dat);
	
	});
	
}

function save_entry(){

	console.log("save_entry called");
	
	var entry = $('#frm').serializeObject();
	
	if(window.currentEntry==0){

		toast("Testimonio creado!", "success", 3000);
		
		window.currentEntry = add_entry(entry);
		
	}else{
		
		toast("Testimonio modificado!", "success", 3000);
		
		update_entry(window.currentEntry, entry);
		
	}
	
	a4pp_destroy_last();
	
	triggerGoTo("0");
	
}

function load_entries(){
	
	console.log("load_entries called");
	
	//console.log(window.localStorage);
	
	if(typeof window.localStorage['sdatos']==="undefined"){
	
		console.log("Undefined sdatos");
	
		window.localStorage['sdatos'] = "[{}]";
		
	}
	
	console.log(window.localStorage);

	
	return JSON.parse(window.localStorage['sdatos']);
	
}

function save_entries(sdata){
	
	console.log("save_entries called");
	
	window.localStorage['sdatos'] = JSON.stringify(sdata);
}

function count_entries(){
	
	console.log("count_entries called");
	
	var temp = load_entries();
	
	return temp.length;
	
}

function get_entry(indexOf){
	
	console.log("get_entry called");
	
	var temp = load_entries();
	
	return temp[indexOf];
	
}

function add_entry(entry){
	
	console.log("add_entry called");
	
	var temp = load_entries();
	
	temp.push(entry);
	
	save_entries(temp);
	
	return temp.length-1;
	
}

function delete_entry(indexOf){
	
	console.log("delete_entry called");
	
	var temp = load_entries();
	
	temp.splice(indexOf, 1);
	
	save_entries(temp);
	
}

function user_delete_entry(indexOf){
	
	if(confirm("Eliminar este testimonio?")){
		
		toast("Testimonio eliminado!", "danger", 3000);
		
		delete_entry(indexOf);
		
		a4pp_destroy_last();
		
		triggerGoTo("0");
		
	}
	
}

function update_entry(indexOf, entry){
	
	console.log("update_entry called");
	
	var temp = load_entries();
	
	temp[indexOf] = entry;
	
	save_entries(temp);
	
}

function list_entries(){
	
	console.log("list_entries called");
	
	var temp = load_entries();
	
	for(var i = 1; i < temp.length; i++){
		
		console.log(i+") "+temp[i].nombre);
		
	}
	
	return 1;
	
}

function edit_entry_in_form(indexOf){
	
	var temp = load_entries();
	
	var final = 0;
	
	var inter;
	
	inter = setInterval(function(){
	
		if(indexOf in temp){
		
			window.currentEntry=indexOf;
			
			var cur = temp[indexOf];
			
			var cnt = 0;
			
			for(x in cur){
				
				cnt = cnt + 1;
				
				console.log(x+" = "+cur[x]);
				
				$("[name="+x+"]").val(cur[x]);
				
				final = final + $("[name="+x+"]").length;
				
				var strc =  cur.pic || 'img/fallback.png';
				
				$("#theImg").attr("src",strc);
			}
		
		}else{
			
			clearInterval(inter);
			
			console.log("Entry:"+indexOf+" not found");
			
		}
		
		console.log("Sum:"+final);
		
		if(final >= cnt){
			
			console.log("End");
			
			clearInterval(inter);
			
		}
		
	}, 500);
	
}

function load_config(){

	if(typeof window.localStorage['config'] == "undefined"){
		 window.localStorage['config'] = "{}";
	} 

	return JSON.parse(window.localStorage['config']);

}

function save_config(element){

	window.localStorage['config'] = JSON.stringify($(element).serializeObject());

}

function get_config(indexOf){

	var temp = load_config();

	if(indexOf in temp){
		return temp[indexOf];
	}else{
		return "";
	}
	
}

function send_entry(entryId){
	
	entry = get_entry(entryId);

	toast("Enviando..", "warning", 50000);
	
	$.post(window.app.update_url, {"apx":"send_data","data": entry}, function(r){
		if(r === "OK"){
			toast("Testimonio enviado! OK", "success", 5000);
		}else{
			toast("Algo paso mal..", "danger", 5000);
		}
	});
	
}


