var appo = {"id":"17","path":"\/var\/www\/app_17","domain":"http:\/\/noticias.fijatebien.net\/app.php","version":null,"a4pp_dir":"\/var\/www","disableLog":false,"space":"app_17","appHeader":"#008040","appHeaderColor":"#ffffff","appVersion":"2.0.0","appName":"Diagro Apps","appDomain":"com.diagro.apps","appUser":{"id":0,"email":"nobody@nohost.com","nome":"Anonymous","level":0,"app":"N","admin":"N","sadmin":"N","hostel":null,"token":"5058f1af8388633f609cadb75a75dc9d"},"addCss":"\n.material-bar,.navbar.navbar-inverse{\n\tbackground:#008040;\n\tbackground: #ff3019;\n\tbackground: -moz-linear-gradient(top, #008040 0%, #008040 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#008040), color-stop(100%,#008040));\n\tbackground: -webkit-linear-gradient(top, #008040 0%,#008040 100%);\n\tbackground: -o-linear-gradient(top, #008040 0%,#008040 100%);\n\tbackground: linear-gradient(to bottom, #008040 0%,#008040 100%);\n\tcolor:#ffffff;\n}\n.material-bar .navbar-item{\n\tcolor:#ffffff;\n}","lang":"pt","runJS":"console.log(\"Callback\");","templates":{"header":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class='table'>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<span class=\"glyphicon glyphicon-triangle-left\"><\/span>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<td style='width:100%'>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<% if(this.logo!=undefined){ %>\r\n\t\t\t\t<img src='<% this.logo %>' class='appLogo'>\r\n\t\t\t<% }else{ %>\r\n\t\t\t\t<% this.title %>\r\n\t\t\t<% } %>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<% if(this.logged===true){ %>\r\n\t\t\t<td>\r\n\t\t\t\t<a class=\"navbar-item\" onclick='a4pp_update();'><span id='updateIcon' class=\"glyphicon glyphicon-refresh\"><\/span><\/a>\r\n\t\t\t<\/td>\r\n\t\t<% } %>\r\n\t\t<% if(this.menu.length > 0){ %>\r\n\t\t<td>\r\n\t\t\t<a class=\"navbar-item\" onclick='toggleMenu();'><span class=\"glyphicon glyphicon-option-vertical\"><\/span><\/a>\r\n\t\t<\/td>\r\n\t\t<% } %>\r\n\t<\/tr>\r\n<\/table>","listview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<ul class=\"model-list list <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<h4><% this.items[i].title %><\/h4>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<li class='model-list-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>' style='width:48px;'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% if(this.items[i].glyphicon!=\"none\"){ %>\r\n\t\t\t\t<div class='glyph' style='background-color:<% this.items[i].color %>'><span class='glyphicon glyphicon-<% this.items[i].glyphicon %>' style='width:48px;'><\/span><\/div>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/li>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/ul> \r\n<\/div> ","tal":"<h3><% this.title %><\/h3>"},"title":"Apps","model":"list","items":[{"id":2,"title":"Teste","model":"template","items":null,"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/0","template":"tal"}],"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"","logged":false,"update_url":"http:\/\/noticias.fijatebien.net\/app.php","name":"Diagro Apps","appHeader2":"#008040"};