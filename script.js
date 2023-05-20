let s = 1;
let hamster = 'https://otkritkis.com/wp-content/uploads/2021/12/11998_134036827885.jpg';
let dog = 'https://avatars.dzeninfra.ru/get-zen_doc/42056/pub_62f0e680bcb361250b4c5311_62f0e79ebbe50c4d0fc77e80/scale_1200';
let img = document.getElementById('img')
let button = document.getElementById('button')


function f3(){
    let width = Math.floor(Math.random()*800) + 'px'
    if(s==1){
        img.setAttribute('src', hamster)
        img.setAttribute('width', width)
        s=2
    }

    else if(s==2){
        img.setAttribute('src', dog)
        img.setAttribute('width', width)
        s=1
    }
}
button.onclick = f3;