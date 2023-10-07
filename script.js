var header= document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSideBar = false;

function clickSideBar() {
    showSideBar = !showSideBar;
    if(showSideBar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSideBar';
    }else{
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
    }
}

function closeSideBar(){
    if(showSideBar){
        clickSideBar();
    }
}