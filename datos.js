var appo = {"id":"16","path":"\/var\/www\/app_16","domain":"http:\/\/testimonios.fijatebien.net\/app.php","version":null,"a4pp_dir":"\/var\/www","disableLog":false,"space":"app_16","appHeader":"#2f24b3","appHeaderColor":"#ffffff","appVersion":"1.0.0","appName":"Testimonios","appDomain":"com.testimonios.diagro.py","appUser":{"id":0,"email":"nobody@nohost.com","nome":"Anonymous","level":0,"app":"N","admin":"N","sadmin":"N","hostel":"16","token":"5058f1af8388633f609cadb75a75dc9d"},"addCss":"\n.material-bar,.navbar.navbar-inverse{\n\tbackground:#2f24b3;\n\tbackground: #ff3019;\n\tbackground: -moz-linear-gradient(top, #2f24b3 0%, #141d65 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2f24b3), color-stop(100%,#141d65));\n\tbackground: -webkit-linear-gradient(top, #2f24b3 0%,#141d65 100%);\n\tbackground: -o-linear-gradient(top, #2f24b3 0%,#141d65 100%);\n\tbackground: linear-gradient(to bottom, #2f24b3 0%,#141d65 100%);\n\tcolor:#ffffff;\n}\n.material-bar .navbar-item{\n\tcolor:#ffffff;\n}","lang":"es","runJS":"console.log(\"Callback\");","templates":{"header":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class='table'>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<span class=\"glyphicon glyphicon-triangle-left\"><\/span>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<td style='width:100%'>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<% if(this.logo!=undefined){ %>\r\n\t\t\t\t<img src='<% this.logo %>' class='appLogo'>\r\n\t\t\t<% }else{ %>\r\n\t\t\t\t<% this.title %>\r\n\t\t\t<% } %>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<% if(this.logged===true){ %>\r\n\t\t\t<td>\r\n\t\t\t\t<a class=\"navbar-item\" onclick='a4pp_update();'><span id='updateIcon' class=\"glyphicon glyphicon-refresh\"><\/span><\/a>\r\n\t\t\t<\/td>\r\n\t\t<% } %>\r\n\t\t<% if(this.menu.length > 0){ %>\r\n\t\t<td>\r\n\t\t\t<a class=\"navbar-item\" onclick='toggleMenu();'><span class=\"glyphicon glyphicon-option-vertical\"><\/span><\/a>\r\n\t\t<\/td>\r\n\t\t<% } %>\r\n\t<\/tr>\r\n<\/table>","listview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<ul class=\"model-list list <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<h4><% this.items[i].title %><\/h4>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<li class='model-list-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>' style='width:48px;'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% if(this.items[i].glyphicon!=\"none\"){ %>\r\n\t\t\t\t<div class='glyph' style='background-color:<% this.items[i].color %>'><span class='glyphicon glyphicon-<% this.items[i].glyphicon %>' style='width:48px;'><\/span><\/div>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/li>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/ul> \r\n<\/div> ","iconview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<div class=\"row model-icons icons <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<div class='col-xs-12'>\r\n\t\t\t<h4 class='visible-xs'><% this.items[i].title %><\/h4>\r\n\t\t\t<h2 class='hidden-xs text-center'><% this.items[i].title %><\/h2>\r\n\t\t\t<\/div>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n\t\t\t<div class='model-icons-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/div> \r\n<\/div> \r\n","testimonio":"<div class=\"container\">\r\n<form method=\"POST\" class=\"row\" id='frm'>\r\n\t<div class=\"col-md-5\">\r\n\t\t<label>RTV<\/label>\r\n\t\t<input type=\"text\" name=\"nombre_del_rtv\" id=\"rtv\" class=\"form-control\" value='<% get_config('rtv') %>' required>\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<label>Email RTV<\/label>\r\n\t\t<input type=\"text\" name=\"email_del_rtv\" id=\"rtv\" class=\"form-control\" value='<% get_config('rtv_email') %>' required>\r\n\t<\/div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<label>Telefono RTV<\/label>\r\n\t\t<input type=\"text\" name=\"telefono_del_rtv\" id=\"rtv\" class=\"form-control\" value='<% get_config('rtv_phone') %>' required>\r\n\t<\/div>\r\n\t<div class=\"col-md-12\"><h5 class=\"text-center\">Datos del cliente<\/h5><\/div>\r\n\t<div class=\"col-md-8\">\r\n\t<label>Nombre<\/label>\r\n\t<input type=\"text\" name=\"nombre\" id=\"nombre\" class=\"form-control\" required>\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t<label>Telefono<\/label>\r\n\t<input type=\"text\" name=\"telefono\" id=\"telefono\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t<label>Estancia\/Localidad<\/label>\r\n\t<input type=\"text\" name=\"estancia_localidad\" id=\"estancia_localidad\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t<label>Ciudad<\/label>\r\n\t<input type=\"text\" name=\"ciudad\" id=\"ciudad\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t<label>Departamento<\/label>\r\n\t<input type=\"text\" name=\"departamento\" id=\"departamento\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<div class=\"col-md-6\">\r\n\t<label>Cultivo<\/label>\r\n\t<input type=\"text\" name=\"cultivo\" id=\"cultivo\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<div class=\"col-md-6\">\r\n\t<label>Zafra<\/label>\r\n\t<input type=\"text\" name=\"zafra\" id=\"zafra\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<hr>\r\n\t<div class=\"col-md-12\">\r\n\t<label>Testimonio<\/label>\r\n\t<input type=\"text\" name=\"testimonio\" id=\"testimonio\" class=\"form-control\"  required>\r\n\t<\/div>\r\n\t<hr>\r\n\t<div class=\"col-md-12\"><h5 class=\"text-center\">Resultados Diagro<\/h5><\/div>\r\n\t<div class=\"clearfix\"><\/div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<label>Producto<\/label>\r\n\t\t<input type=\"text\" name=\"producto_diagro\" id=\"producto_diagro\" class=\"form-control\">\r\n\t<\/div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<label>Area (Hectareas)<\/label>\r\n\t\t<input type=\"number\" name=\"area_diagro\" id=\"area_diagro\" class=\"form-control\">\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<label>Productividad bolsas\/ha<\/label>\r\n\t\t<input type=\"number\" name=\"bolsas_ha_diagro\" id=\"bolsas_ha_diagro\" class=\"form-control\">\r\n\t<\/div>\r\n\t<div class=\"col-md-2\">\r\n\t\t<label>Kg\/ha<\/label>\r\n\t\t<input type=\"number\" name=\"kg_ha_diagro\" id=\"kg_ha_diagro\" class=\"form-control\">\r\n\t<\/div>\r\n\t<hr>\r\n\t<div class=\"col-md-12\"><h5  class=\"text-center\">Resultados Competencia<\/h5><\/div>\r\n\t<div class=\"clearfix\"><\/div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<label>Producto<\/label>\r\n\t\t<input type=\"text\" name=\"producto_competencia\" id=\"producto_competencia\" class=\"form-control\">\r\n\t<\/div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<label>Area (Hectareas)<\/label>\r\n\t\t<input type=\"number\" name=\"area_competencia\" id=\"area_competencia\" class=\"form-control\">\r\n\t<\/div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<label>Productividad bolsas\/ha<\/label>\r\n\t\t<input type=\"number\" name=\"bolsas_ha_competencia\" id=\"bolsas_ha_competencia\" class=\"form-control\">\r\n\t<\/div>\r\n\t\r\n\t<div class=\"col-md-2\">\r\n\t\t<label>Kg\/ha<\/label>\r\n\t\t<input type=\"number\" name=\"kg_ha_competencia\" id=\"kg_ha_competencia\" class=\"form-control\">\r\n\t\t<input type=\"hidden\" class=\"form-control\" name=\"pic\">\r\n\t<\/div>\r\n\t<div class=\"clearfix\"><\/div>\r\n\t<img id=\"theImg\" src='' style=\"width:356px;height:256px;margin:10px;\" class=\"img img-rounded\">\r\n\t<div class=\"clearfix\"><\/div>\r\n\t<div class='col-xs-12'>\r\n\t\t<div class='panel-footer'>\r\n\t\t\t<div class='row'>\r\n<div class=\"col-xs-4\"><a class='btn btn-success btn-lg btn-block' onclick=\"take_photo();return false;\">Foto<\/a><\/div>\r\n\t<div class=\"col-xs-4\"><button class='btn btn-primary btn-lg btn-block' onclick=\"save_entry();return false;\">Guardar<\/button><\/div>\r\n<div class=\"col-xs-4\"><a class='btn btn-warning btn-lg btn-block' onclick=\"send_entry(window.currentEntry);return false;\">Enviar<\/a><\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/form>\r\n<\/div>\r\n<% if(window.currentEntry>0){edit_entry_in_form(window.currentEntry);} %>","entries":"<style>.te{-webkit-transition:0.5s all;}.te.removed{-webkit-transform:scale(0.0);}.t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}<\/style>\r\n<div class=\"container\">\r\n<div class='row'>\r\n\t<% for(var i = 1;i<count_entries();i++){ %>\r\n\t<div class='col-md-3 col-xs-6 te'>\r\n\t<div class='panel-footer' style='margin-bottom:5px;'>\r\n\t<img src=\"<% get_entry(i).pic || 'img\/fallback.png' %>\" style='max-width:100%;'>\r\n\t<div class='t'><% get_entry(i).nombre || \"(Sin nombre)\" %><\/div>\r\n\t<div class='row'>\r\n\t\t<div class='col-xs-6'><a  onclick='window.currentEntry = <% i %>;a4pp({\"title\":\"Editar\",\"model\":\"template\",\"template\":\"testimonio\"});' class='btn btn-primary btn-block'>Editar<\/a>\r\n\t\t<\/div>\r\n\t\t<div class='col-xs-6'><a onclick='user_delete_entry(<% i %>);' class='btn btn-danger btn-block'>Descartar<\/a>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<\/div>\r\n\r\n\t<% } %>\r\n\r\n\t<div class='col-md-3 col-xs-6 te'>\r\n\t<div class='panel-footer' style='margin-bottom:5px;'>\r\n\t<img src=\"<% 'img\/fallback.png' %>\" style='max-width:100%;'>\r\n\t<div class='t'><% \"Nuevo testimonio\" %><\/div>\r\n\t<a  onclick='triggerGoTo(\"1\");' class='btn btn-primary btn-block'>Crear nuevo<\/a>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n\r\n<\/div>\r\n<\/div>","config":"<form method=\"POST\" onsubmit='save_config(this);return false;' class='container'>\r\n\t<label>Nome do RTV<\/label>\r\n\t<input type='text' name='rtv' value='<% get_config('rtv') %>' class='form-control'>\r\n\t<label>Email do RTV<\/label>\r\n\t<input type='text' name='rtv_email' value='<% get_config('rtv_email') %>' class='form-control'>\r\n\t<label>Telefone do RTV<\/label>\r\n\t<input type='text' name='rtv_phone' value='<% get_config('rtv_phone') %>'  class='form-control'>\r\n\t<div class='panel-footer'>\r\n\t\t<button class='btn btn-success btn-lg'>Guardar<\/button>\r\n\t<\/div>\r\n<\/form>"},"title":"Testimonios","model":"template","items":[{"id":2,"title":"Listar clientes","model":"template","items":null,"details":"","icon":"img\/users.png","callback":null,"glyphicon":"list","color":"#666","menu":[],"async":false,"xpath":"\/0","template":"entries","beforeRender":null},{"id":3,"title":"Nuevo testimonio","model":"template","items":null,"details":"","icon":"img\/add-user.png","callback":null,"glyphicon":"plus","color":"#666","menu":[],"async":false,"xpath":"\/1","template":"testimonio","beforeRender":"window.currentEntry = 0;"},{"id":4,"title":"Configuraciones","model":"template","items":null,"details":"","icon":"img\/settings.png","callback":null,"glyphicon":"cog","color":"#666","menu":[],"async":false,"xpath":"\/2","template":"config"}],"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[{"title":"Iniciar sesion","onclick":"a4pp_login_form();"},{"title":"Restrarse","onclick":"a4pp_register_form();"}],"async":false,"xpath":"","logged":false,"update_url":"http:\/\/testimonios.fijatebien.net\/app.php","name":"Testimonios","appHeader2":"#141d65","template":"iconview"};