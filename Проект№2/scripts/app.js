// Import
import { dataForFirstBoxBtn } from "./data.js";
import { dataForSecondBox } from "./data.js";
import { dataForThirdBox } from "./data.js";
import { dataForFourthBox } from "./data.js";
import { dataForFifthBoxImg } from "./data.js";
import { dataForSixthBox } from "./data.js";
import { dataForPage2 } from "./data.js";
import { dataForPage3 } from "./data.js";
import { dataForPage4 } from "./data.js";
import { dataForPage5 } from "./data.js";

// First box

let getBtnFromFirstBox = document.getElementById("buttons_container");
dataForFirstBoxBtn.forEach(function(e){
    
    let createBtnInFirstBox = document.createElement('button');
    getBtnFromFirstBox.appendChild(createBtnInFirstBox);
    
    let createImgInBtn = document.createElement('img');
    createImgInBtn.src = e.img;
    createBtnInFirstBox.appendChild(createImgInBtn);

    let createPInBtn = document.createElement('p');
    createPInBtn.textContent = e.p;
    createBtnInFirstBox.appendChild(createPInBtn);
});

// second Box

let getSecondBox = document.getElementById('imgForsecondBox');
dataForSecondBox.forEach(function(e){

    let createStore = document.createElement('div');
    createStore.id = 'store';
    getSecondBox.appendChild(createStore);

    let createImgInStore = document.createElement('img');
    createImgInStore.src = e.img;
    createStore.appendChild(createImgInStore);

    let createPInStore = document.createElement('p');
    createPInStore.textContent = e.p;
    createStore.appendChild(createPInStore);

    let createBtnInStore = document.createElement('button');
    createBtnInStore.textContent = e.btn;
    createStore.appendChild(createBtnInStore);
});

// Third Box

let getThirdBox = document.getElementById('ulInThirdBox');
dataForThirdBox.forEach(function(e){

    let createLiInThirdBox = document.createElement('li');
    getThirdBox.appendChild(createLiInThirdBox);

    let createImgInThirdBox = document.createElement('img');
    createImgInThirdBox.src = e.img;
    createLiInThirdBox.appendChild(createImgInThirdBox);

    let createH3InThirdBox = document.createElement('h3');
    createH3InThirdBox.textContent = e.h3;
    createLiInThirdBox.appendChild(createH3InThirdBox);

    let createP1 = document.createElement('p');
    createP1.textContent = e.p1;
    createLiInThirdBox.appendChild(createP1);
    
    let createP2 = document.createElement('p');
    createP2.textContent = e.p2;
    createLiInThirdBox.appendChild(createP2);

    let createP3 = document.createElement("p");
    createP3.textContent = e.p3;
    createLiInThirdBox.appendChild(createP3);

});

// fourth box

let getFourthBox = document.getElementById('info');
console.log(getFourthBox);

dataForFourthBox.forEach(function(e){
    let createPInFourBox = document.createElement('p');
    createPInFourBox.textContent = e.p;
    getFourthBox.appendChild(createPInFourBox);
    
});

let createBtnInFourBox = document.createElement('button');
createBtnInFourBox.textContent = "УЗНАТЬ БОЛЬШЕ";
getFourthBox.appendChild(createBtnInFourBox);

// Fifth box

let getnews = document.getElementById('news_block')
dataForFifthBoxImg.forEach(function(e){
    
    let createdivNews = document.createElement('div')
    createdivNews.id = 'news'
    getnews.appendChild(createdivNews)

    let createImgInNews = document.createElement('img')
    createImgInNews.src = e.img
    createdivNews.appendChild(createImgInNews)

    let createTextNews = document.createElement('div')
    createTextNews.id = 'textFornews'
    createdivNews.appendChild(createTextNews)

    let createPInNews = document.createElement('p')
    createPInNews.textContent = e.p
    createTextNews.appendChild(createPInNews)

    let createH3InNews = document.createElement('h3')
    createH3InNews.textContent = e.h3
    createTextNews.appendChild(createH3InNews)

})


// Sixth Box

let getSixthBox = document.getElementById('Sixthbox');


dataForSixthBox.forEach(function(e){
    
    let createImgInSixthBox = document.createElement('img');
    createImgInSixthBox.src = e.img;
    getSixthBox.appendChild(createImgInSixthBox);

});

// footer

let getPage2 = document.getElementById('page2');
let getPage3 = document.getElementById('page3');
let getPage4 = document.getElementById('page4');
let getPage5 = document.getElementById('page5');
let getPage6 = document.getElementById('page6');

dataForPage2.forEach(function(e){
    let createLiInFooter = document.createElement('li')
    createLiInFooter.textContent = e.li
    getPage2.appendChild(createLiInFooter)
})

dataForPage3.forEach(function(e){
    let createLiInFooter = document.createElement('li')
    createLiInFooter.textContent = e.li
    getPage3.appendChild(createLiInFooter)
})

dataForPage4.forEach(function(e){
    let createLiInFooter = document.createElement('li')
    createLiInFooter.textContent = e.li
    getPage4.appendChild(createLiInFooter)
})

dataForPage5.forEach(function(e){
    let createLiInFooter = document.createElement('li')
    createLiInFooter.textContent = e.li
    getPage5.appendChild(createLiInFooter)
})