const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval (()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})


window.onload = function() {

    var myDate; 
    var year;
    var month; 
    var date;
    var day; 
    var hour; 
    var minutes;
    var seconds;
    var ampm;
    var myDay = ["일", "월", "화", "수", "목", "금", "토"]; // 배열 생성

    // 사용자 정의 함수 myTime 선언

    var myTime = function() {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var day = myDate.getDay();
        var hour = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();

        if(hour < 13) {
            ampm = "AM"
        } else {
            ampm = "PM"
        }
        if(hour < 10) {
            hour = "0" + hour;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("text1").innerText = year + "년 " + month + "월 " + date + "일 " + myDay[day] + "요일 ";
        document.getElementById("text2").innerText = "[" +ampm + ". " + hour + " : " + minutes + " : " + seconds + "]";

    }

    // 반복하여 시간정보 갱신 ------------------------------------------

    setInterval(function() {
       // 함수 호출
       myTime();
    }, 1000);

    // 함수 호출
    myTime();

}

