var appo = {"id":"20","path":"\/var\/www\/app_20","domain":"http:\/\/customforms.fijatebien.net\/app.php","version":null,"a4pp_dir":"\/var\/www","disableLog":false,"space":"app_20","appHeader":"0","appHeaderColor":"0","appVersion":"1.0.0","appName":"","appDomain":"0","appUser":{"id":0,"email":"nobody@nohost.com","nome":"Anonymous","level":0,"app":"N","admin":"N","sadmin":"N","hostel":"20","token":"5058f1af8388633f609cadb75a75dc9d"},"addCss":"\n.material-bar,.navbar.navbar-inverse{\n\tbackground:0;\n\tbackground: #ff3019;\n\tbackground: -moz-linear-gradient(top, 0 0%,  100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,0), color-stop(100%,));\n\tbackground: -webkit-linear-gradient(top, 0 0%, 100%);\n\tbackground: -o-linear-gradient(top, 0 0%, 100%);\n\tbackground: linear-gradient(to bottom, 0 0%, 100%);\n\tcolor:0;\n}\n.material-bar .navbar-item{\n\tcolor:0;\n}","lang":"es","runJS":"console.log(\"Callback\");","templates":{"header":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class='table'>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<span class=\"glyphicon glyphicon-triangle-left\"><\/span>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<td style='width:100%'>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<% if(this.logo!=undefined){ %>\r\n\t\t\t\t<img src='<% this.logo %>' class='appLogo'>\r\n\t\t\t<% }else{ %>\r\n\t\t\t\t<% this.title %>\r\n\t\t\t<% } %>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<% if(this.logged===true){ %>\r\n\t\t\t<td>\r\n\t\t\t\t<a class=\"navbar-item\" onclick='a4pp_update();'><span id='updateIcon' class=\"glyphicon glyphicon-refresh\"><\/span><\/a>\r\n\t\t\t<\/td>\r\n\t\t<% } %>\r\n\t\t<% if(this.menu.length > 0){ %>\r\n\t\t<td>\r\n\t\t\t<a class=\"navbar-item\" onclick='toggleMenu();'><span class=\"glyphicon glyphicon-option-vertical\"><\/span><\/a>\r\n\t\t<\/td>\r\n\t\t<% } %>\r\n\t<\/tr>\r\n<\/table>","listview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<ul class=\"model-list list <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<h4><% this.items[i].title %><\/h4>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<li class='model-list-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>' style='width:48px;'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% if(this.items[i].glyphicon!=\"none\"){ %>\r\n\t\t\t\t<div class='glyph' style='background-color:<% this.items[i].color %>'><span class='glyphicon glyphicon-<% this.items[i].glyphicon %>' style='width:48px;'><\/span><\/div>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/li>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/ul> \r\n<\/div> ","customForm":"<form method='POST' class='container' id='form' collection='<% this.collection %>' indexOf=\"0\">\n\t<div class='row'>\n\t<% for(var i = 0; i<this.campos.length; i++){ %>\n\t<% if(this.campos[i].substr(0, 2) == 'C:'){ %>\n\t<div class='col-sm-4 text-right'><label><b><% this.campos[i].substr(2, 50) %><\/b><\/label><\/div>\n\t<div class='col-sm-8'><input type='text' name='forms[<% i %>]' class='form-control'><\/div>\n\t<div class='clearfix'><\/div>\n\t<% }else{ %>\n\t<h4><% this.campos[i].substr(2, 50) %><\/h4>\n\t<div class='clearfix'><\/div>\n\t<% } %>\n\t<% } %>\n\t<div class=\"panel-footer text-center\" id=\"navigator\">\n\t\t<button class=\"btn btn-default pull-left\" onclick='remember.next(\"form\", \"<% this.collection %>\"); return false;'>Next<\/button>\n\t\t<button class=\"btn btn-default\" onclick='remember.next(\"form\", \"<% this.collection %>\"); return false;'>Next<\/button>\n\t\t<button class=\"btn btn-default pull-right\" onclick='remember.prev(\"form\", \"<% this.collection %>\"); return false;'>Prev<\/button>\n\t<\/div>\n\t<\/div>\n<\/form>\t"},"title":"Custom Forms","model":"template","items":[{"id":2,"title":"Dessecacion- POLUX FULL+ARES CLEAN\t","model":"template","items":null,"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/0","template":"customForm","campos":["H:Dessecacion- POLUX FULL+ARES CLEAN\t","C:Nome RTV:","C:Sucursal:","H:","H:Dados Cliente","C:Nome Produtor:","C:Dire\u00e7\u00e3o:","C:Area Total de plantio(ha):","C:Cultura:","H:","H:Dados Aplica\u00e7\u00e3o","C:Data aplica\u00e7\u00e3o:","C:Area total de aplica\u00e7\u00e3o(ha):","C:Horario de aplica\u00e7\u00e3o:","C:Vaz\u00e3o(l\/ha):","C:Condi\u00e7\u00f5es Climaticas:","C:Temperatura Aprox:","C:Observa\u00e7\u00f5es:","C:Principais Plantas Daninhas:","H:Produto Utilizados Diagro\tDose(Kg-l\/ha)","C:Ares Clean","C:Polux","C:Granate","C:Aller Biw","C:Coraza"],"beforeRender":"remember.create('a661614969a4a1979f2f8408a880921e');","afterRender":"remember.bind('form', 'a661614969a4a1979f2f8408a880921e')","collection":"a661614969a4a1979f2f8408a880921e"},{"id":3,"title":"Desecacion","model":"template","items":null,"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/1","template":"customForm","campos":["H:test1","C:testing"],"beforeRender":"remember.create('2b05f5905bb0578388e521011848c69d');","afterRender":"remember.bind('form', '2b05f5905bb0578388e521011848c69d')","collection":"2b05f5905bb0578388e521011848c69d"}],"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[{"title":"Iniciar sesion","onclick":"a4pp_login_form();"},{"title":"Restrarse","onclick":"a4pp_register_form();"}],"async":false,"xpath":"","logged":false,"update_url":"http:\/\/customforms.fijatebien.net\/app.php","name":"","appHeader2":"","template":"listview"};