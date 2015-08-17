var appo = {"id":"15","path":"\/var\/www\/app_15","domain":"http:\/\/costobeneficio.fijatebien.net\/app.php","version":null,"a4pp_dir":"\/var\/www","disableLog":false,"space":"app_15","appHeader":"#008000","appHeaderColor":"#ffffff","appVersion":"1.0.0","appName":"Costo Beneficio","appDomain":"com.costo.beneficio.diagro","appUser":{"id":0,"email":"nobody@nohost.com","nome":"Anonymous","level":0,"app":"N","admin":"N","sadmin":"N","hostel":"15","token":"5058f1af8388633f609cadb75a75dc9d"},"addCss":"\n.material-bar,.navbar.navbar-inverse{\n\tbackground:#008000;\n\tbackground: #ff3019;\n\tbackground: -moz-linear-gradient(top, #008000 0%, #00aa00 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#008000), color-stop(100%,#00aa00));\n\tbackground: -webkit-linear-gradient(top, #008000 0%,#00aa00 100%);\n\tbackground: -o-linear-gradient(top, #008000 0%,#00aa00 100%);\n\tbackground: linear-gradient(to bottom, #008000 0%,#00aa00 100%);\n\tcolor:#ffffff;\n}\n.material-bar .navbar-item{\n\tcolor:#ffffff;\n}","lang":"es","runJS":"console.log(\"Callback\");","templates":{"header":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class='table'>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<span class=\"glyphicon glyphicon-triangle-left\"><\/span>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<td style='width:100%'>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<% if(this.logo!=undefined){ %>\r\n\t\t\t\t<img src='<% this.logo %>' class='appLogo'>\r\n\t\t\t<% }else{ %>\r\n\t\t\t\t<% this.title %>\r\n\t\t\t<% } %>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<% if(this.logged===true){ %>\r\n\t\t\t<td>\r\n\t\t\t\t<a class=\"navbar-item\" onclick='a4pp_update();'><span id='updateIcon' class=\"glyphicon glyphicon-refresh\"><\/span><\/a>\r\n\t\t\t<\/td>\r\n\t\t<% } %>\r\n\t\t<% if(this.menu.length > 0){ %>\r\n\t\t<td>\r\n\t\t\t<a class=\"navbar-item\" onclick='toggleMenu();'><span class=\"glyphicon glyphicon-option-vertical\"><\/span><\/a>\r\n\t\t<\/td>\r\n\t\t<% } %>\r\n\t<\/tr>\r\n<\/table>","listview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<ul class=\"model-list list <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<h4><% this.items[i].title %><\/h4>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<li class='model-list-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>' style='width:48px;'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% if(this.items[i].glyphicon!=\"none\"){ %>\r\n\t\t\t\t<div class='glyph' style='background-color:<% this.items[i].color %>'><span class='glyphicon glyphicon-<% this.items[i].glyphicon %>' style='width:48px;'><\/span><\/div>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/li>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/ul> \r\n<\/div> ","table-calc":"<div class=\"row\">\n\t<style>\n\t.form-control{\n\t\tborder:1px solid #ccc !important;\n\t\ttext-indent:5px;\n\t}\n\t<\/style>\n\t<div class=\"col-sm-3\">\n\t\t<div id=\"form\" style=\"padding:8px\">\n\t\t\t<select id=\"selFile\" onmousedown=\"selectFile();\" onchange=\"selectChange(this);\"class=\"form-control\"><option value='999'>- Nuevo archivo -<\/option><\/select>\n\t\t\t<hr>\n\t\t\t<select id=\"emp\" class=\"form-control\">\n\t\t\t\t<option value=\"1\">Diagro<\/option>\n\t\t\t\t<option value=\"2\">Competencia<\/option>\n\t\t\t<\/select>\n\t\t\t\n\t\t\t<label>Producto<\/label>\n\t\t\t<input type=\"text\" id=\"producto\" value=\"\" class=\"form-control\" list=\"productos\">\n\t\t\t<datalist name=\"productos\" id=\"productos\">\n\t\t\t\t<option>POLUX FULL<\/option>\n\t\t\t\t<option>DINCOZEB<\/option>\n\t\t\t<\/datalist>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<label style=\"width:100%;\">Unidad de medida<\/label>\n\t\t\t\t\t<input type=\"text\" id=\"um\" value=\"\" class=\"form-control\">\n\t\t\t\t\t<label>Dosis<\/label>\n\t\t\t\t\t<input type=\"number\" style=\"text-align:right\" id=\"dosis\" onkeyup=\"toDbl(event, this);\" value=\"\" class=\"form-control\">\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<label>Precio<\/label>\n\t\t\t\t\t<input type=\"number\" style=\"text-align:right\"  id=\"precio\" value=\"\"  onkeyup=\"toDbl(event, this);\" class=\"form-control\">\n\t\t\t\t\t<label>Aplicaciones<\/label>\n\t\t\t\t\t<input type=\"number\" id=\"aplicaciones\" value=\"\"  class=\"form-control\">\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<label>Precio por Tonelada<\/label>\n\t\t\t<input type=\"number\" id=\"soja\" value=\"300.00\" class=\"form-control\">\n\t\t\t<br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<button class='btn btn-primary btn-lg btn-block' onclick='$(\"#createRow\").click();'><span class='glyphicon glyphicon-plus'><\/span>AGREGAR<\/button>\n\t\t\t\t\t<button class='btn btn-warning btn-lg btn-block' style=\"margin-top:15px;\" onclick='clearAll();'><span class='glyphicon glyphicon-ban'><\/span> LIMPIAR<\/button>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<button class='btn btn-success btn-lg btn-block' onclick='salvar();'><span class='glyphicon glyphicon-ok'><\/span> GUARDAR<\/button>\n\t\t\t\t\t<button class='btn btn-danger btn-lg btn-block' style=\"margin-top:15px;\" onclick='deletar();'><span class='glyphicon glyphicon-remove'><\/span>ELIMINAR<\/button>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class='btn btn-primary btn-lg btn-block' style=\"margin-top:15px;\" onclick='send_email();'><span class='glyphicon glyphicon-envelope'><\/span> MANDAR POR EMAIL<\/button>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"col-sm-9\">\n\t\t<input id=\"nome\" class=\"form-control\">\n\t<\/div>\n\t<div class=\"col-sm-9\" id=\"tblHtml\">\n\t\t<h5>Diagro<\/h5>\n\t\t<table class=\"table table-bordered\" id=\"t1\" style=\"width:100%;font-family:Arial;font-size:11px;\" cellspacing=\"0\" cellpadding=\"5\" border=\"1\"> \n\t\t\t<tr>\n\t\t\t\t<th>Producto<\/th>\n\t\t\t\t<th>U. de medida<\/th>\n\t\t\t\t<th>Dosis<\/th>\n\t\t\t\t<th>Precio<\/th>\n\t\t\t\t<th>Aplicaciones<\/th>\n\t\t\t\t<th>U$\/ha<\/th>\n\t\t\t\t<th>Sc\/ha<\/th>\n\t\t\t\t<th>Kg\/ha<\/th>\n\t\t\t\t<th>*<\/th>\n\t\t\t<\/tr>\n\t\t\t<tbody id=\"result1\" style=\"color:#090;\">\n\t\t\t\t\n\t\t\t<\/tbody>\n\t\t\t<tr>\n\t\t\t\t<th colspan='5' class=\"text-right\">Costo\/ha<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total\">0<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total2\">0<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total3\">0<\/th><td><\/td>\n\t\t\t<\/tr>\n\t\t<\/table>\n\t\t<h5>Competencia<\/h5>\n\t\t<table class=\"table table-bordered\" id=\"t2\" style=\"width:100%;font-family:Arial;font-size:11px;\" cellspacing=\"0\" cellpadding=\"5\" border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<th>Producto<\/th>\n\t\t\t\t<th>U. de medida<\/th>\n\t\t\t\t<th>Dosis<\/th>\n\t\t\t\t<th>Precio<\/th>\n\t\t\t\t<th>Aplicaciones<\/th>\n\t\t\t\t<th>U$\/ha<\/th>\n\t\t\t\t<th>Sc\/ha<\/th>\n\t\t\t\t<th>Kg\/ha<\/th>\n\t\t\t\t<th>*<\/th>\n\t\t\t<\/tr>\n\t\t\t<tbody id=\"result2\" style=\"color:#900;\">\n\t\t\t\t\n\t\t\t<\/tbody>\n\t\t\t<tr>\n\t\t\t\t<th colspan='5' class=\"text-right\">Costo\/ha<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total\">0<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total2\">0<\/th>\n\t\t\t\t<th class=\"text-right\" id=\"total3\">0<\/th>\n\t\t\t\t<td><\/td>\n\t\t\t<\/tr>\n\t\t<\/table>\n\t\t\n\t<\/div>\n\t<button id=\"createRow\" style='display:none;' onclick=\"addRow();\">Add<\/button>\n\t<button id=\"sum\" style='display:none;' onclick=\"autoSum();\"><\/button>\n<\/div>\n"},"title":"Costo Beneficio Diagro","model":"template","items":null,"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[{"title":"Iniciar sesion","onclick":"a4pp_login_form();"},{"title":"Restrarse","onclick":"a4pp_register_form();"}],"async":false,"xpath":"","logged":false,"update_url":"http:\/\/costobeneficio.fijatebien.net\/app.php","name":"Costo Beneficio","appHeader2":"#00aa00","template":"table-calc","afterRender":"selectFile();"};