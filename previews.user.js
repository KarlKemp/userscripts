// ==UserScript==
// @name        New script - imagefap.com
// @namespace   Violentmonkey Scripts
// @match       https://www.imagefap.com/pictures/4694747/Amateur-Wives-Girlfriends-94-Part-1
// @grant       none
// @version     1.0
// @author      Karl Kemp
// @description 11/17/2019, 7:54:58 AM
// ==/UserScript==

Array.from(document.getElementsByClassName("gal_mini")).forEach(im => {
   im.srcset = im.src.replace("mini", "thumb") + " 20w";
   im.style = "width:144px; min-height:96px;";
   im.className = "exmin";
})
