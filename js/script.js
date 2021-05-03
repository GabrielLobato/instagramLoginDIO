let i;

function darkMode() {
    if (i == undefined || i == 0) {
        var gp = document.querySelector('div.group', 'div.group:nth-child(2)');
        var gp2 = document.querySelector('div.group:nth-child(2)');
        var app1 = document.querySelector('a.appDownload:nth-child(1)');
        var app2 = document.querySelector('a.appDownload:nth-child(2)');
        document.getElementById("switch").src = "img/switchDark.png";
        document.getElementById("phone").src = "img/instaCelBlack2.png";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector('img.instagramLogo').src = "img/instaLogo2.png";
        gp.style.backgroundColor = "black";
        gp.style.border = "1px solid white";
        gp2.style.backgroundColor = "black";
        document.querySelector('a.instagramLogout').style.color = "white";
        app1.style.backgroundImage = "url(img/appleBtnW.png)";
        app2.style.backgroundImage = "url(img/googleBtnW.png)";
        i = 1
    }
    else if (i == 1) {
        var gp = document.querySelector('div.group');
        var gp2 = document.querySelector('div.group:nth-child(2)');
        var app1 = document.querySelector('a.appDownload:nth-child(1)');
        var app2 = document.querySelector('a.appDownload:nth-child(2)');
        document.getElementById("switch").src = "img/switchLight.png";
        document.getElementById("phone").src = "img/instaCelWhite2.png";
        document.body.style.backgroundColor = "rgb(243, 243, 243)";
        document.body.style.color = "black";
        document.querySelector('img.instagramLogo').src = "img/instaLogo.png";
        gp.style.backgroundColor = "white";
        gp.style.border = "1px solid lightgray";
        gp2.style.backgroundColor = "white";
        document.querySelector('a.instagramLogout').style.color = "#0095f6";
        app1.style.backgroundImage = "url(img/appleBtnB.png)";
        app2.style.backgroundImage = "url(img/googleBtnB.png)";
        i = 0;
    }

}
