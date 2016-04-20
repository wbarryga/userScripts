// ==UserScript==
// @name         LinkedIn tools Beta
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  GUI buttons that add additional functionalities
// @author       You
// @match        https://www.linkedin.com/recruiter/profile/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
function edgeSearch() {
	var profileName = document.querySelectorAll(".profile-info > h1.searchable")[0].textContent;
	var nameHolder = profileName.split(" ");
	var location = document.querySelectorAll(".profile-info span.location > a")[0].textContent;
	function smartLoc() {
		if (location.indexOf(",") != -1) {
			return document.querySelectorAll(".profile-info span.location > a")[0].textContent.split("Area")[0].trim();
		} else {
			return location.split(" ")[1];
		}
	}
	var city = smartLoc();
	var url = "http://edge.careerbuilder.com/search?Names=" + nameHolder[0] +"%20" + nameHolder[1] + "&" + "Location=" + city;
	window.open(url);
}
function salesForce() {
	var name = document.querySelectorAll(".profile-info > h1.searchable")[0].textContent;
	var nameArr = name.split(" ");
	var first = nameArr[0];
	var last = nameArr[1];
	var url1 = "https://na28.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=00P&sen=001&sen=068&sen=a01&sen=003&sen=00T&sen=005&sen=00U&sen=a07&str=" + first + "+" + last;
	window.open(url1);
}
function logger () {
	var name = document.querySelectorAll(".profile-info > h1.searchable")[0].textContent;
	var title = document.querySelector(".title.searchable").textContent;
	var location = document.querySelector(".location.searchable > a").textContent;
	var pubProfBase = "https://www.linkedin.com";
	var uniBase = document.querySelector(".public-profile > a").getAttribute("href");
	var pubProf = pubProfBase + uniBase;
	var currentP = window.location.href;
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var sent = month + "/" + day;
	var urlBuild = "https://docs.google.com/a/livinglakeshore.com/forms/d/11bSB8fG1wDLnXdDbIZmRyamoMe-0BYZ96kNWk-jvryc/viewform?" + "entry.1418490741=" + name + "&" +"entry.1632901593=" + location + "&" + "entry.1205790955=" + title + "&" + "entry.147595872=" + pubProfBase + uniBase ;
	window.open(urlBuild);
}

function employer () {
	var comp = document.querySelector("#profile-experience .position:nth-of-type(1) h5 a").textContent;
	var urlbase = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=";
	var urlBuild = urlbase + comp;
	window.open(urlBuild);
}
//This waits for all the AJAX to stop. It works well with the LinkedIn domain
$(document).ajaxStop(function() {
	$('head').append("<link href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/start/jquery-ui.css' rel='stylesheet' type='text/css'>");
	//Adds button to each skills and uses pulltext function for event handler
	var skillsParent = $(".skills > li");
	skillsParent.prepend("<input type='button' class='skillbutton'></input>");
	for (var i = 1; i < skillsParent.length; i++) {
		$(".skills > li:nth-child(" + i + ")").on("click", pulltext(i));
	}
	//Callback function that adds a unique event handler for each button
	function pulltext(i) {
		return function() {
			var text1 = ($(".skills > li:nth-child(' + i + ')").text());
			var url = "https://en.wikipedia.org/wiki/";
			window.open(url + text1);
		};
	}
	//remove the text "recruiter tools" to make room for the buttons
	$('#recruiter-toolbox > div.module-header > h2').text("");
	//function to add buttons
	$('#recruiter-toolbox > div.module-header > h2').append("<button class='mybutt' id='1button'>Edge</button>");
	$('#recruiter-toolbox > div.module-header > h2').append("<button class='mybutt' id='2button'>Salesforce</button>");
	$('#recruiter-toolbox > div.module-header > h2').append("<button class='mybutt' id='3button'>Log</button>");
	$('#recruiter-toolbox > div.module-header > h2').append("<button class='mybutt' id='4button'>Employer</button>");
	$('.mybutt').button();
	$('.mybutt').css({
		'font-size' : '10px',
		'width': '70px',
		'height' : '20px'
	});
	$('#2button,#3button,#4button').css("float","left");
	//Attach functions to the recruiter tools buttons
	$('#1button').on("click", edgeSearch);
	$('#2button').on("click", salesForce);
	$('#3button').on("click", logger);
	$('#4button').on("click", employer);
	//turn skill buttons to jQuery
	$('.skillbutton').button();
	$('.skillbutton').css("height", "15px");

	//create an iframe for google maps
	var presentEmployer = document.querySelector("#profile-experience > div.module-body > ul > li:nth-child(1) > div > h5 > a").textContent;
	$('#profile-experience > div.module-body > ul > li:nth-child(1) > div').append("<iframe width='600' height='450'frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/search?key=AIzaSyDa1MdnxPwUXg8HVIa4Fywci0uOaV0hwRY&q=" + presentEmployer + "'</iframe>");
});