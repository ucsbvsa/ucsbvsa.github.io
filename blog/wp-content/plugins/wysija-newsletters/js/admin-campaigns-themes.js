var allthemes={};displaychange=0,jQuery(function(a){function t(a,t){wysijaAJAX.task="install_theme";var r=allthemes[a];return wysijaAJAX.theme_id=r.id,wysijaAJAX.theme_key=r.key,wysijaAJAX.premium=parseInt(r.is_premium),wysijaAJAX.theme_name=r.name,t&&!confirm(wysijatrans.reinstallwarning.replace("%1$s",r.key))?!1:(wysijaAJAX._wpnonce=wysijanonces.campaigns.install_theme,jQuery("#overlay").show(),jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(a){e("search-view"),jQuery("#overlay").hide(),jQuery.WYSIJA_HANDLE_RESPONSE(a),window.parent.jQuery("#wj_themes_list").html(a.result.themes),window.parent.handleSwitchTheme(),window.parent.handleRemoveTheme()},error:function(a){jQuery.WYSIJA_HANDLE_RESPONSE(a),jQuery("#overlay").hide(),e("search-view")},dataType:"json"}),void 0)}function e(t,e){a(".panel").hide(),a("#"+t).show(),void 0!==e&&e===!0&&setTimeout(function(){window.parent.WysijaPopup.setDimensions()},1)}function r(){i()}function i(t){var e='<li><img class="loading" title="Loading" alt="loading" src="../wp-content/plugins/wysija-newsletters/img/wpspin_light.gif" /></li>';a("#themes-list").html(e);var r="";if(void 0===t)var t={is_premium:0};else void 0===t.is_premium&&(t.is_premium=0);r="&"+jQuery.param(t),a.getJSON("//api.mailpoet.com/theme/search?domain="+wysijatrans.domainname+r+"&callback=?",function(t){var e="";if(t){var r="";jQuery.each(t.themes,function(a,t){allthemes[t.id]=t,r="",0===(a+1)%5&&(r+=" last");var i=wysijatrans.install;-1!==jQuery.inArray(t.key,wysijatrans.installedthemes)&&(r+=" installed",i=wysijatrans.reinstall),1===parseInt(t.is_premium)&&(r+=" premium",1!==parseInt(wysijatrans.ispremium)&&(i=wysijatrans.premiumonly)),e+='<li class="theme'+r+'">',e+='<div class="thumbnail">',e+='<img src="'+t.thumbnail_large+'" alt="'+t.name+'" title="'+t.name+'" />',e+='<a class="button-primary install'+r+'" href="javascript:;" data-id="'+t.id+'">'+i+"</a>",e+="</div>",e+='<a class="infos" href="javascript:;" data-id="'+t.id+'">'+wysijatrans.viewinfos+"</a>",e+="</li>"})}else{var e="<div>";e+="<strong>"+wysijatrans.errorconnecting+"</strong>",e+="</div>"}a("#themes-list").html(e)})}function s(a,t){if(null==a)return"http://www.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s="+t;var e=function(a){function t(a,t){return a<<t|a>>>32-t}function e(a,t){var e,r,i,s,n;return i=2147483648&a,s=2147483648&t,e=1073741824&a,r=1073741824&t,n=(1073741823&a)+(1073741823&t),e&r?2147483648^n^i^s:e|r?1073741824&n?3221225472^n^i^s:1073741824^n^i^s:n^i^s}function r(a,t,e){return a&t|~a&e}function i(a,t,e){return a&e|t&~e}function s(a,t,e){return a^t^e}function n(a,t,e){return t^(a|~e)}function o(a,i,s,n,o,l,m){return a=e(a,e(e(r(i,s,n),o),m)),e(t(a,l),i)}function l(a,r,s,n,o,l,m){return a=e(a,e(e(i(r,s,n),o),m)),e(t(a,l),r)}function m(a,r,i,n,o,l,m){return a=e(a,e(e(s(r,i,n),o),m)),e(t(a,l),r)}function c(a,r,i,s,o,l,m){return a=e(a,e(e(n(r,i,s),o),m)),e(t(a,l),r)}function d(a){for(var t,e=a.length,r=e+8,i=(r-r%64)/64,s=16*(i+1),n=Array(s-1),o=0,l=0;e>l;)t=(l-l%4)/4,o=8*(l%4),n[t]=n[t]|a.charCodeAt(l)<<o,l++;return t=(l-l%4)/4,o=8*(l%4),n[t]=n[t]|128<<o,n[s-2]=e<<3,n[s-1]=e>>>29,n}function u(a){var t,e,r="",i="";for(e=0;3>=e;e++)t=255&a>>>8*e,i="0"+t.toString(16),r+=i.substr(i.length-2,2);return r}function h(a){a=a.replace(/rn/g,"n");for(var t="",e=0;a.length>e;e++){var r=a.charCodeAt(e);128>r?t+=String.fromCharCode(r):r>127&&2048>r?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|63&r>>6),t+=String.fromCharCode(128|63&r))}return t}var p,v,w,y,f,j,g,_,A,C=Array(),k=7,b=12,S=17,I=22,J=5,Q=9,X=14,x=20,T=4,$=11,E=16,N=23,O=6,P=10,L=15,R=21;for(a=h(a),C=d(a),j=1732584193,g=4023233417,_=2562383102,A=271733878,p=0;C.length>p;p+=16)v=j,w=g,y=_,f=A,j=o(j,g,_,A,C[p+0],k,3614090360),A=o(A,j,g,_,C[p+1],b,3905402710),_=o(_,A,j,g,C[p+2],S,606105819),g=o(g,_,A,j,C[p+3],I,3250441966),j=o(j,g,_,A,C[p+4],k,4118548399),A=o(A,j,g,_,C[p+5],b,1200080426),_=o(_,A,j,g,C[p+6],S,2821735955),g=o(g,_,A,j,C[p+7],I,4249261313),j=o(j,g,_,A,C[p+8],k,1770035416),A=o(A,j,g,_,C[p+9],b,2336552879),_=o(_,A,j,g,C[p+10],S,4294925233),g=o(g,_,A,j,C[p+11],I,2304563134),j=o(j,g,_,A,C[p+12],k,1804603682),A=o(A,j,g,_,C[p+13],b,4254626195),_=o(_,A,j,g,C[p+14],S,2792965006),g=o(g,_,A,j,C[p+15],I,1236535329),j=l(j,g,_,A,C[p+1],J,4129170786),A=l(A,j,g,_,C[p+6],Q,3225465664),_=l(_,A,j,g,C[p+11],X,643717713),g=l(g,_,A,j,C[p+0],x,3921069994),j=l(j,g,_,A,C[p+5],J,3593408605),A=l(A,j,g,_,C[p+10],Q,38016083),_=l(_,A,j,g,C[p+15],X,3634488961),g=l(g,_,A,j,C[p+4],x,3889429448),j=l(j,g,_,A,C[p+9],J,568446438),A=l(A,j,g,_,C[p+14],Q,3275163606),_=l(_,A,j,g,C[p+3],X,4107603335),g=l(g,_,A,j,C[p+8],x,1163531501),j=l(j,g,_,A,C[p+13],J,2850285829),A=l(A,j,g,_,C[p+2],Q,4243563512),_=l(_,A,j,g,C[p+7],X,1735328473),g=l(g,_,A,j,C[p+12],x,2368359562),j=m(j,g,_,A,C[p+5],T,4294588738),A=m(A,j,g,_,C[p+8],$,2272392833),_=m(_,A,j,g,C[p+11],E,1839030562),g=m(g,_,A,j,C[p+14],N,4259657740),j=m(j,g,_,A,C[p+1],T,2763975236),A=m(A,j,g,_,C[p+4],$,1272893353),_=m(_,A,j,g,C[p+7],E,4139469664),g=m(g,_,A,j,C[p+10],N,3200236656),j=m(j,g,_,A,C[p+13],T,681279174),A=m(A,j,g,_,C[p+0],$,3936430074),_=m(_,A,j,g,C[p+3],E,3572445317),g=m(g,_,A,j,C[p+6],N,76029189),j=m(j,g,_,A,C[p+9],T,3654602809),A=m(A,j,g,_,C[p+12],$,3873151461),_=m(_,A,j,g,C[p+15],E,530742520),g=m(g,_,A,j,C[p+2],N,3299628645),j=c(j,g,_,A,C[p+0],O,4096336452),A=c(A,j,g,_,C[p+7],P,1126891415),_=c(_,A,j,g,C[p+14],L,2878612391),g=c(g,_,A,j,C[p+5],R,4237533241),j=c(j,g,_,A,C[p+12],O,1700485571),A=c(A,j,g,_,C[p+3],P,2399980690),_=c(_,A,j,g,C[p+10],L,4293915773),g=c(g,_,A,j,C[p+1],R,2240044497),j=c(j,g,_,A,C[p+8],O,1873313359),A=c(A,j,g,_,C[p+15],P,4264355552),_=c(_,A,j,g,C[p+6],L,2734768916),g=c(g,_,A,j,C[p+13],R,1309151649),j=c(j,g,_,A,C[p+4],O,4149444226),A=c(A,j,g,_,C[p+11],P,3174756917),_=c(_,A,j,g,C[p+2],L,718787259),g=c(g,_,A,j,C[p+9],R,3951481745),j=e(j,v),g=e(g,w),_=e(_,y),A=e(A,f);var z=u(j)+u(g)+u(_)+u(A);return z.toLowerCase()},t=t||80;return"http://www.gravatar.com/avatar/"+e(a)+".jpg?s="+t}a(function(){a("#themes-reload").length>0&&(wysijaAJAX.task="refresh_themes",jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(a){window.parent.jQuery("#wj_themes_list").html(a.result.themes),window.parent.handleSwitchTheme(),window.parent.handleRemoveTheme()},error:function(){},dataType:"json"}))}),a(document).on("click",".install",function(){return t(a(this).data("id"),a(this).hasClass("installed")),!1}),a(document).on("click",".infos",function(){var t=allthemes[a(this).data("id")],r="",i=wysijatrans.install;if(void 0!==t){-1!==a.inArray(t.key,wysijatrans.installedthemes)&&(r=" installed",i=wysijatrans.reinstall),1===parseInt(t.is_premium)&&(r+=" premium",1!==parseInt(wysijatrans.ispremium)&&(i=wysijatrans.premiumonly));for(var n='<div class="theme-screenshot"><img src="'+t.screenshot+'" alt="'+t.name+'" /></div>',o='<img src="'+s(t.author_email,80)+'" class="avatar" width="80px"/>',l=o+"<h2>"+t.name+'</h2><p><input type="button" value="'+i+'" data-id="'+t.id+'" class="button-primary install'+r+'" /></p>',m='<div class="stars"><div id="average-vote" class="star-rating" style="width:'+95*t.rating/5+'px;"></div></div>',c='<div class="stars my-rating clearfix" data-theme="'+parseInt(t.id)+'">',d=0;5>d;d++)c+=parseInt(t.user_rating)>d?'<a href="javascript:;" class="active" data-value="'+(d+1)+'"></a>':'<a href="javascript:;" data-value="'+(d+1)+'"></a>';c+="</div>",l+='<div class="paragraph"><strong>'+wysijatrans.stars.replace("%1$s","</strong> "+wysijatrans.totalvotes.replace("%1$s",'<span id="total-votes">'+t.votes+"</span>")+m)+"</div>",l+='<div class="paragraph"><strong>'+wysijatrans.starsyr.replace("%1$s","</strong>"+c)+"</div>",l+="<p><strong>"+wysijatrans.downloads.replace("%1$s","</strong>"+t.downloads_zip)+"</p>",l+="<p><strong>"+wysijatrans.lastupdated.replace("%1$s","</strong>"+t.updated_at)+"</p>",l+="<p>"+wysijatrans.viewallthemes.replace("%1$s",'<a href="javascript:;" class="author-id-filter" id="author-id-filter'+t.author_id+'">'+t.author_name+"</a>")+"</p>",l+='<p><a href="//api.mailpoet.com/download/zip/'+t.id+"?domain="+wysijatrans.domainname+'">'+wysijatrans.downloadzip+"</a></p>";var u="";1==t.has_psd&&(u='<p><a href="//api.mailpoet.com/download/psd/'+t.id+"?domain="+wysijatrans.domainname+'" class="downpsd">'+wysijatrans.downloadpsd+"</a></p>",1===parseInt(t.is_premium)&&1!==parseInt(wysijatrans.ispremium)&&(u="<p><strong>"+wysijatrans.premiumfiles+"</strong></p>")),l+=u,l+='<p><a href="'+t.author_url+'" target="_blank">'+wysijatrans.viewauthorsite+"</a></p>";var h='<div class="wrap actions"><a class="button-secondary2 theme-view-back" href="javascript:;">'+wysijatrans.viewback+"</a>"+"</div>"+'<div class="theme-infos clearfix">'+'<div class="preview">'+n+"</div>"+'<div class="infos">'+l+"</div>"+"</div>";return a("#theme-view").html(h),e("theme-view",!0),!1}}),a(document).on("click",".theme-view-back",function(){return e("search-view",!0),!1}),a("#gallery-form").submit(function(){return r(),!1}),a(document).on("click",".my-rating a",function(){for(var t=parseInt(a(this).data("value")),e=0;5>e;e++)t>e?a(a(".my-rating a")[e]).addClass("active"):a(a(".my-rating a")[e]).removeClass("active");var r=parseInt(a(this).parent().data("theme"));return a.getJSON("//api.mailpoet.com/theme/rate/"+r+"?rating="+t+"&domain="+wysijatrans.domainname+"&callback=?",function(e){e&&(a("#average-vote").css("width",parseInt(95*e.rating/5)),a("#total-votes").html(e.votes),allthemes[r].votes=e.votes,allthemes[r].user_rating=t,allthemes[r].rating=e.rating)}),!1}),a(document).on("hover",".my-rating a",function(){var t=parseInt(a(this).data("value"));a(".my-rating a").removeClass("on").removeClass("off");for(var e=0;5>e;e++)t>e?a(a(".my-rating a")[e]).addClass("on"):a(a(".my-rating a")[e]).addClass("off")}),a(document).on("mouseout",".my-rating a",function(){a(".my-rating a").removeClass("on").removeClass("off")}),a("#sub-theme-box").click(function(){e("theme-upload",!0)}),a(document).on("click","a.author-id-filter",function(){return a("#filter-selection").html('<a href="javascript:;" class="button-secondary2 filter-none">'+wysijatrans.showallthemes+"</a>"),i({author_id:parseInt(a(this).attr("id").replace("author-id-filter",""))}),e("search-view",!0),!1}),a(document).on("click","a.filter-none",function(){return a("#filter-selection").html(""),i(),!1}),a("#wj_paginator").on("click","a",function(){return a("#filter-selection").html(""),a(this).hasClass("selected")?!1:(i({is_premium:"premium"===a(this).data("type")?1:0}),a("#wj_paginator a").removeClass("selected"),a(this).addClass("selected"),!1)}),i()});