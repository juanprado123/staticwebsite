rainAnimation();
dropAnimation();


function rainAnimation() {
    TweenLite.to($("#nuke"), 3, {x:15, y: 700,rotationY: 180, alpha:.01, onComplete:returnToNormal, onCompleteParams: [$("#nuke")]});
}
 
function returnToNormal(obj) {
    if(obj){
    TweenLite.to(obj, 3, { rotationY: 1080});
 }
}

function dropAnimation() {
    TweenLite.to($("#drop"), 3, {x:15, y: 700,rotationY: 180, alpha:.01, onComplete:returnToNormal, onCompleteParams: [$("#drop")]});
}
 
function returnBackNormal(dro) {
    if(dro){
    TweenLite.to(dro, 3, { rotationY: 1080});
 }
}

animation();

function animation() {
    var x = event.clientX;
    var y = event.clientY;
    TweenLite.to($("#dot"), 1, {
        x: x,
        y: y,
        rotationX: 180,
        rotationY: 180,
        alpha: 3,
        onComplete: returnToNormal,
        onCompleteParams: [$("#dot")]
    });
}

function returnToNormal(dat) {
    if (dat) {
        TweenLite.to(dat, 3, {
            rotationY: 720
        });
    }
}