
 <!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>External JavaScript File - javatpoint</title><link rel="SHORTCUT ICON" href="https://static.javatpoint.com/images/favicon2.png" />
<link rel="stylesheet" type="text/css" href="https://static.javatpoint.com/link.css?v=5.0" async /><link rel="dns-prefetch" href="https://clients1.google.com"><link rel="dns-prefetch" href="https://static.javatpoint.com"><link rel="dns-prefetch" href="https://googleads.g.doubleclick.net"><link rel="dns-prefetch" href="https://www.google.com"><link rel="dns-prefetch" href="https://feedify.net"><meta name="theme-color" content="#4CAF50" /><meta property="og:title" content="External JavaScript File - javatpoint" /><meta property="og:description" content="How can we write external JavaScript file? An example of external JavaScript is given below." />
<meta name="keywords" content="external javascript, file, tutorials, examples, html, dom, css, tags, events, validation, object, loop, array, document" /><meta name="description" content="How can we write external JavaScript file? An example of external JavaScript is given below." /><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><link rel="canonical" href="https://www.javatpoint.com/external-javascript-file" />
<meta property="og:locale" content="en_US" /><meta property="og:type" content="article" /><meta name="twitter:title" property="og:title" content="External JavaScript File - javatpoint" /><meta name="twitter:description" property="og:description" content="How can we write external JavaScript file? An example of external JavaScript is given below." /><meta property="og:url" content="https://www.javatpoint.com/external-javascript-file" /><meta property="og:site_name" content="www.javatpoint.com" /><meta name="twitter:card" content="summary" /><meta name="twitter:site" content="@pagejavatpoint" /><meta name="twitter:domain" content="www.javatpoint.com" /><meta name="twitter:creator" content="@pagejavatpoint" />
<link href="https://www.javatpoint.com/manifest.json" rel="manifest">
<script data-cfasync="false" type="text/javascript">(function(w, d) { var s = d.createElement('script'); s.src = '//delivery.adrecover.com/37784/adRecover.js?ts=1543562646174'; s.type = 'text/javascript'; s.async = true; (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s); })(window, document);</script>

<script data-cfasync="false" type="text/javascript">
(function (w, d) {
  var siteId = "37780";
  var targetElement =
    d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];
  var s = d.createElement("script");
  s.src = "//cdn.adpushup.com/" + siteId + "/adpushup.js";
  s.crossOrigin = "anonymous";
  s.type = "text/javascript";
  s.async = true;
  targetElement.appendChild(s);
  function sendErrorLog(log) {
    var eventName = "script_error";
    log.siteId = siteId;
    var data = btoa(JSON.stringify(log));
    var img = document.createElement("img");
    img.src =
      "https://aplogger.adpushup.com/log?event=HC_" + eventName + "&data=" + data;
  }
  var searchParams =
    typeof URLSearchParams === "function" &&
    new URLSearchParams(window.location.search);
  if (searchParams) {
    var isDebugModeOn = searchParams.has("apDebug");
  }
  w.addEventListener("error", function (event) {
    try {
      var filename = event.filename || "";
      if (filename.indexOf("/" + siteId + "/adpushup.js") === -1) {
        return;
      }
      var error = event.error;
      if (error) {
        var message = error.message;
        var stack = error.stack;
      }
      message = message || event.message;
      var log = {
        message: message,
        stack: stack || "",
        timestamp: Math.floor(event.timeStamp),
        type: "uncaughterror",
      };
      sendErrorLog(log);
      !isDebugModeOn && event.preventDefault();
    } catch (error) {}
  });
  w.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    if (typeof reason === "object") reason = JSON.stringify(reason);
    var log = {
      message: reason || "no reason found",
      timestamp: Math.floor(event.timeStamp),
      type: "unhandledrejection",
    };
    sendErrorLog(log);
    !isDebugModeOn && event.preventDefault();
  });
  var ga = d.createElement("script");
  ga.src = "https://www.googletagmanager.com/gtag/js?id=G-Z0TZ7TDHS1";
  ga.type = "text/javascript";
  ga.async = true;
  targetElement.appendChild(ga);
  w.dataLayer = window.dataLayer || [];
  w.gtag = function () {
    window.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", "G-Z0TZ7TDHS1", {
    custom_map: { dimension1: "siteid" },
  });
  w.gtag("event", "script-call", {
    send_to: "G-Z0TZ7TDHS1",
    siteid: siteId,
  });
  s.onerror = function (msg) {
    w.gtag("event", "ad-block", {
      send_to: "G-Z0TZ7TDHS1",
      siteid: siteId,
    });
  };
})(window, document);
</script>
</head>
<body onload="highlightlink()">

<button onclick="topFunction()" id="myBtn">&#8679; SCROLL TO TOP</button>
<div id="page" style="margin:-8px;background-color:#f5f5f4;"><div id="container"> <div class="header"><table style="width:100%;margin-bottom:5px"> <tr> <td> <div style="clear:both;float:left;width:230px;margin-top:15px;margin-left:20px"> <a href="https://www.javatpoint.com"><img src="https://static.javatpoint.com/images/logo/jtp_logo.png" alt="Javatpoint Logo" /></a> </div> <div style="float:left;width:60%;"><script> (function() { var cx = '005383125436438536544:y1edweedxwi'; var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true; gcse.src = 'https://cse.google.com/cse.js?cx=' + cx; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s); })();</script><gcse:search></gcse:search> </div> </td> </tr></table> </div>
<div class="headermobile">
<div style="margin-top:10px;padding:0px;text-align:left;">
<span style="float:left"><input type="image" src="https://www.javatpoint.com/images/menuhome64.png" alt="Go To Top" onclick="showmenu()" /></span>
<span style="float:left"><a href="https://www.javatpoint.com"><img src="https://www.javatpoint.com/images/logo/jtp_logo.png" alt="Javatpoint Logo"></a></span>
</div>
<div style="margin:0px;padding:0px;clear:both">
<script>
  (function() {
    var cx = '005383125436438536544:y1edweedxwi';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

</div>
</div>
<div id="link" style="clear:both"> <div class="ddsmoothmenu">
<ul>
<li><a href="https://www.javatpoint.com"><img src="https://static.javatpoint.com/images/icon/home.png" alt="home" /> Home</a></li>
<li><a href="javascript-tutorial" class="selected"><img src="https://static.javatpoint.com/images/icon/js.png" alt="javascript" /> JavaScript</a></li>
<li><a href="html-tutorial"><img src="https://static.javatpoint.com/images/icon/html.png" alt="html" /> HTML</a></li>
<li><a href="css-tutorial"><img src="https://static.javatpoint.com/images/icon/css.png" alt="CSS" /> CSS</a></li>
<li><a href="bootstrap-tutorial"><img src="https://static.javatpoint.com/images/icon/bootstrap.png" alt="Bootstrap" /> Bootstrap</a></li>
<li><a href="jquery-tutorial"><img src="https://static.javatpoint.com/images/icon/jquery.png" alt="jQuery" /> jQuery</a></li>
<li><a href="nodejs-tutorial"><img src="https://static.javatpoint.com/images/icon/node-js.png" alt="Node.js" /> Node.js</a></li>
<li><a href="php-tutorial"><img src="https://static.javatpoint.com/images/icon/php.png" alt="php" /> PHP</a></li>
<li><a href="python-tutorial"><img src="https://static.javatpoint.com/images/icon/python.png" alt="python" /> Python</a></li>
<li><a href="c-programming-language-tutorial"><img src="https://static.javatpoint.com/images/icon/c.png" alt="c" /> C</a></li>
<li><a href="cpp-tutorial"><img src="https://static.javatpoint.com/images/icon/cpp.png" alt="c++" /> C++</a></li>
<li><a href="java-tutorial"><img src="https://static.javatpoint.com/images/icon/java.png" alt="java" /> Java</a></li>
<li><a href="c-sharp-tutorial"><img src="https://static.javatpoint.com/images/icon/csharp.png" alt="c#" /> C#</a></li>
<li><a href="sql-tutorial"><img src="https://static.javatpoint.com/images/icon/sql.png" alt="sql" /> SQL</a></li>
<li><a href="android-tutorial"><img src="https://static.javatpoint.com/images/icon/android.png" alt="android" /> Android</a></li>
<li><a href="javascript-interview-questions"><img src="https://static.javatpoint.com/images/icon/interview.png" alt="interview questions" /> Interview Q</a></li>
</ul>
<br style="clear: left" />
</div></div>
<div class="mobilemenu" style="clear:both">

<ins class="adPushupAds" data-adpControl="hqdgs" data-ver="2" data-siteId="37780" data-ac="PHNjcmlwdCBhc3luYyBzcmM9Ii8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzIj48L3NjcmlwdD4KPCEtLSBDbV8zMDB4MjUwX01vYl8xNC85IC0tPgo8aW5zIGNsYXNzPSJhZHNieWdvb2dsZSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MzAwcHg7aGVpZ2h0OjI1MHB4IgogICAgIGRhdGEtYWQtY2xpZW50PSJjYS1wdWItNDY5OTg1ODU0OTAyMzM4MiIKICAgICBkYXRhLWFkLXNsb3Q9IjcwMTQyNzI1MTkiPjwvaW5zPgo8c2NyaXB0PgooYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pOwo8L3NjcmlwdD4="></ins><script data-cfasync="false" type="text/javascript">(function (w, d) { for (var i = 0, j = d.getElementsByTagName("ins"), k = j[i]; i < j.length; k = j[++i]){ if(k.className == "adPushupAds" && k.getAttribute("data-push") != "1") { ((w.adpushup = w.adpushup || {}).control = (w.adpushup.control || [])).push(k); k.setAttribute("data-push", "1");} } })(window, document);</script>
</div>
<div id="menu">
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Tutorial</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-tutorial">JavaScript Introduction</a>
<a href="javascript-example">JavaScript Example</a>
<a href="external-javascript-file">External JavaScript</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Basics</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-comment">JS Comment</a>
<a href="javascript-variable">JS Variable</a>
<a href="javascript-global-variable">JS Global Variable</a>
<a href="javascript-data-types">JS Data Types</a>
<a href="javascript-operators">JS Operators</a>
<a href="javascript-if">JS If Statement</a>
<a href="javascript-switch">JS Switch</a>
<a href="javascript-loop">JS Loop</a>
<a href="javascript-function">JS Function</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Objects</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-objects">JS Object</a>
<a href="javascript-array">JS Array</a>
<a href="javascript-string">JS String</a>
<a href="javascript-date">JS Date</a>
<a href="javascript-math">JS Math</a>
<a href="javascript-number">JS Number</a>
<a href="javascript-boolean">JS Boolean</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript BOM</span></h2>
</div>
<div class="leftmenu">
<a href="browser-object-model">Browser Objects</a>
<a href="window-object">1) Window Object</a>
<a href="javascript-history-object">2) History Object</a>
<a href="javascript-navigator-object">3) Navigator Object</a>
<a href="javascript-screen">4) Screen Object</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript DOM</span></h2>
</div>
<div class="leftmenu">
<a href="document-object-model">5) Document Object</a>
<a href="document-getElementById()-method">getElementById</a>
<a href="javascript-getelementsbyclassname">GetElementsByClassName()</a>
<a href="document-getElementsByName()-method">getElementsByName</a>
<a href="document-getElementsByTagName()-method">getElementsByTagName</a>
<a href="javascript-innerHTML">JS innerHTML property</a>
<a href="javascript-innerText">JS innerText property</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Validation</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-form-validation">JS form validation</a>
<a href="javascript-form-validation#email">JS email validation</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript OOPs</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-oops-classes">JS Class</a>
<a href="javascript-objects">JS Object</a>
<a href="javascript-oops-prototype-object">JS Prototype</a>
<a href="javascript-oops-constructor-method">JS constructor Method</a>
<a href="javascript-oops-static-method">JS static Method</a>
<a href="javascript-oops-encapsulation">JS Encapsulation</a>
<a href="javascript-oops-inheritance">JS Inheritance</a>
<a href="javascript-oops-polymorphism">JS Polymorphism</a>
<a href="javascript-oops-abstraction">JS Abstraction</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Cookies</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-cookies">JS Cookies</a>
<a href="javascript-cookie-attributes">Cookie Attributes</a>
<a href="javascript-cookie-with-multiple-name">Cookie with multiple Name</a>
<a href="javascript-deleting-cookies">Deleting Cookies</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Events</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-events">JavaScript Events</a>
<a href="javascript-addeventlistener">JavaScript addEventListener()</a>
<a href="javascript-onclick-event">JS onclick event</a>
<a href="javascript-dblclick-event">JS dblclick event</a>
<a href="javascript-onload">JS onload event</a>
<a href="javascript-onresize-event">JS onresize event</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Exception Handling</span></h2>
</div>
<div class="leftmenu">
<a href="exception-handling-in-javascript">JS Exception Handling</a>
<a href="javascript-try-catch">JavaScript try-catch</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Misc</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-this-keyword">JS this Keyword</a>
<a href="javascript-debugging">JS Debugging</a>
<a href="javascript-hoisting">JS Hoisting</a>
<a href="javascript-strict-mode">JS Strict Mode</a>
<a href="javascript-promise">JavaScript Promise</a>
<a href="javascript-compare-dates">JS Compare dates</a>
<a href="javascript-array-length-property">JavaScript array.length</a>
<a href="javascript-alert">JavaScript alert()</a>
<a href="javascript-eval-function">JavaScript eval() function</a>
<a href="javascript-closest">JavaScript closest()</a>
<a href="javascript-continue-statement">JavaScript continue statement</a>
<a href="javascript-getattribute-method">JS getAttribute() method</a>
<a href="javascript-hide-elements">JS hide elements</a>
<a href="javascript-prompt-dialog-box">JavaScript prompt()</a>
<a href="javascript-removeattribute-method">removeAttribute() method</a>
<a href="javascript-reset">JavaScript reset</a>
<a href="javascript-return">JavaScript return</a>
<a href="javascript-string-split">JS String split()</a>
<a href="javascript-typeof-operator">JS typeof operator</a>
<a href="javascript-ternary-operator">JS ternary operator</a>
<a href="javascript-reload-method">JS reload() method</a>
<a href="javascript-setattribute">JS setAttribute() method</a>
<a href="javascript-setinterval-method">JS setInterval() method</a>
<a href="javascript-settimeout-method">JS setTimeout() method</a>
<a href="javascript-string-includes">JS string includes() method</a>
<a href="calculate-current-week-number-in-javascript">Calculate current week number in JavaScript</a>
<a href="calculate-days-between-two-dates-in-javascript">Calculate days between two dates in JavaScript</a>
<a href="javascript-string-trim">JavaScript String trim()</a>
<a href="javascript-timer">JavaScript timer</a>
<a href="remove-elements-from-array-in-javascript">Remove elements from array</a>
<a href="javascript-localstorage">JavaScript localStorage</a>
<a href="javascript-offsetheight">JavaScript offsetHeight</a>
<a href="confirm-password-validation-in-javascript">Confirm password validation</a>
<a href="static-vs-const-in-javascript">Static vs Const</a>
<a href="how-to-convert-comma-separated-string-into-an-array-in-javascript">How to Convert Comma Separated String into an Array in JavaScript</a>
<a href="calculate-age-using-javascript">Calculate age using JavaScript</a>
<a href="javascript-label-statement">JavaScript label statement</a>
<a href="javascript-string-with-quotes">JavaScript String with quotes</a>
<a href="how-to-create-dropdown-list-using-javascript">How to create dropdown list using JavaScript</a>
<a href="how-to-disable-radio-button-using-javascript">How to disable radio button using JavaScript</a>
<a href="check-if-the-value-exists-in-array-in-javascript">Check if the value exists in Array in Javascript</a>
<a href="javascript-setinterval">Javascript Setinterval</a>
<a href="javascript-debouncing">JavaScript Debouncing</a>
<a href="javascript-print-method">JavaScript print() method</a>
<a href="javascript-editable-table">JavaScript editable table</a>
<a href="canvasjs">CanvasJS</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">JavaScript Advance</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-typedarray">JS TypedArray</a>
<a href="javascript-set">JS Set</a>
<a href="javascript-map">JS Map</a>
<a href="javascript-weakset">JS WeakSet</a>
<a href="javascript-weakmap">JS WeakMap</a>
<a href="javascript-callback">JavaScript callback</a>
<a href="javascript-closures">JavaScript closures</a>
<a href="javascript-date-difference">JavaScript date difference</a>
<a href="javascript-date-format">JavaScript date format</a>
<a href="javascript-date-parse-method">JS date parse() method</a>
<a href="javascript-defer">JavaScript defer</a>
<a href="javascript-redirect">JavaScript redirect</a>
<a href="javascript-scope">JavaScript scope</a>
<a href="javascript-scroll">JavaScript scroll</a>
<a href="javascript-sleep">JavaScript sleep</a>
<a href="javascript-void">JavaScript void</a>
<a href="javascript-form">JavaScript Form</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Differences</span></h2>
</div>
<div class="leftmenu">
<a href="jquery-vs-javascript">jQuery vs JavaScript</a>
<a href="javascript-vs-php">JavaScript vs PHP</a>
<a href="dart-vs-javascript">Dart vs. JavaScript</a>
<a href="javascript-vs-angularjs">JavaScript Vs. Angular Js</a>
<a href="javascript-vs-nodejs">JavaScript vs. Node.js</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Questions</span></h2>
</div>
<div class="leftmenu">
<a href="how-to-add-javascript-to-html">How to add JavaScript to html</a>
<a href="how-to-enable-javascript-in-my-browser">How to enable JavaScript in my browser</a>
<a href="difference-between-java-and-javascript">difference between Java and JavaScript</a>
<a href="how-to-call-javascript-function-in-html">How to call JavaScript function in html</a>
<a href="how-to-write-a-function-in-javascript">How to write a function in JavaScript</a>
<a href="is-javascript-case-sensitive">Is JavaScript case sensitive</a>
<a href="how-does-javascript-work">How does JavaScript Work</a>
<a href="how-to-debug-javascript">How to debug JavaScript</a>
<a href="how-to-enable-javascript-on-android">How to Enable JavaScript on Android</a>
<a href="what-is-a-promise-in-javascript">What is a promise in JavaScript</a>
<a href="what-is-hoisting-in-javascript">What is hoisting in JavaScript</a>
<a href="what-is-vanilla-javascript">What is Vanilla JavaScript</a>
<a href="how-to-add-a-class-to-an-element-using-javascript">How to add a class to an element using JavaScript</a>
<a href="how-to-calculate-the-perimeter-and-area-of-a-circle-using-javascript">How to calculate the perimeter and area of a circle using JavaScript</a>
<a href="how-to-create-an-image-map-in-javascript">How to create an image map in JavaScript</a>
<a href="how-to-find-factorial-of-a-number-in-javascript">How to find factorial of a number in JavaScript</a>
<a href="how-to-get-the-value-of-pi-using-javascript">How to get the value of PI using JavaScript</a>
<a href="how-to-make-a-text-italic-using-javascript">How to make a text italic using JavaScript</a>
<a href="what-are-the-uses-of-javascript">What are the uses of JavaScript</a>
<a href="how-to-get-all-checked-checkbox-value-in-javascript">How to get all checked checkbox value in JavaScript</a>
<a href="how-to-open-json-file">How to open JSON file</a>
<a href="random-image-generator-in-javascript">Random image generator in JavaScript</a>
<a href="how-to-add-object-in-array-using-javascript">How to add object in array using JavaScript</a>
<a href="javascript-window-open-method">JavaScript Window open method</a>
<a href="javascript-window-close-method">JavaScript Window close method</a>
<a href="how-to-check-a-radio-button-using-javascript">How to check a radio button using JavaScript</a>
<a href="javascript-const">JavaScript Const</a>
<a href="javascript-function-to-check-array-is-empty-or-not">JavaScript function to check array is empty or not</a>
<a href="javascript-multi-line-string">JavaScript multi-line String</a>
<a href="javascript-anonymous-functions">JavaScript Anonymous Functions</a>
<a href="implementing-javascript-stack-using-array">Implementing JavaScript Stack Using Array</a>
<a href="javascript-classlist">JavaScript classList</a>
<a href="javascript-code-editors">JavaScript Code Editors</a>
<a href="javascript-let-keyword">JavaScript let keyword</a>
<a href="random-string-generator-using-javascript">Random String Generator using JavaScript</a>
<a href="javascript-queue">JavaScript Queue</a>
<a href="event-bubbling-and-capturing-in-javascript">Event Bubbling and Capturing in JavaScript</a>
<a href="how-to-select-all-checkboxes-using-javascript">How to select all checkboxes using JavaScript</a>
<a href="javascript-change-event">JavaScript change Event</a>
<a href="javascript-focusout-event">JavaScript focusout event</a>
<a href="traverse-array-object-using-javascript">Traverse array object using JavaScript</a>
<a href="javascript-create-and-download-csv-file">JavaScript create and download CSV file</a>
<a href="how-to-make-beep-sound-in-javascript">How to make beep sound in JavaScript</a>
<a href="how-to-add-a-whatsapp-share-button-in-a-website-using-javascript">How to add a WhatsApp share button in a website using JavaScript</a>
<a href="javascript-execution-context">JavaScript Execution Context</a>
<a href="javascript-queryselector">JavaScript querySelector</a>
<a href="shallow-copy-in-javascript">Shallow Copy in JavaScript</a>
<a href="how-to-toggle-password-visibility-in-javascript">How to Toggle Password Visibility in JavaScript</a>
<a href="removing-duplicate-from-arrays-in-javascript">Removing Duplicate From Arrays</a>
<a href="javascript-insertbefore">JavaScript insertBefore</a>
<a href="javascript-select-option">JavaScript Select Option</a>
<a href="get-and-set-scroll-position-of-an-element">Get and Set Scroll Position of an Element</a>
<a href="getting-child-elements-of-a-node-in-javascript">Getting Child Elements of a Node in JavaScript</a>
<a href="javascript-scrollintoview">JavaScript scrollIntoView</a>
<a href="javascript-string-startswith">JavaScript String startsWith</a>
<a href="js-first-class-function">JS First Class Function</a>
<a href="javascript-default-parameters">JavaScript Default Parameters</a>
<a href="javascript-recursion-in-real-life">JavaScript Recursion in Real Life</a>
<a href="javascript-removechild">JavaScript removeChild</a>
<a href="remove-options-from-select-list-in-javascript">Remove options from select list in JavaScript</a>
<a href="javascript-calculator">JavaScript Calculator</a>
<a href="palindrome-in-javascript">Palindrome in JavaScript</a>
<a href="javascript-call-stack">JavaScript Call Stack</a>
<a href="fibonacci-series-in-javascript">Fibonacci series in JavaScript</a>
<a href="javascript-appendchild-method">JavaScript appendchild() method</a>
<a href="ripple-effect-javascript">Ripple effect JavaScript</a>
<a href="convert-object-to-array-in-javascript">Convert object to array in Javascript</a>
<a href="javascript-async-and-await">JavaScript Async/Await</a>
<a href="javascript-blob">JavaScript Blob</a>
<a href="check-if-the-array-is-empty-or-null-or-undefined-in-javascript">Check if the array is empty or null, or undefined in JavaScript</a>
<a href="javascript-animation">JavaScript Animation</a>
<a href="javascript-design-patterns">JavaScript Design Patterns</a>
<a href="canvasjs">CanvasJS</a>
<a href="javascript-format-numbers-with-commas">JavaScript format numbers with commas</a>
<a href="currying-in-javascript">Currying in JavaScript</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">MCQ</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-mcq">JavaScript MCQ</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Interview Questions</span></h2>
</div>
<div class="leftmenu">
<a href="javascript-interview-questions">JavaScript I/Q</a>
</div>
<img src="https://www.javatpoint.com/wh.JPG" alt="JavaTpoint" />
<br />
<div id="leftad" style="margin-left:20px">

<div id="17c09743-0b89-427c-ba64-e09f6a1745a2" class="_ap_apex_ad">
<script>
		var adpushup = window.adpushup = window.adpushup || {};
		adpushup.que = adpushup.que || [];
		adpushup.que.push(function() {
			adpushup.triggerAd("17c09743-0b89-427c-ba64-e09f6a1745a2");
		});
	</script>
</div>
</div>
</div>
<div class="onlycontent">

<div class="onlycontentad">
<div id="9bbcb75d-b5e2-40e1-a811-e7680d1f59a4" class="_ap_apex_ad">
<script>
		var adpushup = window.adpushup = window.adpushup || {};
		adpushup.que = adpushup.que || [];
		adpushup.que.push(function() {
			adpushup.triggerAd("9bbcb75d-b5e2-40e1-a811-e7680d1f59a4");
		});
	</script>
</div>
</div>
<div class="onlycontentinner">
<div id="city">
<table>
<tr><td>
<div id="bottomnextup">
<a class="next" href="javascript-comment">next &rarr;</a>
<a class="next" href="javascript-example">&larr; prev</a>
</div>
<h1 class="h1">External JavaScript file</h1>
<p>We can create external JavaScript file and embed it in many html page. </p>
<p>It provides <strong>code re usability</strong> because single JavaScript file can be used in several html pages.</p>
<p>An external JavaScript file must be saved by .js extension. It is recommended to embed all JavaScript files into a single file. It increases the speed of the webpage.</p>
<p>Let's create an external <a href="https://www.javatpoint.com/javascript-tutorial">JavaScript</a> file that prints Hello Javatpoint in a alert dialog box.</p>
<p><strong>message.js</strong></p>
<div class="codeblock"><textarea name="code" class="xml">
function msg(){
 alert("Hello Javatpoint");
}
</textarea></div>
<p>Let's include the JavaScript file into <a href="https://www.javatpoint.com/html-tutorial">html</a> page. It calls the <a href="https://www.javatpoint.com/javascript-function">JavaScript function</a> on button click.</p>
<p><strong>index.html</strong></p>
<div class="codeblock"><textarea name="code" class="xml">&lt;html&gt;
&lt;head&gt;
&lt;script type="text/javascript" src="message.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Welcome to JavaScript&lt;/p&gt;
&lt;form&gt;
&lt;input type="button" value="click" onclick="msg()"/&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</textarea></div>
<h2 class="h3">Advantages of External JavaScript</h2>
<p>There will be following benefits if a user creates an external javascript:</p>
<ol class="points">
<li>It helps in the reusability of code in more than one HTML file.</li>
<li>It allows easy code readability.</li>
<li>It is time-efficient as web browsers cache the external js files, which further reduces the page loading time.</li>
<li>It enables both web designers and coders to work with html and js files parallelly and separately, i.e., without facing any code conflictions.</li>
<li>The length of the code reduces as only we need to specify the location of the js file.</li>
</ol>
<h2 class="h3">Disadvantages of External JavaScript</h2>
<p>There are the following disadvantages of external files:</p>
<ol class="points">
<li>The stealer may download the coder's code using the url of the js file.</li>
<li>If two js files are dependent on one another, then a failure in one file may affect the execution of the other dependent file.</li>
<li>The web browser needs to make an additional http request to get the js code.</li>
<li>A tiny to a large change in the js code may cause unexpected results in all its dependent files.</li>
<li>We need to check each file that depends on the commonly created external javascript file.</li>
<li>If it is a few lines of code, then better to implement the internal javascript code.</li>
</ol>
<hr />
<div class="nexttopicdiv">
<span class="nexttopictext">Next Topic</span><span class="nexttopiclink"><a href="javascript-comment">JavaScript Comment</a></span>
</div>

<br /><br />
<div id="bottomnext">
<a style="float:left" class="next" href="javascript-example">&larr; prev</a>
<a style="float:right" class="next" href="javascript-comment">next &rarr;</a>
</div>
<br /><br />
</td></tr>
</table>
</div>
<hr class="hrhomebox" />
<div><img class="lazyload" data-src="https://static.javatpoint.com/images/youtube-32.png" style="vertical-align:middle;" alt="Youtube" />
<span class="h3" style="vertical-align:middle;font-size:22px"> For Videos Join Our Youtube Channel: <a href="https://bit.ly/2FOeX6S" target="_blank"> Join Now</a></span>
</div>
<hr class="hrhomebox" />
<h3 class="h3">Feedback</h3>
<ul class="points">
<li>Send your Feedback to <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e1878484858380828aa18b80978095918e888f95cf828e8c">[email&#160;protected]</a></li>
</ul>
<hr class="hrhomebox" />
<h2 class="h2">Help Others, Please Share</h2>
<a rel="nofollow" title="Facebook" target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.javatpoint.com/external-javascript-file"><img src="https://www.javatpoint.com/images/facebook32.png" alt="facebook" /></a>
<a rel="nofollow" title="Twitter" target="_blank" href="https://twitter.com/share?url=https://www.javatpoint.com/external-javascript-file"><img src="https://www.javatpoint.com/images/twitter32.png" alt="twitter" /></a>
<a rel="nofollow" title="Pinterest" target="_blank" href="https://www.pinterest.com/pin/create/button/?url=https://www.javatpoint.com/external-javascript-file"><img src="https://www.javatpoint.com/images/pinterest32.png" alt="pinterest" /></a>


<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4699858549023382" data-ad-slot="5022809933" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<hr class="hrhomebox" />

<fieldset class="gra1">
<h2 class="h3">Learn Latest Tutorials</h2>
<div class="firsthomecontent">
<a href="https://www.javatpoint.com/digital-marketing">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/digital-marketing.png" alt="digital marketing tutorial" />
<p>Digital Marketing</p>
</div>
</a>
<a href="https://www.javatpoint.com/elasticsearch">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/elasticsearch.png" alt="elasticsearch tutorial" />
<p>Elasticsearch</p>
</div>
</a>
<a href="https://www.javatpoint.com/entity-framework">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/entity-framework.png" alt="entity framework tutorial" />
<p>Entity Framework</p>
</div>
</a>
<a href="https://www.javatpoint.com/firewall">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/firewall.png" alt="Firewall tutorial" />
<p>Firewall</p>
</div>
</a>
<a href="https://www.javatpoint.com/functional-programming">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/functional-programming.png" alt="Functional Programming tutorial" />
<p>Functional Programming</p>
</div>
</a>
<a href="https://www.javatpoint.com/python-programming-with-google-colab">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/google-colab.png" alt="Google Colab tutorial" />
<p>Google Colab</p>
</div>
</a>
<a href="https://www.javatpoint.com/graph-theory-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/graph-theory.png" alt="Graph Theory tutorial" />
<p>Graph Theory</p>
</div>
</a>
<a href="https://www.javatpoint.com/groovy">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/groovy.png" alt="Groovy tutorial" />
<p>Groovy</p>
</div>
</a>
<a href="https://www.javatpoint.com/group-discussion">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/group-discussion.png" alt="Group Discussion tutorial" />
<p>Group Discussion</p>
</div>
</a>
<a href="https://www.javatpoint.com/informatica">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/informatica.png" alt="Informatica tutorial" />
<p>Informatica</p>
</div>
</a>
<a href="https://www.javatpoint.com/ionic">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/ionic.png" alt="Ionic tutorial" />
 <p>Ionic</p>
</div>
</a>
<a href="https://www.javatpoint.com/itil">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/itil.png" alt="ITIL tutorial" />
<p>ITIL</p>
</div>
</a>
<a href="https://www.javatpoint.com/ios-development-using-swift">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/ios.png" alt="IOS Development tutorial" />
<p>IOS with Swift</p>
</div>
</a>
<a href="https://www.javatpoint.com/angular-material">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/angular-material.png" alt="angular material tutorial" />
<p>Angular Material</p>
</div>
</a>
<a href="https://www.javatpoint.com/deep-learning">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/deep-learning.png" alt="deep learning tutorial" />
<p>Deep Learning</p>
</div>
</a>
</div>
</fieldset>
<hr class="hrhomebox" />

<fieldset class="gra1">
<h2 class="h3">Preparation</h2>
<div class="firsthomecontent">
<a href="https://www.javatpoint.com/aptitude/quantitative">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/aptitude/images/quantitative-aptitude-home.png" alt="Aptitude" />
<p>Aptitude</p>
</div>
</a>
<a href="https://www.javatpoint.com/reasoning">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/reasoning/images/reasoning-home.png" alt="Logical Reasoning" />
<p>Reasoning</p>
</div>
</a>
<a href="https://www.javatpoint.com/verbal-ability">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/verbal-ability/images/verbal-ability-home.png" alt="Verbal Ability" />
<p>Verbal Ability</p>
</div>
</a>
<a href="https://www.javatpoint.com/interview-questions-and-answers">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/logo/interviewhome.png" alt="Interview Questions" />
<p>Interview Questions</p>
</div>
</a>
<a href="https://www.javatpoint.com/company-interview-questions-and-recruitment-process">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/interview/images/company-home.jpeg" alt="Company Interview Questions" />
<p>Company Questions</p>
</div>
</a>
</div>
</fieldset>
<hr class="hrhomebox" />

<fieldset class="gra1">
<h2 class="h3">Trending Technologies</h2>
<div class="firsthomecontent">
<a href="https://www.javatpoint.com/artificial-intelligence-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/artificial-intelligence.png" alt="Artificial Intelligence Tutorial" />
<p>Artificial Intelligence</p>
</div>
</a>
<a href="https://www.javatpoint.com/aws-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/amazon-web-services.png" alt="AWS Tutorial" />
<p>AWS</p>
</div>
</a>
<a href="https://www.javatpoint.com/selenium-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/selenium.png" alt="Selenium tutorial" />
<p>Selenium</p>
</div>
</a>
<a href="https://www.javatpoint.com/cloud-computing-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/cloud-computing.png" alt="Cloud Computing tutorial" />
<p>Cloud Computing</p>
</div>
</a>
<a href="https://www.javatpoint.com/hadoop-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/hadoop.png" alt="Hadoop tutorial" />
<p>Hadoop</p>
</div>
</a>
<a href="https://www.javatpoint.com/reactjs-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/reactjs.png" alt="ReactJS Tutorial" />
<p>ReactJS</p>
</div>
</a>
<a href="https://www.javatpoint.com/data-science">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/data-science.png" alt="Data Science Tutorial" />
<p>Data Science</p>
</div>
</a>
<a href="https://www.javatpoint.com/angular-7-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/angular7.png" alt="Angular 7 Tutorial" />
<p>Angular 7</p>
</div>
</a>
<a href="https://www.javatpoint.com/blockchain-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/blockchain.png" alt="Blockchain Tutorial" />
<p>Blockchain</p>
</div>
</a>
<a href="https://www.javatpoint.com/git">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/git.png" alt="Git Tutorial" />
<p>Git</p>
</div>
</a>
<a href="https://www.javatpoint.com/machine-learning">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/machine-learning.png" alt="Machine Learning Tutorial" />
<p>Machine Learning</p>
</div>
</a>
<a href="https://www.javatpoint.com/devops">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/devops.png" alt="DevOps Tutorial" />
<p>DevOps</p>
</div>
</a>
</div>
</fieldset>
<hr class="hrhomebox" />

<fieldset class="gra1">
<h2 class="h3">B.Tech / MCA</h2>
<div class="firsthomecontent">
<a href="https://www.javatpoint.com/dbms-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/dbms.png" alt="DBMS tutorial" />
<p>DBMS</p>
</div>
</a>
<a href="https://www.javatpoint.com/data-structure-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/data-structures.png" alt="Data Structures tutorial" />
<p>Data Structures</p>
</div>
</a>
<a href="https://www.javatpoint.com/daa-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/daa.png" alt="DAA tutorial" />
<p>DAA</p>
</div>
</a>
<a href="https://www.javatpoint.com/os-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/operating-system.png" alt="Operating System tutorial" />
<p>Operating System</p>
</div>
</a>
<a href="https://www.javatpoint.com/computer-network-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/computer-network.png" alt="Computer Network tutorial" />
<p>Computer Network</p>
</div>
</a>
<a href="https://www.javatpoint.com/compiler-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/compiler-design.png" alt="Compiler Design tutorial" />
<p>Compiler Design</p>
</div>
</a>
<a href="https://www.javatpoint.com/computer-organization-and-architecture-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/computer-organization.png" alt="Computer Organization and Architecture" />
<p>Computer Organization</p>
</div>
</a>
<a href="https://www.javatpoint.com/discrete-mathematics-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/discrete-mathematics.png" alt="Discrete Mathematics Tutorial" />
<p>Discrete Mathematics</p>
</div>
</a>
<a href="https://www.javatpoint.com/ethical-hacking-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/ethical-hacking.png" alt="Ethical Hacking Tutorial" />
<p>Ethical Hacking</p>
</div>
</a>
<a href="https://www.javatpoint.com/computer-graphics-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/computer-graphics.png" alt="Computer Graphics Tutorial" />
<p>Computer Graphics</p>
</div>
</a>
<a href="https://www.javatpoint.com/software-engineering-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/software-engineering.png" alt="Software Engineering Tutorial" />
<p>Software Engineering</p>
</div>
</a>
<a href="https://www.javatpoint.com/html-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/web-technology.png" alt="html tutorial" />
<p>Web Technology</p>
</div>
</a>
<a href="https://www.javatpoint.com/cyber-security-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/cyber-security.png" alt="Cyber Security tutorial" />
<p>Cyber Security</p>
</div>
</a>
<a href="https://www.javatpoint.com/automata-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/automata.png" alt="Automata Tutorial" />
<p>Automata</p>
</div>
</a>
<a href="https://www.javatpoint.com/c-programming-language-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/c-programming.png" alt="C Language tutorial" />
<p>C Programming</p>
</div>
</a>
<a href="https://www.javatpoint.com/cpp-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/cpp.png" alt="C++ tutorial" />
<p>C++</p>
</div>
</a>
<a href="https://www.javatpoint.com/java-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/java.png" alt="Java tutorial" />
<p>Java</p>
</div>
</a>
<a href="https://www.javatpoint.com/net-framework">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/dot-net.png" alt=".Net Framework tutorial" />
<p>.Net</p>
</div>
</a>
<a href="https://www.javatpoint.com/python-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/python.png" alt="Python tutorial" />
<p>Python</p>
</div>
</a>
<a href="https://www.javatpoint.com/programs-list">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/programs.png" alt="List of Programs" />
<p>Programs</p>
</div>
</a>
<a href="https://www.javatpoint.com/control-system-tutorial">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/control-system.png" alt="Control Systems tutorial" />
<p>Control System</p>
</div>
</a>
<a href="https://www.javatpoint.com/data-mining">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/data-mining.png" alt="Data Mining Tutorial" />
<p>Data Mining</p>
</div>
</a>
<a href="https://www.javatpoint.com/data-warehouse">
<div class="homecontent"><img class="lazyload" data-src="https://static.javatpoint.com/images/homeicon/data-warehouse.png" alt="Data Warehouse Tutorial" />
<p>Data Warehouse</p>
</div>
</a>
</div>
</fieldset>
</div>
<br><br /><div class="mobilemenu" style="clear:both">
<ins class="adPushupAds" data-adpControl="jrfe7" data-ver="2" data-siteId="37780" data-ac="PHNjcmlwdCBhc3luYyBzcmM9Ii8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzIj48L3NjcmlwdD4KPCEtLSByZXNwb25zaXZlbW9iaWxlZm9vdGVyIC0tPgo8aW5zIGNsYXNzPSJhZHNieWdvb2dsZSIKICAgICBzdHlsZT0iZGlzcGxheTpibG9jayIKICAgICBkYXRhLWFkLWNsaWVudD0iY2EtcHViLTQ2OTk4NTg1NDkwMjMzODIiCiAgICAgZGF0YS1hZC1zbG90PSI4MjIyODY2MzE4IgogICAgIGRhdGEtYWQtZm9ybWF0PSJhdXRvIgogICAgIGRhdGEtZnVsbC13aWR0aC1yZXNwb25zaXZlPSJ0cnVlIj48L2lucz4KPHNjcmlwdD4KKGFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHt9KTsKPC9zY3JpcHQ+"></ins><script data-cfasync="false" type="text/javascript">(function (w, d) { for (var i = 0, j = d.getElementsByTagName("ins"), k = j[i]; i < j.length; k = j[++i]){ if(k.className == "adPushupAds" && k.getAttribute("data-push") != "1") { ((w.adpushup = w.adpushup || {}).control = (w.adpushup.control || [])).push(k); k.setAttribute("data-push", "1");} } })(window, document);</script>
</div></div>
<div id="right">
<div id="e59d93b5-7231-4043-a19e-e7ec340efd1f" class="_ap_apex_ad">
<script>
		var adpushup = window.adpushup = window.adpushup || {};
		adpushup.que = adpushup.que || [];
		adpushup.que.push(function() {
			adpushup.triggerAd("e59d93b5-7231-4043-a19e-e7ec340efd1f");
		});
	</script>
</div>
<br /><br />
</div>

<div class="right1024" style="float:left;margin-left:10px;margin-top:120px;">

<ins class="adPushupAds" data-adpControl="6d5qg" data-ver="2" data-siteId="37780" data-ac="PHNjcmlwdCBhc3luYyBzcmM9Ii8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzIj48L3NjcmlwdD4KPCEtLSByaWdodDEwMjRvbmx5IC0tPgo8aW5zIGNsYXNzPSJhZHNieWdvb2dsZSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTIwcHg7aGVpZ2h0OjYwMHB4IgogICAgIGRhdGEtYWQtY2xpZW50PSJjYS1wdWItNDY5OTg1ODU0OTAyMzM4MiIKICAgICBkYXRhLWFkLXNsb3Q9IjIxODAxMTg3MTYiPjwvaW5zPgo8c2NyaXB0PgooYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pOwo8L3NjcmlwdD4K"></ins><script data-cfasync="false" type="text/javascript">(function (w, d) { for (var i = 0, j = d.getElementsByTagName("ins"), k = j[i]; i < j.length; k = j[++i]){ if(k.className == "adPushupAds" && k.getAttribute("data-push") != "1") { ((w.adpushup = w.adpushup || {}).control = (w.adpushup.control || [])).push(k); k.setAttribute("data-push", "1");} } })(window, document);</script>
<br /><br />
<ins class="adPushupAds" data-adpControl="6d5qg" data-ver="2" data-siteId="37780" data-ac="PHNjcmlwdCBhc3luYyBzcmM9Ii8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzIj48L3NjcmlwdD4KPCEtLSByaWdodDEwMjRvbmx5IC0tPgo8aW5zIGNsYXNzPSJhZHNieWdvb2dsZSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTIwcHg7aGVpZ2h0OjYwMHB4IgogICAgIGRhdGEtYWQtY2xpZW50PSJjYS1wdWItNDY5OTg1ODU0OTAyMzM4MiIKICAgICBkYXRhLWFkLXNsb3Q9IjIxODAxMTg3MTYiPjwvaW5zPgo8c2NyaXB0PgooYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pOwo8L3NjcmlwdD4K"></ins><script data-cfasync="false" type="text/javascript">(function (w, d) { for (var i = 0, j = d.getElementsByTagName("ins"), k = j[i]; i < j.length; k = j[++i]){ if(k.className == "adPushupAds" && k.getAttribute("data-push") != "1") { ((w.adpushup = w.adpushup || {}).control = (w.adpushup.control || [])).push(k); k.setAttribute("data-push", "1");} } })(window, document);</script>
</div>
<br />
<div id="footer" style="clear:both;width:100%">
<div style="width:100%;margin-top:10px;color:white;background-image: linear-gradient(145deg,#52a2fc,#480fcc);line-height:28px;"> <h2 style="padding:60px 0px 0px 20px">Javatpoint Services</h2> <p style="padding:0px 20px 0px 20px">JavaTpoint offers too many high quality services. Mail us on <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fe968cbe949f889f8a8e9197908ad09d9193">[email&#160;protected]</a>, to get more information about given services. </p><ul class="points"> <li>Website Designing</li><li>Website Development</li><li>Java Development</li><li>PHP Development</li><li>WordPress</li><li>Graphic Designing</li><li>Logo</li><li>Digital Marketing</li><li>On Page and Off Page SEO</li><li>PPC</li><li>Content Development</li><li>Corporate Training</li><li>Classroom and Online Training</li><li>Data Entry</li></ul> <p style="padding-bottom:60px"></p></div><div style="width:100%;margin-top:-20px;color:white;background-image: linear-gradient(145deg,#dc8140,#b16b15);line-height:28px;"> <h2 style="padding:60px 0px 0px 20px">Training For College Campus</h2> <p style="padding:0px 20px 60px 20px">JavaTpoint offers college campus training on Core Java, Advance Java, .Net, Android, Hadoop, PHP, Web Technology and Python. Please mail your requirement at <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fc948ebc969d8a9d888c93959288d29f9391d2">[email&#160;protected]</a> <br>Duration: 1 week to 2 week<br></p></div><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>var _gaq=_gaq || []; _gaq.push(['_setAccount', 'UA-24880427-1']); _gaq.push(['_trackPageview']); (function(){var ga=document.createElement('script'); ga.type='text/javascript'; ga.async=true; ga.src=('https:'==document.location.protocol ? 'https://ssl' : 'https://www') + '.google-analytics.com/ga.js'; var s=document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script><div style="margin-top:5px;text-align:center"> <sup style="font:16px arial;">Like/Subscribe us for latest updates or newsletter </sup> <a target="_blank" rel="nofollow noopener" href="https://feeds.feedburner.com/javatpointsonoo"><img src="https://static.javatpoint.com/images/social/rss1.png" alt="RSS Feed" /></a> <a target="_blank" rel="nofollow noopener" href="https://feedburner.google.com/fb/a/mailverify?uri=javatpointsonoo"><img src="https://static.javatpoint.com/images/social/mail1.png" alt="Subscribe to Get Email Alerts" /></a> <a rel="nofollow noopener" target="_blank" href="https://www.facebook.com/javatpoint"><img src="https://static.javatpoint.com/images/social/facebook1.jpg" alt="Facebook Page" /></a> <a target="_blank noopener" rel="nofollow" href="https://twitter.com/pagejavatpoint"><img src="https://static.javatpoint.com/images/social/twitter1.png" alt="Twitter Page" /></a> <a target="_blank" rel="nofollow noopener" href="https://www.youtube.com/channel/UCUnYvQVCrJoFWZhKK3O2xLg"><img src="https://static.javatpoint.com/images/youtube32.png" alt="YouTube" /></a> <a target="_blank" rel="nofollow noopener" href="https://javatpoint.blogspot.com"><img src="https://static.javatpoint.com/images/social/blog.png" alt="Blog Page" /></a> </div><footer class="footer1"><div class="column4"><h3>Learn Tutorials</h3><a href="https://www.javatpoint.com/java-tutorial">Learn Java</a><a href="https://www.javatpoint.com/data-structure-tutorial">Learn Data Structures</a><a href="https://www.javatpoint.com/c-programming-language-tutorial">Learn C Programming</a><a href="https://www.javatpoint.com/cpp-tutorial">Learn C++ Tutorial</a><a href="https://www.javatpoint.com/c-sharp-tutorial">Learn C# Tutorial</a><a href="https://www.javatpoint.com/php-tutorial">Learn PHP Tutorial</a><a href="https://www.javatpoint.com/html-tutorial">Learn HTML Tutorial</a><a href="https://www.javatpoint.com/javascript-tutorial">Learn JavaScript Tutorial</a><a href="https://www.javatpoint.com/jquery-tutorial">Learn jQuery Tutorial</a><a href="https://www.javatpoint.com/spring-tutorial">Learn Spring Tutorial</a></div><div class="column4"><h3>Our Websites</h3><a href="https://www.javatpoint.com">Javatpoint.com</a><a rel="dofollow noopener" target="_blank" href="https://www.hindi100.com">Hindi100.com</a><a rel="dofollow noopener" target="_blank" href="https://www.lyricsia.com">Lyricsia.com</a><a rel="nofollow noopener" target="_blank" href="https://www.quoteperson.com">Quoteperson.com</a><a rel="nofollow noopener" target="_blank" href="https://www.jobandplacement.com">Jobandplacement.com</a></div><div class="column4"><h3>Our Services</h3><p>Website Development</p><p>Android Development</p><p>Website Designing</p><p>Digital Marketing</p><p>Summer Training</p><p>Industrial Training</p><p>College Campus Training</p></div><div class="column4"><h3>Contact</h3><p>Address: G-13, 2nd Floor, Sec-3</p><p>Noida, UP, 201301, India</p><p>Contact No: 0120-4256464, 9990449935</p><a href="https://www.javatpoint.com/contact-us">Contact Us</a> <a href="https://www.javatpoint.com/subscribe.jsp">Subscribe Us</a> <a href="https://www.javatpoint.com/privacy-policy">Privacy Policy</a><a href="https://www.javatpoint.com/sitemap.xml">Sitemap</a><br><a href="https://www.javatpoint.com/sonoo-jaiswal">About Me</a></div></footer><footer class="footer2"><p>&copy; Copyright 2011-2021 www.javatpoint.com. All rights reserved. Developed by JavaTpoint.</p></footer>
<div id="bot-root"></div>
<script> 
 (function() {
 var e = document.createElement('script');
 e.src = 'https://app.pushbrothers.com/js/notification-bot.js?cnfg=a3cc04a1-8471-450e-b01e-c9d752b16eb0';
 document.getElementById('bot-root').appendChild(e);}());
</script>
</div>

</div></div>

<script src="https://static.javatpoint.com/js/shcoreandbrush.js"></script><script> dp.SyntaxHighlighter.HighlightAll('code'); </script>
<script src="https://static.javatpoint.com/lazysizes.min.js" async></script>
</body> </html> 