window.onload=function (){
// 购物车选择项
let right_right=document.getElementsByClassName("right_right")[0];
let cart_hide=document.getElementsByClassName("cart_hide")[0];
    right_right.onmouseenter=function () {

        cart_hide.style.height="97px";
        cart_hide.style.boxShadow="0 6px 15px 2px rgba(0,0,0,0.1)";
    }
    right_right.onmouseleave=function () {
        cart_hide.style.height="0";
        cart_hide.style.boxShadow="none";
    }
//导航左边选择项
    let aside_hide=document.getElementsByClassName("aside_hide");
    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByClassName("lis");
        for (let i=0;i<lis.length;i++){
            lis[i].onmouseenter=function () {
                aside_hide[i].style.display="block";
            }
            lis[i].onmouseleave=function () {
                aside_hide[i].style.display="none";
            }
        }
//家电选项卡
        let household=document.getElementsByClassName("household")[0];
        let more=household.getElementsByClassName("more")[0];
        let lists=more.getElementsByTagName("span");
        let house_hide=household.getElementsByClassName("house_hide");
        // console.log(household, more, lists,house_hide);
        for(let i=0;i<lists.length;i++){
            lists[i].onmouseenter=function () {
                for (let j=0;j<lists.length;j++){
                    house_hide[j].style.zIndex="5";
                }
                house_hide[i].style.zIndex="10";
            }
        }
    let household1=document.getElementsByClassName("household")[1];
    let more1=household1.getElementsByClassName("more")[0];
    let lists1=more1.getElementsByTagName("span");
    console.log(household1,more1,lists1);
    let house_hide1=household1.getElementsByClassName("house_hide");
    for(let i=0;i<lists1.length;i++){
        lists1[i].onmouseenter=function () {
            for (let j=0;j<lists1.length;j++){
                house_hide1[j].style.zIndex="5";
            }
            house_hide1[i].style.zIndex="10";
        }
    }
    let household2=document.getElementsByClassName("household")[2];
    let more2=household2.getElementsByClassName("more")[0];
    let lists2=more2.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide2=household2.getElementsByClassName("house_hide");
    for(let i=0;i<lists2.length;i++){
        lists2[i].onmouseenter=function () {
            for (let j=0;j<lists2.length;j++){
                house_hide2[j].style.zIndex="5";
            }
            house_hide2[i].style.zIndex="10";
        }
    }
    let household3=document.getElementsByClassName("household")[3];
    let more3=household3.getElementsByClassName("more")[0];
    let lists3=more3.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide3=household3.getElementsByClassName("house_hide");
    for(let i=0;i<lists3.length;i++){
        lists3[i].onmouseenter=function () {
            for (let j=0;j<lists3.length;j++){
                house_hide3[j].style.zIndex="5";
            }
            house_hide3[i].style.zIndex="10";
        }
    }
    let household4=document.getElementsByClassName("household")[4];
    let more4=household4.getElementsByClassName("more")[0];
    let lists4=more4.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide4=household4.getElementsByClassName("house_hide");
    for(let i=0;i<lists4.length;i++){
        lists4[i].onmouseenter=function () {
            for (let j=0;j<lists4.length;j++){
                house_hide4[j].style.zIndex="5";
            }
            house_hide4[i].style.zIndex="10";
        }
    }
//////////////////////////////////////轮播图1///////////////////////////////////////////
    let banner=document.getElementsByClassName("banner")[0];
    let imgBox=banner.getElementsByClassName("imgBox")[0];
    let imgli=imgBox.getElementsByTagName("li");
    // console.log(banner, imgBox, lises);
    let circleBtn=banner.getElementsByClassName("circleBtn")[0];
    let circle=circleBtn.getElementsByTagName("div");
    console.log(circleBtn, circle);
    let leftBtn=document.getElementsByClassName("leftBtn")[0];
    let rightBtn=document.getElementsByClassName("rightBtn")[0];
    // console.log(leftBtn, rightBtn);
    let num=0;
    //1：给大的屏幕加入自我的移动
    let t=setInterval(move,1000);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,1000);
    }
    //2：给大的屏幕加入自我的移动所用函数
    //向右
    function move() {
        num++;
        if(num==imgli.length){
            num=0;
        }
        for(let i=0;i<imgli.length;i++){
            imgli[i].style.zIndex="5";
            circle[i].className="";
        }
        imgli[num].style.zIndex="10";
        circle[num].className="change";

    }
    //向左
    function movel() {
        num--;
        if(num<0){
            num=imgli.length-1;
        }
        for(let i=0;i<imgli.length;i++){
            imgli[i].style.zIndex="5";
            circle[i].className="";
        }
        imgli[num].style.zIndex="10";
        circle[num].className="change";
    }
    //左右按钮调用左右移动函数
    rightBtn.onclick=function(){
        move();
    }
    leftBtn.onclick=function(){
        movel();
    }
    //左右按钮
    // 五个圆点点击后转换图片
    for (let i=0;i<circle.length;i++){
        circle[i].onclick=function () {
               for(let j=0;j<imgli.length;j++){
            imgli[j].style.zIndex="5";
            circle[j].className="";
        }
            imgli[i].style.zIndex="10";
            circle[i].className="change";
             num=i;
        }
    }
    let recom=document.getElementsByClassName("recom")[0];
    let right=recom.getElementsByClassName("right")[0];
    let right_left=right.getElementsByClassName("right_left")[0];
    let right_right1=right.getElementsByClassName(" right_right")[0];
    // console.log(right_right1, right_left, right, recom);

}