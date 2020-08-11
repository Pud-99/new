let sologan = document.getElementById("sologan");
let about = document.getElementById("about");

let panel = document.getElementById('panel')
let panelcontent = document.getElementById('panelcontent');
let dlbtn = document.getElementById('dlbtn');
let nlbtn = document.getElementById('nlbtn');
let daylife = document.getElementById('daylife');
let procontent = document.getElementById('product');


// localStorage.setItem('daylife', 'night')
let daylifecontent = localStorage.getItem('daylife');
if (daylifecontent == "night") {
    let content4 = `<div class="layout-pro" id='night'></div>
    <div class="panel" id='panel'>
        <div class="panel-icon"><i class="fas fa-cog"></i></div>
        <div class="panel-content" id='panelcontent'>
            <div class="panel-main-content">Navigation Life</div>
            <div class="panel-button">
                <button class="nightlife-btn" id='dlbtn'>Day Life</button>
                <button class="daylife-btn" id='nlbtn'>Night Life</button>
            </div>
        </div>
    </div>
    <div class="content4-text">
        <div class="content4-headertext" id='headernight'>Hello There,</div>
        <div class="content4-middletext" id='middlenight'>We're just two lost Souls swimming in a Fish Bowl & Winning Design Awards
        </div>
        <div class="content4-bottomtext"id='bottomnight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, et, praesentium? Odit perferendis error natus cum, laudantium ea!</div>
    </div>
    <div class="product-daylife" id="daylife">
        <div class="parallax-window rowimgnight" id='pic1' data-parallax="scroll" data-z-index="1" data-image-src="./anh/3.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont1">
                <div class="desgin-pro">Design by / Puha</div>
                <div class="content-main-pro">One night bar 1980s</div>
                <div class="more-info" id="info_1">One night at hero bar in 1980s where all ladies and gentelmen having crazy night</div>
                <button class="btn-info"  id="show_1">More Info</button>
            </span>
        </div>
        <div class="parallax-window colingnight" id='pic2' data-parallax="scroll" data-z-index="1" data-image-src="./anh/5.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont2">
                    <div class="desgin-pro">Design by / Puha</div>
                    <div class="content-main-pro">One night bar 1980s</div>
                    <div class="more-info" id="info_2">One night at hero bar in 1980s where all ladies and gentelmen having crazy night</div>
                    <button class="btn-info" id="show_2" >More Info</button>
                </span></div>
        <div class="parallax-window colingnight" id='pic3' data-parallax="scroll" data-z-index="1" data-image-src="./anh/2.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont3">
                    <div class="desgin-pro">Design by / Puha</div>
                    <div class="content-main-pro">One night bar 1980s</div>
                    <div class="more-info" id="info_3">One night at hero bar in 1980s where all ladies and gentelmen having crazy night</div>
                    <button class="btn-info"  id="show_3" >More Info</button>
                </span></div>
        <div class="parallax-window rowimgnight" id='pic4' data-parallax="scroll" data-z-index="1" data-image-src="./anh/1.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont4">
                    <div class="desgin-pro">Design by / Puha</div>
                    <div class="content-main-pro">One night bar 1980s</div>
                    <div class="more-info" id="info_4">One night at hero bar in 1980s where all ladies and gentelmen having crazy night</div>
                    <button class="btn-info"  id="show_4">More Info</button>
                </span>
        </div>
    </div>
    <button class="btnviewnight" >View All >></button>`;


    procontent.innerHTML = content4;
    panel = document.getElementById('panel');
    dlbtn = document.getElementById('dlbtn');
    nlbtn = document.getElementById('nlbtn');
    nlbtn.addEventListener("click", function () {
        // nlbtn.style.backgroundColor = '#333';
        // nlbtn.style.color = '#fff';
        // nlbtn.style.border = '4px solid #333'
        // dlbtn.style.backgroundColor = "#fff";
        // dlbtn.style.border = '4px solid #dedede';
        // dlbtn.style.color = '#333';
        localStorage.setItem('daylife', 'night');
        window.location.reload();
    });
    dlbtn.addEventListener("click", function () {
        // dlbtn.style.backgroundColor = '#333';
        // dlbtn.style.color = '#fff';
        // dlbtn.style.border = '4px solid #333';
        // nlbtn.style.backgroundColor = "#fff";
        // nlbtn.style.border = '4px solid #dedede';
        // nlbtn.style.color = '#333';
        localStorage.setItem('daylife', 'day');
        window.location.reload();
    });
} else if (daylifecontent == "day") {
    let content4 = `<div class="layout-pro" id='day'></div>
    <div class="panel" id='panel'>
        <div class="panel-icon"><i class="fas fa-cog"></i></div>
        <div class="panel-content" id='panelcontent'>
            <div class="panel-main-content">Navigation Life</div>
            <div class="panel-button">
                <button class="daylife-btn" id='dlbtn'>Day Life</button>
                <button class="nightlife-btn" id='nlbtn'>Night Life</button>
            </div>
        </div>
    </div>
    <div class="content4-text">
        <div class="content4-headertext">Hello There,</div>
        <div class="content4-middletext">We're just two lost Souls swimming in a Fish Bowl & Winning Design Awards
        </div>
        <div class="content4-bottomtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, et,
            praesentium? Odit perferendis error natus cum, laudantium ea!</div>
    </div>
    <div class="product-daylife" id="daylife">
        <div class="parallax-window rowimg" id='pic1' data-parallax="scroll" data-z-index="1"
            data-image-src="./anh/1.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont1">
                <div class="desgin-pro">Design by / Puha</div>
                <div class="content-main-pro">One night bar 1980s</div>
                <div class="more-info" id="info_1">One night at hero bar in 1980s where all ladies and gentelmen
                    having crazy night</div>
                <button class="btn-info" id="show_1">More Info</button>
            </span>
        </div>
        <div class="parallax-window coling" id='pic2' data-parallax="scroll" data-z-index="1"
            data-image-src="./anh/2.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont2">
                <div class="desgin-pro">Design by / Puha</div>
                <div class="content-main-pro">One night bar 1980s</div>
                <div class="more-info" id="info_2">One night at hero bar in 1980s where all ladies and gentelmen
                    having crazy night</div>
                <button class="btn-info" id="show_2">More Info</button>
            </span></div>
        <div class="parallax-window coling" id='pic3' data-parallax="scroll" data-z-index="1"
            data-image-src="./anh/5.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont3">
                <div class="desgin-pro">Design by / Puha</div>
                <div class="content-main-pro">One night bar 1980s</div>
                <div class="more-info" id="info_3">One night at hero bar in 1980s where all ladies and gentelmen
                    having crazy night</div>
                <button class="btn-info" id="show_3">More Info</button>
            </span></div>
        <div class="parallax-window rowimg" id='pic4' data-parallax="scroll" data-z-index="1"
            data-image-src="./anh/3.jpg">
            <span class="pro-content" style="z-index: 9999;" id="procont4">
                <div class="desgin-pro">Design by / Puha</div>
                <div class="content-main-pro">One night bar 1980s</div>
                <div class="more-info" id="info_4">One night at hero bar in 1980s where all ladies and gentelmen
                    having crazy night</div>
                <button class="btn-info" id="show_4">More Info</button>
            </span>
        </div>
    </div>
    <button class="btn-viewall">View All >></button>`;

    procontent.innerHTML = content4;
    panel = document.getElementById('panel');
    dlbtn = document.getElementById('dlbtn');
    nlbtn = document.getElementById('nlbtn');
    nlbtn.addEventListener("click", function () {
        // nlbtn.style.backgroundColor = '#333';
        // nlbtn.style.color = '#fff';
        // nlbtn.style.border = '4px solid #333'
        // dlbtn.style.backgroundColor = "#fff";
        // dlbtn.style.border = '4px solid #dedede';
        // dlbtn.style.color = '#333';
        localStorage.setItem('daylife', 'night');
        window.location.reload();
    });
    dlbtn.addEventListener("click", function () {
        // dlbtn.style.backgroundColor = '#333';
        // dlbtn.style.color = '#fff';
        // dlbtn.style.border = '4px solid #333';
        // nlbtn.style.backgroundColor = "#fff";
        // nlbtn.style.border = '4px solid #dedede';
        // nlbtn.style.color = '#333';
        localStorage.setItem('daylife', 'day');
        window.location.reload();
    });
}

function panelover() {
    panel.style.animation = "panelmove .5s ease-in-out";
    panel.style.left = " 76vw";
}
function panelout() {
    panel.style.animation = "panelout .5s ease-in-out"
    panel.style.left = "96vw";
}
panel.addEventListener('mouseover', () => {
    panelover();
    
})
panel.onmouseout = function () {
    panelout();
}





let layoutleft = document.getElementById('layoutleft');
let layoutright = document.getElementById('layoutright');
let preleft = document.getElementById('preleft');
let preright = document.getElementById('preright');
let preloading = document.getElementById('preloading');



window.onload = function () {
    preload();
    function preload() {
        preleft.style.animation = 'preloadleft 1s ease-in-out';
        preright.style.animation = 'preloadright 1s ease-in-out';
        preleft.style.height = '100vh';
        preright.style.height = '100vh';
        setTimeout(function () {
            preleft.style.animation = 'premoveleft .5s ease-in-out';
            preright.style.animation = 'premoveright .5s ease-in-out';
            layoutleft.style.animation = 'layoutleft .5s ease-in-out';
            layoutright.style.animation = 'layoutright .5s ease-in-out';
        }, 1000);
        setTimeout(function () {
            preloading.style.display = 'none';
        }, 1500);
    };
    showup();
    function showup() {
        setTimeout(function () {
            sologan.style.display = "block";
            about.style.opacity = "1";
        }, 800)
    }

    let dbpic = document.getElementById("bdpic")
    let abpic = document.getElementById("abpic")
    let share = document.getElementById("share")
    let rdText = document.getElementById("rdText")
    let abText = document.getElementById("abText")
    let am2 = document.getElementById("am2");
    let spAnimate1 = document.getElementById("spAnimate1")
    let spAnimate2 = document.getElementById("spAnimate2")
    let spAnimate3 = document.getElementById("spAnimate3")
    let spAnimate4 = document.getElementById("spAnimate4")
    let spAnimate5 = document.getElementById("spAnimate5")
    let spAnimate6 = document.getElementById("spAnimate6")
    let procont1 = document.getElementById('procont1');
    let procont2 = document.getElementById('procont2');
    let procont3 = document.getElementById('procont3');
    let procont4 = document.getElementById('procont4');
    window.addEventListener("scroll", function () {
        let x = pageYOffset;
        if (x > 400 && x < 1300) {
            am2.style.animation = "longbottom 1s ease-in-out";
            setTimeout(function () {
                bdpic.style.animation = "border-pic 1s ease-in-out";
                abpic.style.animation = "ab-pic 1s ease-in-out"
                rdText.style.animation = "random-text 1s ease-in-out ";
                share.style.animation = "share 1s ease-in-out";
            }, 0)
            setTimeout(function () {
                bdpic.style.display = 'block';
                abpic.style.display = 'block';
                abText.style.display = 'block';
                share.style.display = 'block';
                rdText.style.display = 'block';
            }, 200);
            setTimeout(function () {
                am2.style.width = "14vw";
            }, 900)
        }
        let y = pageYOffset
        if (y > 1100 && y < 2300) {
            spAnimate1.style.animation = 'sp-animate1 1s ease-in-out';
            spAnimate2.style.animationDelay = '1s';
            spAnimate2.style.animation = 'sp-animate2 1s ease-in-out';
            spAnimate3.style.animation = 'sp-animate1 1s ease-in-out';
            spAnimate4.style.animationDelay = '1s';
            spAnimate4.style.animation = 'sp-animate2 1s ease-in-out';
            spAnimate5.style.animation = 'sp-animate1 1s ease-in-out';
            spAnimate6.style.animationDelay = '1s';
            spAnimate6.style.animation = 'sp-animate2 1s ease-in-out';
            setTimeout(function () {
                spAnimate1.style.width = '4vw';
                spAnimate1.style.top = '-4vh';
                spAnimate1.style.right = '0vw';
                spAnimate2.style.display = 'block'
                spAnimate4.style.display = 'block'
                spAnimate6.style.display = 'block'
                spAnimate3.style.width = '4vw';
                spAnimate3.style.top = '-4vh';
                spAnimate3.style.right = '0vw';
                spAnimate5.style.width = '4vw';
                spAnimate5.style.top = '-4vh';
                spAnimate5.style.right = '0vw';
            }, 900)
        }
        let z = pageYOffset;
        if (z >= 2300 && z < 3000) {
            procont1.style.animation = 'procont1 1s ease-in-out';
            procont1.style.left = '52vw';
        } else if (z >= 3000 && z <= 3500) {
            procont2.style.animation = 'procont2 1s ease-in-out';
            procont2.style.right = '32vw';
        } else if (z >= 3800 && z < 4800) {
            procont3.style.animation = 'procont3 1s ease-in-out';
            procont3.style.left = '42vw';
        } else if (z >= 4800 && z < 5200) {
            procont4.style.animation = 'procont4 1s ease-in-out';
            procont4.style.right = '32vw';
        }
    })
};

function show(a) {
    document.getElementById(`info_${a}`).style.display = 'block';
    document.getElementById(`info_${a}`).style.animation = 'sp-animate2 .5s ease-in-out';
    document.getElementById(`show_${a}`).style.display = 'none';
}

for (let i = 1; i < 5; i++) {
    document.getElementById(`show_${i}`).addEventListener("click", () => show(i));
}

var mySwiper = new Swiper('.swiper-container', {
    // Các Parameters
    loop: true,

    // Nếu cần pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Nếu cần navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Nếu cần scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
