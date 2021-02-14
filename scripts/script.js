function test(){
    var link = "https://www.shop-buster.de/artikel/breitling-herrenuhr-avenger-automatic-gmt-45-a32395101c1a1";
    var openedPage = window.open("https://jakobev.github.io/","", "width=0,height=0,resizable=0");
    openedPage.blur();
    window.focus();
    openedPage.test = function(){
        openedPage.blur();
       setTimeout(x =>{
           console.log("HI");
           openedPage.close();
       },5000);
    }
    openedPage.test();
    
}

function closeTab(){
    if(openedPage.document.readyState === "complete"){
        openedPage.close();
    }
}

function sleep(millisekunden) {
return new Promise(resolve => setTimeout(resolve, millisekunden)).then(x =>{
console.log("sleep");
});
}

function prepareFrame(url) {
var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", url);
ifrm.style.width = "640px";
ifrm.style.height = "480px";
document.body.appendChild(ifrm);
}