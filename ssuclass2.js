// ==UserScript==
// @name         ssuclass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://myclass.ssu.ac.kr/course/*
// @match        http://myclass.ssu.ac.kr/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    $(document).ready(function (){
    document.getElementsByClassName("btn btn-person")[0].style.backgroundColor ="gray";
    document.getElementsByClassName("container-fluid")[0].style.backgroundColor ="black";
    document.getElementsByClassName("navbar-brand")[0].style.backgroundColor ="black";
    var classgayou=document.querySelectorAll('.activity.ubboard.modtype_ubboard >div>div>div>div>a>img.activityicon')
    classgayou[0].src="https://github.com/rlarlgnszx/SSUCustom/blob/main/ubboard_notice.png?raw=true"
    classgayou[1].src="https://github.com/rlarlgnszx/SSUCustom/blob/main/ubboard_qna.png?raw=true";
    classgayou[2].src="https://github.com/rlarlgnszx/SSUCustom/blob/main/ubboard.png?raw=true";
    classgayou[3].src="https://github.com/rlarlgnszx/SSUCustom/blob/main/ubboard.png?raw=true";
    //https://github.com/rlarlgnszx/SSUCustom/blob/main/ubboard_notice.png?raw=true
    $('.activity.xncommons.modtype_xncommons >div>div>div>div>a>img.activityicon').attr("src","https://github.com/rlarlgnszx/SSUCustom/blob/main/icon%20copy.png?raw=true");
    $('.activity.url.modtype_url >div>div>div>div>a>img.activityicon').attr("src","https://github.com/rlarlgnszx/SSUCustom/blob/main/icon%20(1).png?raw=true");
    $('.name_text1 p').css("backgroundColor","#161a1cc4");
    $('.format-ubsweeks .user_attendance .user_attendance_table .attendance .name_text1').css('color',"#555").css("backgroundColor","#161a1cc4");
    $('.format-ubsweeks .course-content h2.main, .format-ubsweeks .course-content .section-title-one').css("backgroundColor","#161a1cc4").css("color","white");
    $('h2.main').css("marginLeft","0px").css("padding","29px 22px 28px").css("marginRight","0px").css("borderRadius","16px 16px 0px 0px").css("background","linear-gradient(88deg, black,#505050)").css("fontSize","20px");;
    $('.course_box.course_box0').css("borderRadius","16px");
    $('.weeks ubsweeks').css("borderRadius","16px");
    $('.total_sections').css("borderRadius","16px");
    $('.course_box').css("borderRadius","16px");
    $('.sectionname').css("color","#533e3e");//.format-ubsweeks .course-content ul.ubsweeks li.section .sectionname, .format-ubsweeks .course-content ul.ubsweeks .section-summary .section-title, .format-ubsweeks .course-content ul.ubsweeks li.section .sectionname a, .format-ubsweeks .course-content ul.ubsweeks .section-summary .section-title a
    $('.format-ubsweeks .course-content ul.ubsweeks li#section-0 ul.section li.activity .instancename').css("fontSize","18px");
    $('.format-ubsweeks .course-content ul.ubsweeks li.section .sectionname, .format-ubsweeks .course-content ul.ubsweeks .section-summary .section-title, .format-ubsweeks .course-content ul.ubsweeks li.section .sectionname a, .format-ubsweeks .course-content ul.ubsweeks .section-summary .section-title a').css("fontSize","22px");
    $('body').css('fontSize','15px');
    $('.activity.quiz.modtype_quiz >div>div>div>div>a>img.activityicon').attr("src","https://github.com/rlarlgnszx/SSUCustom/blob/main/icon%20(2).png?raw=true");
    $('.activity.assign.modtype_assign >div>div>div>div>a>img.activityicon').attr("src","https://github.com/rlarlgnszx/SSUCustom/blob/main/icon%20(3).png?raw=true");
    $('.dimmed_text > img.activityicon').attr("src","https://github.com/rlarlgnszx/SSUCustom/blob/main/icon%202.png?raw=true");
    });
})();