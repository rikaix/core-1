var Isotope={mediaManager:function(b,c,a){var l=$(a).getFirst("table");var f=l.getFirst("tbody");var k=$(b).getParent("tr");var m=f.getChildren();Backend.getScrollOffset();switch(c){case"up":k.getPrevious()?k.injectBefore(k.getPrevious()):k.injectInside(f);break;case"down":k.getNext()?k.injectAfter(k.getNext()):k.injectBefore(f.getFirst());break;case"delete":k.destroy();break}m=f.getChildren();for(var e=0;e<m.length;e++){var h=m[e].getChildren();for(var d=0;d<h.length;d++){var g=h[d].getFirst();if(g.type=="hidden"||g.type=="text"||g.type=="textarea"){g.name=g.name.replace(/\[[0-9]+\]/ig,"["+e+"]")}}}},attributeWizard:function(d,e,f){var a=$(f);var c=$(d).getParent();Backend.getScrollOffset();switch(e){case"up":if(!c.getPrevious()||c.getPrevious().hasClass("fixed")){c.injectInside(a)}else{c.injectBefore(c.getPrevious())}break;case"down":if(c.getNext()){c.injectAfter(c.getNext())}else{var b=a.getFirst();if(b.hasClass("fixed")){b=b.getNext()}c.injectBefore(b)}break}},surchargeWizard:function(b,c,a){var n=$(a);var f=n.getFirst().getNext();var m=$(b).getParent("tr");var o=f.getChildren();Backend.getScrollOffset();switch(c){case"copy":var l=new Element("tr");var k=m.getChildren();for(var e=0;e<k.length;e++){var h=k[e].clone(true).injectInside(l);h.getFirst().value=k[e].getFirst().value}l.injectAfter(m);break;case"up":m.getPrevious()?m.injectBefore(m.getPrevious()):m.injectInside(f);break;case"down":m.getNext()?m.injectAfter(m.getNext()):m.injectBefore(f.getFirst());break;case"delete":(o.length>1)?m.destroy():null;break}o=f.getChildren();for(var e=0;e<o.length;e++){var k=o[e].getChildren();for(var d=0;d<k.length;d++){var g=k[d].getFirst();if(g.type=="select-one"||g.type=="text"||g.type=="checkbox"){g.name=g.name.replace(/\[[0-9]+\]/ig,"["+e+"]")}}}},fieldWizard:function(b,d,a){var o=$(a);var g=o.getFirst().getNext();var n=$(b).getParent("tr");var p=g.getChildren();Backend.getScrollOffset();switch(d){case"copy":var m=new Element("tr");var l=n.getChildren();for(var f=0;f<l.length;f++){var k=l[f].clone(true).injectInside(m);k.getFirst().value=l[f].getFirst().value;if(k.getFirst().type=="checkbox"){k.getFirst().checked=l[f].getFirst().checked?"checked":"";if(Browser.Engine.trident&&Browser.Engine.version<5){k.innerHTML=k.innerHTML.replace(/CHECKED/ig,'checked="checked"')}}}m.injectAfter(n);break;case"up":n.getPrevious()?n.injectBefore(n.getPrevious()):n.injectInside(g);break;case"down":n.getNext()?n.injectAfter(n.getNext()):n.injectBefore(g.getFirst());break;case"delete":(p.length>1)?n.destroy():null;break}p=g.getChildren();var c=new Array("value","label","default");for(var f=0;f<p.length;f++){var l=p[f].getChildren();for(var e=0;e<l.length;e++){var h=l[e].getFirst();if(h.type=="text"||h.type=="checkbox"||h.type=="hidden"){h.name=h.name.replace(/\[[0-9]+\]/ig,"["+f+"]")}}}},imageWatermarkWizard:function(b,c,a){var n=$(a);var f=n.getFirst().getNext();var m=$(b).getParent("tr");var o=f.getChildren();Backend.getScrollOffset();switch(c){case"copy":var l=new Element("tr");var k=m.getChildren();for(var e=0;e<k.length;e++){var h=k[e].clone(true).injectInside(l);h.getFirst().value=k[e].getFirst().value}l.injectAfter(m);break;case"delete":(o.length>1)?m.destroy():null;break}o=f.getChildren();for(var e=0;e<o.length;e++){var k=o[e].getChildren();for(var d=0;d<k.length;d++){var g=k[d].getFirst();if(g.type=="select-one"){g.name=g.name.replace(/\[[0-9]+\]/ig,"["+e+"]")}else{if(g.type=="text"||g.type=="checkbox"){g.name=g.name.replace(/\[[0-9]+\]/ig,"["+e+"]")}}}}},toggleCheckboxGroup:function(c,d){var b=$(c).className;var a=$(c).checked?"checked":"";if(b=="tl_checkbox"){$$("#"+d+" .tl_checkbox").each(function(e){if(!e.disabled){e.checked=a}})}else{if(b=="tl_tree_checkbox"){$$("#"+d+" .parent .tl_tree_checkbox").each(function(e){if(!e.disabled){e.checked=a}})}}Backend.getScrollOffset()},toggleProductTree:function(b,g,e,a,f){b.blur();var c=$(g);var d=$(b).getFirst();if(c){if(c.getStyle("display")!="inline"){c.setStyle("display","inline");d.src=d.src.replace("folPlus.gif","folMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleProductTree&id="+g+"&state=1"}).send()}else{c.setStyle("display","none");d.src=d.src.replace("folMinus.gif","folPlus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleProductTree&id="+g+"&state=0"}).send()}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadProductTree&id="+g+"&level="+f+"&field="+e+"&name="+a+"&state=1",onRequest:AjaxRequest.displayBox("Loading data ..."),onComplete:function(h,i){var j=new Element("ul");j.addClass("level_"+f);j.set("html",h);c=new Element("li");c.addClass("parent");c.setProperty("id",g);c.setStyle("display","inline");j.injectInside(c);c.injectAfter($(b).getParent("li"));d.src=d.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).send();return false},addInteractiveHelp:function(){$$("a.tl_tip").each(function(a){if(a.retrieve("complete")){return}a.addEvent("mouseover",function(){a.timo=setTimeout(function(){var c=$("tl_helpBox");if(!c){c=new Element("div").setProperty("id","tl_helpBox").injectInside($(document.body))}var b=a.getTop();c.set("html",a.get("longdesc"));c.setStyle("display","block");c.setStyle("top",(b+18)+"px")},1000)});a.addEvent("mouseout",function(){var b=$("tl_helpBox");if(b){b.setStyle("display","none")}clearTimeout(a.timo)});a.store("complete",true)})},inheritFields:function(a,b){var c=false;a.each(function(e,f){var h=$(("ctrl_"+e));if(h){var g=h.getParent("div").getFirst("h3");if(!g&&h.match(".tl_checkbox_single_container")){g=h}if(!g){c=true;return}g.addClass("inherit");var d=$("ctrl_inherit").getFirst(("input[value="+e+"]"));d.setStyle("float","right").inject(g);$("ctrl_inherit").getFirst(("label[for="+d.get("id")+"]")).setStyles({"float":"right","padding-right":"5px","font-weight":"normal"}).set("text",b).inject(g);d.addEvent("change",function(j){var i=$(("ctrl_"+j.target.get("value")));if(i.match(".tl_checkbox_single_container")){i.getFirst("input").disabled=j.target.checked}else{i.setStyle("display",(j.target.checked?"none":"block"))}});if(h.match(".tl_checkbox_single_container")){h.getFirst("input").readonly=d.checked}else{h.setStyle("display",(d.checked?"none":"block"))}}});if(!c){$("ctrl_inherit").getParent("div").setStyle("display","none")}},initializeToolsMenu:function(){if($$("#tl_buttons .isotope-tools").length<1){return}$$("#tl_buttons .header_isotope_tools").setStyle("display","inline");var a=$$("#tl_buttons .isotope-tools").clone();$$("#tl_buttons .isotope-tools").each(function(c){c.previousSibling.nodeValue="";c.destroy()});var b=new Element("div",{id:"isotopetoolsmenu",styles:{top:($$("a.header_isotope_tools")[0].getPosition().y+22)}}).adopt(a);b.inject($(document.body));b.setStyle("left",$$("a.header_isotope_tools")[0].getPosition().x-7);$$("a.header_isotope_tools").addEvent("click",function(c){$("isotopetoolsmenu").setStyle("display","block");return false});$(document.body).addEvent("click",function(){$("isotopetoolsmenu").setStyle("display","none")})},initializeToolsButton:function(){$$("#tl_listing .isotope-tools").each(function(a){a.addClass("invisible")});$$("a.isotope-contextmenu").each(function(a){if(a.getNext("a.isotope-tools")){a.removeClass("invisible").addEvent("click",function(b){if($defined($("isotope-contextmenu"))){$("isotope-contextmenu").destroy()}var c=new Element("div",{id:"isotope-contextmenu",styles:{top:(a.getPosition().y+22),display:"block"}});a.getAllNext("a.isotope-tools").each(function(e){var d=e.getFirst("img");c.set("html",(c.get("html")+'<a href="'+e.href+'" title="'+e.title+'">'+e.get("html")+" "+d.alt+"</a>"))});c.inject($(document.body));c.setStyle("left",a.getPosition().x-(c.getSize().x/2));return false})}});$(document.body).addEvent("click",function(){if($defined($("isotope-contextmenu"))){$("isotope-contextmenu").destroy()}})},makePageViewSortable:function(a){var b=new Sortables(a,{contstrain:true,opacity:0.6});b.active=false;b.addEvent("start",function(){b.active=true});b.addEvent("complete",function(d){if(!b.active){return}if(d.getPrevious()){var f=d.get("id").replace(/li_/,"");var c=d.getPrevious().get("id").replace(/li_/,"");var e=window.location.search.replace(/id=[0-9]*/,"id="+f)+"&act=cut&mode=1&page_id="+c;new Request({url:window.location.href,method:"get",data:e}).send()}else{if(d.getParent()){var f=d.get("id").replace(/li_/,"");var c=d.getParent().get("id").replace(/ul_/,"");var e=window.location.search.replace(/id=[0-9]*/,"id="+f)+"&act=cut&mode=2&page_id="+c;new Request({url:window.location.href,method:"get",data:e}).send()}}})}};window.addEvent("domready",function(){Isotope.addInteractiveHelp();Isotope.initializeToolsMenu();Isotope.initializeToolsButton()}).addEvent("structure",function(){Isotope.initializeToolsButton()});