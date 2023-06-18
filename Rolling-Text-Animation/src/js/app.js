let animationInEffect = "flipInX"; //trackingInExpand, trackingInExpandFwd, trackingInExpandFwdTop, trackingInExpandFwdBottom, trackingInContract, trackingInContractBck, trackingInContractBckTop, trackingInContractBckBottom, textFocusIn, bounceIn, fadeInDown, flipInX, zoomIn
let animationOutEffect = "flipOutX"; //trackingOutContract, trackingOutContractBck, trackingOutContractBckTop, trackingOutContractBckBottom, trackingOutExpand, trackingOutExpandFwd, trackingOutExpandFwdTop, trackingOutExpandFwdBottom, textBlurOut, bounceOut, fadeOutDown, flipOutX, zoomOut

let animationDuration = 2000;

let animationInSync = false;
let animationInShuffle = false; //Note: this will not work if animationSync is ON
let animationInReverse = false; //Note: this will not work if animationSync is ON

let animationOutSync = false;
let animationOutShuffle = false; //Note: this will not work if animationSync is ON
let animationOutReverse = true; //Note: this will not work if animationSync is ON

$('.rta-text-animation').textillate({ 
    selector: '.texts',
    loop: true,
    minDisplayTime: animationDuration,
    in: { 
        effect: animationInEffect, 
        sync: animationInSync, 
        shuffle: animationInShuffle, 
        reverse: animationInReverse 
    },
    out: { 
        effect: animationOutEffect, 
        sync: animationOutSync, 
        shuffle: animationOutShuffle, 
        reverse: animationOutReverse 
    }
});

setTimeout(function() {
    $('.rta-text-animation').show();
}, 100);