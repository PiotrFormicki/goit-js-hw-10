!function(){var t={text1:document.getElementById("text1"),text2:document.getElementById("text2")},e=["If","You","Like","It","Please","Follow","My","GitHub!"],n=e.length-1,l=new Date,o=0,x=.25;function a(){o-=x,x=0;var l=o/1;l>1&&(x=.25,l=1),function(l){t.text2.style.filter="blur(".concat(Math.min(8/l-8,100),"px)"),t.text2.style.opacity="".concat(100*Math.pow(l,.4),"%"),l=1-l,t.text1.style.filter="blur(".concat(Math.min(8/l-8,100),"px)"),t.text1.style.opacity="".concat(100*Math.pow(l,.4),"%"),t.text1.textContent=e[n%e.length],t.text2.textContent=e[(n+1)%e.length]}(l)}t.text1.textContent=e[n%e.length],t.text2.textContent=e[(n+1)%e.length],function e(){requestAnimationFrame(e);var c=new Date,i=x>0,y=(c-l)/1e3;l=c,(x-=y)<=0?(i&&n++,a()):(o=0,t.text2.style.filter="",t.text2.style.opacity="100%",t.text1.style.filter="",t.text1.style.opacity="0%")}()}();
//# sourceMappingURL=index.2e9fd928.js.map
