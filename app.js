
// Scroll Effect

window.addEventListener('scroll', onScroll, false);

var sectionOne = document.querySelector('#card1');
var sectionTwo = document.querySelector('#card2');
var sectionThree = document.querySelector('#card3');
var sectionFourth = document.querySelector('#card4');

var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];
var SectionThreeHeight = getComputedStyle(sectionThree).height.split('px')[0];
var SectionFourthHeight = getComputedStyle(sectionFourth).height.split('px')[0];

var checkPointOne = parseFloat(SectionOneHeight);
var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);

function onScroll() {
    //get the current scrollbar position
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop
    if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
        removeClass(sectionTwo, sectionThree)
    } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
        addClass(sectionTwo, sectionThree, checkPointTwo)
        removeClass(sectionThree, sectionFourth)
    } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
        addClass(sectionThree, sectionFourth, checkPointThree)
    }

}

function addClass(elemOne, elemTwo, margin) {
    elemOne.classList.add('fixed');
    elemTwo.style.marginTop = (margin) + 'px';
}

function removeClass(elemOne, elemTwo) {
    elemOne.classList.remove('fixed');
    elemTwo.style.marginTop = '0px';
}

// nav button

var nav = document.querySelector("nav");
var toggle = document.querySelector("nav .menu");
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// pushdown button

var btn = document.querySelector(".down");
btn.addEventListener("click", () => {
    sectionTwo.scrollIntoView();
});