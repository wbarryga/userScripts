// ==UserScript==
// @name         CB Vanilla Tools Beta
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  GUI buttons that add additional functionalities
// @author       You
// @match        http://employer.careerbuilder.com/jobposter/resumes/ResumeDetails*
// @match        http://employer.careerbuilder.com/jobposter/resumes/resumedetails*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @grant        none
// ==/UserScript==


//Establish framework for UI
// reference http://www.jquerybyexample.net/2011/12/jquery-plugin-for-uppercase-lowercase.html for capitalization plugin
$('head').ready(function() {
	var cssCDN = "<link href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/start/jquery-ui.css' rel='stylesheet' type='text/css'>";
	//Inject jQuery UI style sheet
	$(cssCDN).addClass('userscriptframe').appendTo('head');
},true);

//Define button maker function
function buttonMake(text, css, id) {
	return $("<button class=addon>" + text + "</button>").attr('id', id).addClass("mybuttons").appendTo(css);
}
//make a div container for the buttons

//define target for buttons
var target = "#pnlOuterWrapper";
buttonMake("Salesforce Search", target, "searchbutton");
buttonMake("Log", target, "googlelog");
buttonMake("Upload to SF", target, "upload");
buttonMake("Edge Search", target, "edgesearch");
//turn them into jQuery buttons
$('.mybuttons').button();
//assign function to buttons

//CSS styling for the buttons
var cssButtons = {
    position: "fixed",
    right: "0",
    width: "200px"
};
$('.mybuttons').css(cssButtons);
$('#searchbutton').css("top", "0px");
$('#googlelog').css("top","40px");
$('#upload').css("top", "80px");
$('#edgesearch').css("top", "120px");
//function to search for candidate name in SalesForce
function salesSearch() {
	var fullName = $("#personalinfo > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > div").text().trim().split(" ");
	var fName = fullName[0];
	var lName = fullName[1];
	var salesURL = "https://na28.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=00P&sen=001&sen=068&sen=a01&sen=003&sen=a0t&sen=00T&sen=005&sen=00U&sen=a07&sen=a0g&sen=a0J&str=" + fName + "%20" + lName;
	window.open(salesURL);
}
$("#searchbutton").on("click", salesSearch);

//function to log the candidates info into a google form
function logger() {
	var fullName = $("#personalinfo > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > div").text().trim();
	var title = $("#header").text().trim();
	//uses the Phone column to find the phone number... genius!
	var phone = $("td.lbl.right:contains('Phone:') + td").text().trim();
	var email = $("#EmailLink").text().trim();
	var location = $("td.lbl.right:contains('Location:') + td").text().trim();
	var lastMod = $("td.lbl.right:contains('Last Modified:') + td").text().trim();
	var lastAct = $("td.lbl.right:contains('Last Activity:') + td").text().trim();
	var candURL = window.location.href;
	var googleformbase = "https://docs.google.com/a/livinglakeshore.com/forms/d/11bSB8fG1wDLnXdDbIZmRyamoMe-0BYZ96kNWk-jvryc/viewform?";
	var fullNameForm = "entry.1418490741=" + fullName;
	var titleForm = "&entry.1205790955=" + title;
	var phoneForm = "&entry.1505936503=" + phone;
	var emailForm = "&entry.1509848133=" + email;
	var locationForm = "&entry.1632901593=" + location;
	var lastModForm = "&entry.1577912542=" + lastMod;
	var lastActForm = "&entry.795025569=" + lastAct;
	var candURLForm = "&entry.147595872=" + candURL;
	window.open(googleformbase + "entry.1418490741=" + fullName + "&entry.1205790955=" + title + "&entry.1505936503=" + phone + "&entry.1509848133=" + email + "&entry.1632901593=" + location + "&entry.1577912542=" + lastMod + "&entry.795025569=" + lastAct + "&entry.795025569=" + lastAct + "&entry.147595872=" + candURL); 
}
$("#googlelog").on("click", logger);

//function to download the resume and open the parse resume link in SalesForce
function parseRes () {
	//clicks the download button
	$("#ucResumeDetails_ucAffordanceTray_cbhlResumeWordDocSave > img").click();
	//opens the salesforce page in a new window
	window.open("https://c.na28.visual.force.com/apex/SovrenProcessDocument?sfdc.tabName=01rC0000000IVe7");
}
$("#upload").on("click", parseRes);

function edgesearch() {
	var fullName = $("#personalinfo > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > div").text().trim().split(" "); 
	var location = $("td.lbl.right:contains('Location:') + td").text().trim().split("-");
	var city = location[2];
	var url = "http://edge.careerbuilder.com/search?Names=" + fullName[0] +"%20" + fullName[1] + "&" + "Location=" + city;
	window.open(url);
}
$("#edgesearch").on("click", edgesearch);




