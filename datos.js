var appo = {"id":"17","path":"\/var\/www\/app_17","domain":"http:\/\/noticias.fijatebien.net\/app.php","version":null,"a4pp_dir":"\/var\/www","disableLog":false,"space":"app_17","appHeader":"#f07200","appHeaderColor":"#ffffff","appVersion":"1.0.0","appName":"Noticias Diagro","appDomain":"com.diagro.noticias","appUser":{"id":0,"email":"nobody@nohost.com","nome":"Anonymous","level":0,"app":"N","admin":"N","sadmin":"N","hostel":"17","token":"5058f1af8388633f609cadb75a75dc9d"},"addCss":"\n.material-bar,.navbar.navbar-inverse{\n\tbackground:#f07200;\n\tbackground: #ff3019;\n\tbackground: -moz-linear-gradient(top, #f07200 0%, #d95e13 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f07200), color-stop(100%,#d95e13));\n\tbackground: -webkit-linear-gradient(top, #f07200 0%,#d95e13 100%);\n\tbackground: -o-linear-gradient(top, #f07200 0%,#d95e13 100%);\n\tbackground: linear-gradient(to bottom, #f07200 0%,#d95e13 100%);\n\tcolor:#ffffff;\n}\n.material-bar .navbar-item{\n\tcolor:#ffffff;\n}","lang":"pt","runJS":"console.log(\"Callback\");","templates":{"header":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class='table'>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<span class=\"glyphicon glyphicon-triangle-left\"><\/span>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<td style='width:100%'>\r\n\t\t<a onclick='goBack();' class=\"navbar-item\">\r\n\t\t\t<% if(this.logo!=undefined){ %>\r\n\t\t\t\t<img src='<% this.logo %>' class='appLogo'>\r\n\t\t\t<% }else{ %>\r\n\t\t\t\t<% this.title %>\r\n\t\t\t<% } %>\r\n\t\t<\/a>\r\n\t\t<\/td>\r\n\t\t<% if(this.logged===true){ %>\r\n\t\t\t<td>\r\n\t\t\t\t<a class=\"navbar-item\" onclick='a4pp_update();'><span id='updateIcon' class=\"glyphicon glyphicon-refresh\"><\/span><\/a>\r\n\t\t\t<\/td>\r\n\t\t<% } %>\r\n\t\t<% if(this.menu.length > 0){ %>\r\n\t\t<td>\r\n\t\t\t<a class=\"navbar-item\" onclick='toggleMenu();'><span class=\"glyphicon glyphicon-option-vertical\"><\/span><\/a>\r\n\t\t<\/td>\r\n\t\t<% } %>\r\n\t<\/tr>\r\n<\/table>","listview":"<div class=\"container\">\r\n\t<div class='superior'>\r\n\t\t<% this.details %>\r\n\t<\/div>\r\n\t<ul class=\"model-list list <% if(this.extra!=undefined){ %> <% this.extra %> <% } %>\">\r\n\t\t<% for(var i=0;i<this.items.length;i++){ %>\r\n\t\t\t<% if(this.items[i].model=='heading'){ %>\r\n\t\t\t<h4><% this.items[i].title %><\/h4>\r\n\t\t\t<% }else{ %>\r\n\t\t\t<li class='model-list-item' onclick='triggerGoTo(\"<% this.items[i].xpath %>\");'>\r\n\t\t\t\t<% if(this.items[i].icon!=undefined){ %>\r\n\t\t\t\t<img src='<% this.items[i].icon %>' style='width:48px;'>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% if(this.items[i].glyphicon!=\"none\"){ %>\r\n\t\t\t\t<div class='glyph' style='background-color:<% this.items[i].color %>'><span class='glyphicon glyphicon-<% this.items[i].glyphicon %>' style='width:48px;'><\/span><\/div>\r\n\t\t\t\t<% } %> \r\n\t\t\t\t<% this.items[i].title %>\r\n\t\t\t<\/li>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t<\/ul> \r\n<\/div> "},"title":"Noticias Diagro","model":"template","items":[{"id":2,"title":"Diagro","model":"template","items":null,"details":"","icon":"img\/6.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/0"},{"id":3,"title":"CHD'S","model":"template","items":null,"details":"","icon":"img\/8.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/1"},{"id":4,"title":"Costo Beneficio","model":"template","items":null,"details":"","icon":"img\/15.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/2"},{"id":5,"title":"Testimonios","model":"template","items":null,"details":"","icon":"img\/16.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/3"},{"id":6,"title":"Noticias Diagro","model":"template","items":null,"details":"","icon":"img\/17.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/4"},{"id":7,"title":"Charlas","model":"template","items":null,"details":"","icon":"img\/75.jpg","callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"\/5"}],"details":"","icon":null,"callback":null,"glyphicon":"none","color":"silver","menu":[],"async":false,"xpath":"","logged":false,"update_url":"http:\/\/noticias.fijatebien.net\/app.php","name":"Noticias Diagro","appHeader2":"#d95e13","template":"listview"};