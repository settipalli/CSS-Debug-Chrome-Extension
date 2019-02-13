// content.js => a JavaScript file that runs in the context of web pages.
var firstHref = $("a[href^='http'").eq(0).attr("href");
console.log("First Href: " + firstHref);