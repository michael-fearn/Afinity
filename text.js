

<!DOCTYPE html>
<html lang="en-US" dir="ltr" class="no-js">
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  <title>Array.from() - JavaScript | MDN</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">

  
<link rel="preload" href="https://developer.mozilla.org/static/fonts/locales/ZillaSlab-Regular.f9de6143fdfa.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="home" href="/en-US/">
    <link rel="license" href="#license">
  

  
    
    

    <link href="https://developer.mozilla.org/static/build/styles/mdn.9e17a09fbd06.css" rel="stylesheet" type="text/css" />

    
  

    <link href="https://developer.mozilla.org/static/build/styles/wiki.6be7bc97be9a.css" rel="stylesheet" type="text/css" />


    

  <link href="https://developer.mozilla.org/static/build/styles/locale-en-US.ca0bca387b42.css" rel="stylesheet" type="text/css" />

  
    <script type="text/javascript" src="https://developer.mozilla.org/static/build/js/mozilla-dnthelper.3936bd979b1d.js" charset="utf-8"></script>
    

<script>
    // only load GA if DNT is not enabled
    if (Mozilla && !Mozilla.dntEnabled()) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-36116321-5', 'mozilla.org');
        ga('set', 'anonymizeIp', true);

        

        // dimension9 == "Section editing"
        
            // dimension12 == 'Page Revision'
            ga('set', 'dimension12', '1384481');
            // dimension17 == 'English Slug'
            ga('set', 'dimension17', 'Web/JavaScript/Reference/Global_Objects/Array/from');

        (function() {
            // http://cfsimplicity.com/61/removing-analytics-clutter-from-campaign-urls
            var win = window;
            var removeUtms = function(){
                var location = win.location;
                if (location.href.indexOf('utm') != -1 && win.history.replaceState) {
                    win.history.replaceState({}, '', location.pathname);
                }
            };

            ga('send', 'pageview', {'hitCallback': removeUtms});
        })();
    }
</script>

  
    <!-- common social tags -->
    
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png">
    <meta property="og:site_name" content="MDN Web Docs">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:image" content="https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png">
    <meta name="twitter:site" content="@MozDevNet">
    <meta name="twitter:creator" content="@MozDevNet">
    <link rel="search" type="application/opensearchdescription+xml" href="https://developer.mozilla.org/en-US/search/xml" title="MDN Web Docs">
  

  <!-- third-generation iPad with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png">
  <!-- iPhone with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.mozilla.org/static/img/favicon114.d526f38b09c5.png">
  <!-- first- and second-generation iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.mozilla.org/static/img/favicon72.cc65d1d762a0.png">
  <!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
  <link rel="apple-touch-icon-precomposed" href="https://developer.mozilla.org/static/img/favicon57.de33179910ae.png">
  <!-- basic favicon -->
  <link rel="shortcut icon" href="https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png">
  <!--[if IE]>
  <meta http-equiv="imagetoolbar" content="no">
  <script type="text/javascript" src="https://developer.mozilla.org/static/build/js/html5shiv.3948ccddab6f.js" charset="utf-8"></script>
  <![endif]-->

  
  <link rel="dns-prefetch" href="https://interactive-examples.mdn.mozilla.net" pr="0.75" />
  <link rel="preconnect" href="https://interactive-examples.mdn.mozilla.net" pr="0.75" />

  <link rel="preload" href="https://interactive-examples.mdn.mozilla.net/js/codemirror-5-31-0.js" as="script" />
  <link rel="preload" href="https://interactive-examples.mdn.mozilla.net/js/editor-js.js" as="script" />

  <link rel="alternate" type="application/json" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$json">
  <link rel="canonical" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" >

  
  <link rel="alternate" hreflang="en-US" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
  
    
      <link rel="alternate" hreflang="de" href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="es" href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="fr" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="id" href="https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="it" href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="ja" href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="ko" href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="pl" href="https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="pt-BR" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="ru" href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="tr" href="https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="zh-CN" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
      <link rel="alternate" hreflang="zh-TW" href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from()">
    
  

  <!-- document-specific social tags -->
  <meta property="og:title" content="Array.from()">
  <meta property="og:url" content="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
  <meta name="twitter:url" content="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
  <meta name="twitter:title" content="Array.from()">
  
  <meta property="og:description" content="The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.">
  <meta name="description" content="The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.">
  <meta name="twitter:description" content="The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.">
  

</head>
<body data-slug="Web/JavaScript/Reference/Global_Objects/Array/from" contextmenu="edit-history-menu" data-search-url="" class="document  ">

  <script>
    // make sure global mdn object exists
    var mdn = window.mdn || {};

    (function(win) {
        'use strict';

        (function(){
  var FLAGS = {
    'kumaediting': false,'page_move': false,'section_edit': false,'spam_checks_enabled': true,'spam_submissions_enabled': false,'spam_admin_override': false,'spam_spammer_override': false,'spam_testing_mode': false,'sg_task_completion': false
    },
    SWITCHES = {
    'welcome_email': true,'application_ACAO': true,'store_revision_ips': true,'foundation_callout': false,'helpful-survey-2': true,'wiki_spam_training': true,'registration_disabled': false
    },
    SAMPLES = {
    
    };
  window.waffle = {
    "flag_is_active": function waffle_flag(flag_name) {
      
      return !!FLAGS[flag_name];
    },
    "switch_is_active": function waffle_switch(switch_name) {
      
      return !!SWITCHES[switch_name];
    },
    "sample_is_active": function waffle_sample(sample_name) {
      
      return !!SAMPLES[sample_name];
    },
    "FLAGS": FLAGS,
    "SWITCHES": SWITCHES,
    "SAMPLES": SAMPLES
  };
})();


        // This needs to be set before ckeditor.js loads
        window.CKEDITOR_BASEPATH = '/static/js/libs/ckeditor/build/ckeditor/';

        // Site configuration
        win.mdn.ckeditor = {};
        win.mdn.features = {};
        win.mdn.staticPath = 'https://developer.mozilla.org/static/';
        win.mdn.wiki = {
            autosuggestTitleUrl: '/en-US/docs/get-documents'
        };
        win.mdn.assets = {
            css: {
                'editor-content': ['https://developer.mozilla.org/static/build/styles/editor-content.7f97ba7f9e73.css','https://developer.mozilla.org/static/build/styles/editor-locale-en-US.ca0bca387b42.css',
                ],

                'wiki-compat-tables': ['https://developer.mozilla.org/static/build/styles/wiki-compat-tables.481447ac27b5.css',]
            },
            js: {
                'syntax-prism': ['https://developer.mozilla.org/static/build/js/syntax-prism.05dc5663d445.js',],
                'wiki-compat-tables': ['https://developer.mozilla.org/static/build/js/wiki-compat-tables.003f4acf76ea.js',]
            }
        };

        win.mdn.notifications = [];

        

        // interactive editor config
        win.mdn.interactiveEditor = {
            siteUrl: "https://developer.mozilla.org",
            editorUrl: "https://interactive-examples.mdn.mozilla.net"
        };

    })(this);
</script>
    
    <ul id="nav-access">
  <li><a href="#content" id="skip-main">Skip to main content</a></li>
  <li><a id="skip-language" href="#language">Select language</a></li>
  <li><a href="#q" id="skip-search">Skip to search</a></li>
</ul>

    <!-- Header -->
    <header id="main-header" class="header-main">
      <a href="/en-US/" class="logo">MDN Web Docs</a>
      <div class="nav-toolbox-wrapper">
        <nav id="main-nav" class="nav-main" role="navigation">
    <ul>
        <li class="nav-main-item">
            <a href="/en-US/docs/Web">Technologies
                <svg class="icon icon-caret-down" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28">
    <path d="M16 11a.99.99 0 0 1-.297.703l-7 7C8.516 18.89 8.265 19 8 19s-.516-.109-.703-.297l-7-7A.996.996 0 0 1 0 11c0-.547.453-1 1-1h14c.547 0 1 .453 1 1z"/>
</svg>
            </a>
            <div class="submenu js-submenu" id="nav-tech-submenu">
                <div class="submenu-column">
                  <ul>
                    <li><a href="/en-US/docs/Web/HTML">HTML</a></li>
                    <li><a href="/en-US/docs/Web/CSS">CSS</a></li>
                    <li><a href="/en-US/docs/Web/JavaScript">JavaScript</a></li>
                    <li><a href="/en-US/docs/Web/Guide/Graphics">Graphics</a></li>
                    <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
                    <li><a href="/en-US/docs/Web/API">APIs / DOM</a></li>
                    <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">Browser Extensions</a></li>
                    <li><a href="/en-US/docs/Web/MathML">MathML</a></li>
                  </ul>
                </div>
            </div>
        </li>
        <li class="nav-main-item">
            <a href="/en-US/docs/Learn">References & Guides
                <svg class="icon icon-caret-down" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28">
    <path d="M16 11a.99.99 0 0 1-.297.703l-7 7C8.516 18.89 8.265 19 8 19s-.516-.109-.703-.297l-7-7A.996.996 0 0 1 0 11c0-.547.453-1 1-1h14c.547 0 1 .453 1 1z"/>
</svg>
            </a>
            <div class="submenu js-submenu" id="nav-learn-submenu">
                <div class="submenu-column">
                  <ul>
                    <li><a href="/en-US/docs/Learn">Learn web development</a></li>
                    <li><a href="/en-US/docs/Web/Tutorials">Tutorials</a></li>
                    <li><a href="/en-US/docs/Web/Reference">References</a></li>
                    <li><a href="/en-US/docs/Web/Guide">Developer Guides</a></li>
                    <li><a href="/en-US/docs/Web/Accessibility">Accessibility</a></li>
                    <li><a href="/en-US/docs/Games">Game development</a></li>
                    <li><a href="/en-US/docs/Web">...more docs</a></li>
                  </ul>
                </div>
            </div>
        </li>
        <li class="nav-main-item">
            <a href="/en-US/docs/MDN/Feedback">Feedback
                <svg class="icon icon-caret-down" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28">
    <path d="M16 11a.99.99 0 0 1-.297.703l-7 7C8.516 18.89 8.265 19 8 19s-.516-.109-.703-.297l-7-7A.996.996 0 0 1 0 11c0-.547.453-1 1-1h14c.547 0 1 .453 1 1z"/>
</svg>
            </a>
            <div class="submenu js-submenu" id="nav-contact-submenu">
              <div class="submenu-column">
                <ul>
                  <li>
                      <a href="https://support.mozilla.org/">Get Firefox help
                          <svg class="icon icon-external-link" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13A4.502 4.502 0 0 1 0 19.5v-13C0 4.016 2.016 2 4.5 2h11c.281 0 .5.219.5.5v1c0 .281-.219.5-.5.5h-11A2.507 2.507 0 0 0 2 6.5v13C2 20.875 3.125 22 4.5 22h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-.281.219-.5.5-.5h1c.281 0 .5.219.5.5zM28 1v8c0 .547-.453 1-1 1a.99.99 0 0 1-.703-.297l-2.75-2.75L13.36 17.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-1.781-1.781c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359L21.048 4.454l-2.75-2.75a.996.996 0 0 1-.297-.703c0-.547.453-1 1-1h8c.547 0 1 .453 1 1z"/>
</svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://stackoverflow.com/">Get web development help
                          <svg class="icon icon-external-link" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13A4.502 4.502 0 0 1 0 19.5v-13C0 4.016 2.016 2 4.5 2h11c.281 0 .5.219.5.5v1c0 .281-.219.5-.5.5h-11A2.507 2.507 0 0 0 2 6.5v13C2 20.875 3.125 22 4.5 22h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-.281.219-.5.5-.5h1c.281 0 .5.219.5.5zM28 1v8c0 .547-.453 1-1 1a.99.99 0 0 1-.703-.297l-2.75-2.75L13.36 17.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-1.781-1.781c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359L21.048 4.454l-2.75-2.75a.996.996 0 0 1-.297-.703c0-.547.453-1 1-1h8c.547 0 1 .453 1 1z"/>
</svg>
                      </a>
                  </li>
                </ul>
                <ul>
                  <li>
                      <a href="/en-US/docs/MDN/Community">Join the MDN community</a>
                  </li>
                  <li>
                      <a target="_blank" href="https://bugzilla.mozilla.org/form.doc?bug_file_loc=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Report a content problem
                          <svg class="icon icon-external-link" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13A4.502 4.502 0 0 1 0 19.5v-13C0 4.016 2.016 2 4.5 2h11c.281 0 .5.219.5.5v1c0 .281-.219.5-.5.5h-11A2.507 2.507 0 0 0 2 6.5v13C2 20.875 3.125 22 4.5 22h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-.281.219-.5.5-.5h1c.281 0 .5.219.5.5zM28 1v8c0 .547-.453 1-1 1a.99.99 0 0 1-.703-.297l-2.75-2.75L13.36 17.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-1.781-1.781c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359L21.048 4.454l-2.75-2.75a.996.996 0 0 1-.297-.703c0-.547.453-1 1-1h8c.547 0 1 .453 1 1z"/>
</svg>
                      </a>
                  </li>
                  <li>
                      <a target="_blank" href="https://bugzilla.mozilla.org/form.mdn">Report a bug
                          <svg class="icon icon-external-link" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13A4.502 4.502 0 0 1 0 19.5v-13C0 4.016 2.016 2 4.5 2h11c.281 0 .5.219.5.5v1c0 .281-.219.5-.5.5h-11A2.507 2.507 0 0 0 2 6.5v13C2 20.875 3.125 22 4.5 22h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-.281.219-.5.5-.5h1c.281 0 .5.219.5.5zM28 1v8c0 .547-.453 1-1 1a.99.99 0 0 1-.703-.297l-2.75-2.75L13.36 17.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-1.781-1.781c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359L21.048 4.454l-2.75-2.75a.996.996 0 0 1-.297-.703c0-.547.453-1 1-1h8c.547 0 1 .453 1 1z"/>
</svg>
                      </a>
                  </li>
                </ul>
              </div>
          </div>
      </li>
  </ul>
</nav>
        <div id="toolbox" class="toolbox">
  <ul>
    
    <li class="nav-login"><div class="login">
    
        
        <a href="/users/github/login/?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2Ffrom" class="login-link js-login-link" data-service="GitHub" rel="nofollow">
            Sign in<svg class="icon icon-github" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
    <title>Github</title>
    <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-.609.109-.828-.266-.828-.578 0-.391.016-1.687.016-3.297 0-1.125-.375-1.844-.812-2.219 2.672-.297 5.484-1.313 5.484-5.922 0-1.313-.469-2.375-1.234-3.219.125-.313.531-1.531-.125-3.187-1-.313-3.297 1.234-3.297 1.234a11.28 11.28 0 0 0-6 0S6.704 6.656 5.704 6.969c-.656 1.656-.25 2.875-.125 3.187-.766.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-.344.313-.656.844-.766 1.609-.688.313-2.438.844-3.484-1-.656-1.141-1.844-1.234-1.844-1.234-1.172-.016-.078.734-.078.734.781.359 1.328 1.75 1.328 1.75.703 2.141 4.047 1.422 4.047 1.422 0 1 .016 1.937.016 2.234 0 .313-.219.688-.828.578C3.439 23.796.002 19.296.002 13.999c0-6.625 5.375-12 12-12zM4.547 19.234c.031-.063-.016-.141-.109-.187-.094-.031-.172-.016-.203.031-.031.063.016.141.109.187.078.047.172.031.203-.031zm.484.532c.063-.047.047-.156-.031-.25-.078-.078-.187-.109-.25-.047-.063.047-.047.156.031.25.078.078.187.109.25.047zm.469.703c.078-.063.078-.187 0-.297-.063-.109-.187-.156-.266-.094-.078.047-.078.172 0 .281s.203.156.266.109zm.656.656c.063-.063.031-.203-.063-.297-.109-.109-.25-.125-.313-.047-.078.063-.047.203.063.297.109.109.25.125.313.047zm.891.391c.031-.094-.063-.203-.203-.25-.125-.031-.266.016-.297.109s.063.203.203.234c.125.047.266 0 .297-.094zm.984.078c0-.109-.125-.187-.266-.172-.141 0-.25.078-.25.172 0 .109.109.187.266.172.141 0 .25-.078.25-.172zm.906-.156c-.016-.094-.141-.156-.281-.141-.141.031-.234.125-.219.234.016.094.141.156.281.125s.234-.125.219-.219z"/>
</svg>
        </a>
    
</div></li>
  </ul>
</div>
      </div>
      <form id="nav-main-search" action="/en-US/search" method="get" role="search" class="nav-main-search">
  <div class="search-wrap">
    <label for="main-q" class="offscreen">Search</label>
    <input type="search" id="main-q" name="q" placeholder="Search" data-value="" value="" aria-hidden="true" />
    <span class="search-trigger">
        <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" aria-hidden="true">
    <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zm8 13c0 1.094-.906 2-2 2a1.96 1.96 0 0 1-1.406-.594l-5.359-5.344a10.971 10.971 0 0 1-6.234 1.937c-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-.672 4.406-1.937 6.234l5.359 5.359c.359.359.578.875.578 1.406z"/>
</svg>
    </span>
    <button type="submit" class="offscreen">Search</button>
    <button type="button" id="close-header-search" class="close-header-search transparent">
        <span class="offscreen">Close search</span>
        <svg class="icon icon-close" xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" aria-hidden="true">
    <path d="M20.281 20.656c0 .391-.156.781-.438 1.062l-2.125 2.125c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438L11 19.249l-4.594 4.594c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-2.125-2.125c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062L6.751 15l-4.594-4.594c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438L11 10.751l4.594-4.594c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062s-.156.781-.438 1.062L15.249 15l4.594 4.594c.281.281.438.672.438 1.062z"/>
</svg>
    </button>
  </div>
</form>
    </header> 

  <!-- Content will go here -->
  <main id="content">
      
  <!-- heading -->
  <div id="wiki-document-head" class="document-head">
    <div class="center">
      <!-- action buttons -->
      <div class="document-actions">
        

  
    
  

  
    
  

  

  <ul class="page-buttons">
      <li>
          <button id="languages-menu" class="transparent" aria-haspopup="true" aria-owns="languages-menu-submenu" aria-expanded="false">
              <svg class="icon icon-language" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
    <path d="M10.219 16.844c-.031.109-.797-.25-1-.328-.203-.094-1.125-.609-1.359-.766s-1.125-.891-1.234-.938a28.275 28.275 0 0 1-2.094 2.828c-.281.328-1.125 1.391-1.641 1.719-.078.047-.531.094-.594.063.25-.187.969-1.078 1.281-1.437.391-.453 2.25-3.047 2.562-3.641.328-.594 1.312-2.562 1.359-2.75-.156-.016-1.391.406-1.719.516-.313.094-1.172.297-1.234.344-.063.063-.016.25-.047.313s-.313.203-.484.234a1.647 1.647 0 0 1-.734 0c-.203-.047-.391-.25-.438-.328 0 0-.063-.094-.078-.359.187-.063.5-.078.844-.172s1.188-.344 1.641-.5 1.328-.484 1.594-.547c.281-.047.984-.516 1.359-.641s.641-.281.656-.203 0 .422-.016.516c-.016.078-.766 1.547-.875 1.781-.063.125-.5.953-1.203 2.047.25.109.781.328 1 .438.266.125 2.125.906 2.219.938s.266.75.234.875zM7.016 9.25c.047.266-.031.375-.063.438-.156.297-.547.5-.781.594s-.625.187-.938.187c-.141-.016-.422-.063-.766-.406-.187-.203-.328-.75-.266-.688s.516.125.719.078.688-.187.906-.25c.234-.078.703-.203.859-.219.156 0 .281.063.328.266zm10.906 2.016l.984 3.547-2.172-.656zM.609 23.766l10.844-3.625V4.016L.609 7.657v16.109zM20 18.813l1.594.484-2.828-10.266-1.563-.484-3.375 8.375 1.594.484.703-1.719 3.297 1.016zM12.141 3.781l8.953 2.875V.718zM17 24.453l2.469.203-.844 2.5L18 26.125c-1.266.812-2.828 1.437-4.312 1.687-.453.094-.969.187-1.422.187h-1.313c-1.656 0-4.672-.984-5.984-1.937-.094-.078-.125-.141-.125-.25 0-.172.125-.297.281-.297.141 0 .875.453 1.078.547 1.406.703 3.375 1.344 4.953 1.344 1.953 0 3.281-.25 5.063-1.016.516-.234.969-.531 1.453-.797zm7-16.859v16.859c-12.078-3.844-12.094-3.844-12.094-3.844C11.656 20.718.453 24.5.297 24.5a.3.3 0 0 1-.281-.203c0-.016-.016-.031-.016-.047V7.406c.016-.047.031-.125.063-.156.094-.109.219-.141.313-.172.047-.016 1-.328 2.328-.781v-6l8.719 3.094C11.532 3.36 21.251 0 21.392 0c.172 0 .313.125.313.328v6.531z"/>
</svg>
              <span>Languages</span>
          </button>

        <div class="submenu js-submenu" id="languages-menu-submenu">
          <div class="submenu-column">
            <ul id="translations">
              
                
                
                
                  <li><bdi><a rel="internal" href="/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="de" title="German">Deutsch (de)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from" data-locale="es" title="Spanish">Español (es)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from" data-locale="fr" title="French">Français (fr)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/id/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="id" title="Indonesian">Bahasa Indonesia (id)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/it/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="it" title="Italian">Italiano (it)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="ja" title="Japanese">日本語 (ja)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="ko" title="Korean">한국어 (ko)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/from" data-locale="pl" title="Polish">Polski (pl)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="pt-BR" title="Portuguese (Brazilian)">Português (do Brasil) (pt-BR)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="ru" title="Russian">Русский (ru)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="tr" title="Turkish">Türkçe (tr)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="zh-CN" title="Chinese (Simplified)">中文 (简体) (zh-CN)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from" data-locale="zh-TW" title="Chinese (Traditional)">正體中文 (繁體) (zh-TW)</a></bdi></li>
                
              

              
                <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$locales" rel="nofollow" id="translations-add">Add a translation</a></li>
              
            </ul>
          </div>
        </div>
      </li>
      
      <li class="page-buttons-edit">
          <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$edit" class="button neutral" id="edit-button" rel="nofollow">
              <svg class="icon icon-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
    <path d="M5.672 24l1.422-1.422-3.672-3.672L2 20.328V22h2v2h1.672zm8.172-14.5a.329.329 0 0 0-.344-.344.368.368 0 0 0-.266.109l-8.469 8.469a.366.366 0 0 0-.109.266c0 .203.141.344.344.344a.368.368 0 0 0 .266-.109l8.469-8.469a.366.366 0 0 0 .109-.266zM13 6.5l6.5 6.5-13 13H0v-6.5zM23.672 8c0 .531-.219 1.047-.578 1.406L20.5 12 14 5.5l2.594-2.578c.359-.375.875-.594 1.406-.594s1.047.219 1.422.594l3.672 3.656c.359.375.578.891.578 1.422z"/>
</svg>
              Edit
          </a>
      </li>
      

        

        <li class="page-buttons-advanced">
            <button id="advanced-menu" class="only-icon" aria-haspopup="true" aria-owns="advanced-menu-submenu" aria-expanded="false">
                <svg class="icon icon-gear" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
    <path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm8-1.703v3.469c0 .234-.187.516-.438.562l-2.891.438a8.86 8.86 0 0 1-.609 1.422c.531.766 1.094 1.453 1.672 2.156.094.109.156.25.156.391s-.047.25-.141.359c-.375.5-2.484 2.797-3.016 2.797a.795.795 0 0 1-.406-.141l-2.156-1.687a9.449 9.449 0 0 1-1.422.594c-.109.953-.203 1.969-.453 2.906a.573.573 0 0 1-.562.438h-3.469c-.281 0-.531-.203-.562-.469l-.438-2.875a9.194 9.194 0 0 1-1.406-.578l-2.203 1.672c-.109.094-.25.141-.391.141s-.281-.063-.391-.172c-.828-.75-1.922-1.719-2.578-2.625a.607.607 0 0 1 .016-.718c.531-.719 1.109-1.406 1.641-2.141a8.324 8.324 0 0 1-.641-1.547l-2.859-.422A.57.57 0 0 1 0 15.705v-3.469c0-.234.187-.516.422-.562l2.906-.438c.156-.5.359-.969.609-1.437a37.64 37.64 0 0 0-1.672-2.156c-.094-.109-.156-.234-.156-.375s.063-.25.141-.359c.375-.516 2.484-2.797 3.016-2.797.141 0 .281.063.406.156L7.828 5.94a9.449 9.449 0 0 1 1.422-.594c.109-.953.203-1.969.453-2.906a.573.573 0 0 1 .562-.438h3.469c.281 0 .531.203.562.469l.438 2.875c.484.156.953.344 1.406.578l2.219-1.672c.094-.094.234-.141.375-.141s.281.063.391.156c.828.766 1.922 1.734 2.578 2.656a.534.534 0 0 1 .109.344c0 .141-.047.25-.125.359-.531.719-1.109 1.406-1.641 2.141.266.5.484 1.016.641 1.531l2.859.438a.57.57 0 0 1 .453.562z"/>
</svg>
                <span>Advanced</span>
            </button>
            <div class="submenu js-submenu" id="advanced-menu-submenu">
                <!-- this page -->
                <div class="submenu-column">
                    <div class="title">Advanced</div>
                    <ul>
                        <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$history" rel="nofollow">History</a></li>
                        
                        
                        


                

                
                
                
                <li class="page-print"><a href="#" onclick="return window.print();">Print this article</a></li>
            </ul>
          </div>
        </div>
  </li></ul>
      </div>

      <div class="document-title">
        

        <h1>Array.from()</h1>
      </div>
    </div>
  </div>
  
  <div id="toc" class="toc">
    <div class="center">
      <div class="toc-head">Jump to:</div>
        <ol class="toc-links">
          <li><a href="#Syntax" rel="internal">Syntax</a><li><a href="#Description" rel="internal">Description</a><li><a href="#Examples" rel="internal">Examples</a><li><a href="#Polyfill" rel="internal">Polyfill</a><li><a href="#Specifications" rel="internal">Specifications</a><li><a href="#Browser_compatibility" rel="internal">Browser compatibility</a><li><a href="#See_also" rel="internal">See also</a>
        </ol>
    </div>
  </div>
  

      <div class="center clear">
      

    <div class="wiki-main-content" id="document-main"><div class="center">
      <!-- start the main content container -->
        <div id="wiki-column-container" class="wiki-left-present">

          <!-- content row with three strips -->
          <div class="column-container column-container-reverse">

            <!-- center: main article content -->
            <div id="wiki-content" class="column-main wiki-column text-content">

              

              
              

              

              
              

              <!-- just the article content -->
              <article id="wikiArticle">
                
                  
                    <div></div>

<p>The <code><strong>Array.from()</strong></code> method creates a new, shallow-copied <code>Array</code> instance from an array-like or iterable object.</p>

<div><iframe src="https://interactive-examples.mdn.mozilla.net/pages/js/array-from.html" class="interactive interactive-js " width="100%" frameborder="0" height="250"></iframe></div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples" class="external" rel="noopener">https://github.com/mdn/interactive-examples</a> and send us a pull request.</p>

<h2 id="Syntax">Syntax</h2>

<pre>Array.from(arrayLike[, mapFn[, thisArg]])
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>arrayLike</code></dt>
 <dd>An array-like or iterable object to convert to an array.</dd>
 <dt><code>mapFn</code><span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>Map function to call on every element of the array.</dd>
 <dt><code>thisArg</code><span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>Value to use as <code>this</code> when executing <code>mapFn</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects."><code>Array</code></a> instance.</p>

<h2 id="Description">Description</h2>

<p><code>Array.from()</code> lets you create <code>Arrays</code> from:</p>

<ul>
 <li>array-like objects (objects with a <code>length</code> property and indexed elements) or</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable objects</a> (objects where you can get its elements, such as <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" title="The Map object holds key-value pairs."><code>Map</code></a> and <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" title="The Set object lets you store unique values of any type, whether primitive values or object references."><code>Set</code></a>).</li>
</ul>

<p><code>Array.from()</code> has an optional parameter <code>mapFn</code>, which allows you to execute a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="The map() method creates a new array with the results of calling a provided function on every element in the calling array."><code>map</code></a> function on each element of the array (or subclass object) that is being created. More clearly,<code> Array.from(obj, mapFn, thisArg)</code> has the same result as <code>Array.from(obj).map(mapFn, thisArg)</code>, except that it does not create an intermediate array. This is especially important for certain array subclasses, like <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>, since the intermediate array would necessarily have values truncated to fit into the appropriate type.</p>

<p>The <code>length</code> property of the <code>from()</code> method is 1.</p>

<p>In ES2015, the class syntax allows for sub-classing of both built-in and user defined classes; as a result, static methods such as <code>Array.from</code> are "inherited" by subclasses of <code>Array</code> and create new instances of the subclass, not <code>Array</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Array_from_a_String">Array from a <code>String</code></h3>

<pre class="brush: js">Array.from('foo'); 
// ["f", "o", "o"]</pre>

<h3 id="Array_from_a_Set">Array from a <code>Set</code></h3>

<pre class="brush: js">var s = new Set(['foo', window]); 
Array.from(s); 
// ["foo", window]</pre>

<h3 id="Array_from_a_Map">Array from a <code>Map</code></h3>

<pre class="brush: js">var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

var mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

​​​​​​​Array.from(mapper.keys());
// ['1', '2'];
</pre>

<h3 id="Array_from_an_Array-like_object_(arguments)">Array from an Array-like object (arguments)</h3>

<pre class="brush: js">function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]</pre>

<h3 id="Using_arrow_functions_and_Array.from">Using arrow functions and <code>Array.from</code></h3>

<pre class="brush: js">// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x =&gt; x + x);      
// [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) =&gt; i);
// [0, 1, 2, 3, 4]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><code>Array.from</code> was added to the ECMA-262 standard in the 6th edition (ES2015); as such it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of <code>Array.from</code> in implementations that don't natively support it.  This algorithm is exactly the one specified in ECMA-262, 6th edition, assuming <code>Object</code> and <code>TypeError</code> have their original values and that <code>callback.call</code> evaluates to the original value of <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="The call() method calls a function with a given this value and arguments provided individually."><code>Function.prototype.call</code></a>. In addition, since true iterables can not be polyfilled, this implementation does not support generic iterables as defined in the 6th edition of ECMA-262.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number &gt; 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length &gt; 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length &gt; 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k &lt; len… (also steps a - h)
      var kValue;
      while (k &lt; len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-array.from" hreflang="en" lang="en" class="external" rel="noopener">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of 'Array.from' in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.from" hreflang="en" lang="en" class="external" rel="noopener">ECMAScript Latest Draft (ECMA-262)<br><small lang="en-US">The definition of 'Array.from' in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>
<div class="hidden">The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data" class="external" rel="noopener">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</div>

<p></p><div class="bc-old"><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
    <ul>
    <li class="selected">
    <a>Desktop</a>
    </li>
    <li>
    <a>Mobile</a>
    </li>
    </ul>
    </div><div id="compat-desktop"><table class="compat-table"><thead><tr><th>Feature</th><th>Chrome</th><th>Edge</th><th>Firefox</th><th>Internet Explorer</th><th>Opera</th><th>Safari</th></tr></thead><tbody><tr><td><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Basic support</a></td><td class="full-support">45</td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support">32</td><td class="no-support"><span title="No support">
      No</span></td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support">9</td></tr></tbody></table></div><div id="compat-mobile"><table class="compat-table"><thead><tr><th>Feature</th><th>Android webview</th><th>Chrome for Android</th><th>Edge mobile</th><th>Firefox for Android</th><th>Opera Android</th><th>iOS Safari</th><th>Samsung Internet</th></tr></thead><tbody><tr><td><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Basic support</a></td><td class="unknown-support"><span title="Compatibility unknown; please update this.">
      ?</span></td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support">32</td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td><td class="full-support"><span title="Please update this with the earliest version of support.">
      Yes</span></td></tr></tbody></table></div></div><div class="bc-data hidden"><table class="bc-table bc-table-js"><thead><tr class="bc-platforms"><td></td><th colspan="6" class="bc-platform-desktop"><abbr class="only-icon" title="Desktop"><span>Desktop</span><i class="ic-desktop"></i></abbr></th><th colspan="7" class="bc-platform-mobile"><abbr class="only-icon" title="Mobile"><span>Mobile</span><i class="ic-mobile"></i></abbr></th><th colspan="1" class="bc-platform-server"><abbr class="only-icon" title="Server"><span>Server</span><i class="ic-server"></i></abbr></th></tr><tr class="bc-browsers"><td></td><th class="bc-browser-chrome"><abbr class="only-icon" title="Chrome"><span>Chrome</span><i class="ic-chrome"></i></abbr></th><th class="bc-browser-edge"><abbr class="only-icon" title="Edge"><span>Edge</span><i class="ic-edge"></i></abbr></th><th class="bc-browser-firefox"><abbr class="only-icon" title="Firefox"><span>Firefox</span><i class="ic-firefox"></i></abbr></th><th class="bc-browser-ie"><abbr class="only-icon" title="Internet Explorer"><span>Internet Explorer</span><i class="ic-ie"></i></abbr></th><th class="bc-browser-opera"><abbr class="only-icon" title="Opera"><span>Opera</span><i class="ic-opera"></i></abbr></th><th class="bc-browser-safari"><abbr class="only-icon" title="Safari"><span>Safari</span><i class="ic-safari"></i></abbr></th><th class="bc-browser-webview_android"><abbr class="only-icon" title="Android webview"><span>Android webview</span><i class="ic-webview_android"></i></abbr></th><th class="bc-browser-chrome_android"><abbr class="only-icon" title="Chrome for Android"><span>Chrome for Android</span><i class="ic-chrome_android"></i></abbr></th><th class="bc-browser-edge_mobile"><abbr class="only-icon" title="Edge Mobile"><span>Edge Mobile</span><i class="ic-edge_mobile"></i></abbr></th><th class="bc-browser-firefox_android"><abbr class="only-icon" title="Firefox for Android"><span>Firefox for Android</span><i class="ic-firefox_android"></i></abbr></th><th class="bc-browser-opera_android"><abbr class="only-icon" title="Opera for Android"><span>Opera for Android</span><i class="ic-opera_android"></i></abbr></th><th class="bc-browser-safari_ios"><abbr class="only-icon" title="iOS Safari"><span>iOS Safari</span><i class="ic-safari_ios"></i></abbr></th><th class="bc-browser-samsunginternet_android"><abbr class="only-icon" title="Samsung Internet"><span>Samsung Internet</span><i class="ic-samsunginternet_android"></i></abbr></th><th class="bc-browser-nodejs"><abbr class="only-icon" title="Node.js"><span>Node.js</span><i class="ic-nodejs"></i></abbr></th></tr></thead><tbody><tr><th scope="row">Basic support</th><td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              45</td><td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              32</td><td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-unknown bc-browser-webview_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-edge_mobile"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              32</td><td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-nodejs"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td></tr></tbody></table><section id="sect1" class="bc-legend"><h3 id="Legend" class="offscreen">Legend</h3><dl><dt><span class="bc-supports-yes bc-supports">
                <abbr class="bc-level bc-level-yes only-icon" title="Full support">
                 <span>Full support</span>
                  
                </abbr></span></dt><dd>Full support</dd><dt><span class="bc-supports-no bc-supports">
                <abbr class="bc-level bc-level-no only-icon" title="No support">
                 <span>No support</span>
                  
                </abbr></span></dt><dd>No support</dd><dt><span class="bc-supports-unknown bc-supports">
                <abbr class="bc-level bc-level-unknown only-icon" title="Compatibility unknown">
                 <span>Compatibility unknown</span>
                  
                </abbr></span></dt><dd>Compatibility unknown</dd></dl></section></div><p></p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects."><code>Array</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="The map() method creates a new array with the results of calling a provided function on every element in the calling array."><code>Array.prototype.map()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from" title="The TypedArray.from() method creates a new typed array from an array-like or iterable object. This method is nearly the same as Array.from()."><code>TypedArray.from()</code></a></li>
</ul>
                  
                
              </article>

              <!-- contributors -->
              <div class="wiki-block contributors">
                <h2 class="offscreen">Document Tags and Contributors</h2>
                
                
  <div class="tag-attach-list contributors-sub">
    <svg class="icon icon-tags" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" aria-hidden="true">
    <path d="M7 7c0-1.109-.891-2-2-2s-2 .891-2 2 .891 2 2 2 2-.891 2-2zm16.672 9c0 .531-.219 1.047-.578 1.406l-7.672 7.688c-.375.359-.891.578-1.422.578s-1.047-.219-1.406-.578L1.422 13.906C.625 13.125 0 11.609 0 10.5V4c0-1.094.906-2 2-2h6.5c1.109 0 2.625.625 3.422 1.422l11.172 11.156c.359.375.578.891.578 1.422zm6 0c0 .531-.219 1.047-.578 1.406l-7.672 7.688a2.08 2.08 0 0 1-1.422.578c-.812 0-1.219-.375-1.75-.922l7.344-7.344c.359-.359.578-.875.578-1.406s-.219-1.047-.578-1.422L14.422 3.422C13.625 2.625 12.11 2 11 2h3.5c1.109 0 2.625.625 3.422 1.422l11.172 11.156c.359.375.578.891.578 1.422z"/>
</svg>
    <strong>Tags:</strong>&nbsp;
    <ul class="tags tags-small">
      
        <li><a href="/en-US/docs/tag/Array" rel="nofollow">Array</a></li>
      
        <li><a href="/en-US/docs/tag/ECMAScript%202015" rel="nofollow">ECMAScript 2015</a></li>
      
        <li><a href="/en-US/docs/tag/JavaScript" rel="nofollow">JavaScript</a></li>
      
        <li><a href="/en-US/docs/tag/Method" rel="nofollow">Method</a></li>
      
        <li><a href="/en-US/docs/tag/polyfill" rel="nofollow">polyfill</a></li>
      
        <li><a href="/en-US/docs/tag/Reference" rel="nofollow">Reference</a></li>
      
    </ul>
  </div>


                
                  <div class="contributors-sub">
                    <svg class="icon icon-group" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" aria-hidden="true">
    <path d="M9.266 14a5.532 5.532 0 0 0-4.141 2H3.031C1.468 16 0 15.25 0 13.516 0 12.25-.047 8 1.937 8c.328 0 1.953 1.328 4.062 1.328.719 0 1.406-.125 2.078-.359A7.624 7.624 0 0 0 7.999 10c0 1.422.453 2.828 1.266 4zM26 23.953C26 26.484 24.328 28 21.828 28H8.172C5.672 28 4 26.484 4 23.953 4 20.422 4.828 15 9.406 15c.531 0 2.469 2.172 5.594 2.172S20.063 15 20.594 15C25.172 15 26 20.422 26 23.953zM10 4c0 2.203-1.797 4-4 4S2 6.203 2 4s1.797-4 4-4 4 1.797 4 4zm11 6c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zm9 3.516C30 15.25 28.531 16 26.969 16h-2.094a5.532 5.532 0 0 0-4.141-2A7.066 7.066 0 0 0 22 10a7.6 7.6 0 0 0-.078-1.031A6.258 6.258 0 0 0 24 9.328C26.109 9.328 27.734 8 28.062 8c1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"/>
</svg>
                    <strong>Contributors to this page:</strong>
                    
        <a href="/en-US/profiles/SphinxKnight">SphinxKnight</a>, 
    
        <a href="/en-US/profiles/levarne.sobotker">levarne.sobotker</a>, 
    
        <a href="/en-US/profiles/sreuter">sreuter</a>, 
    
        <a href="/en-US/profiles/Konrud">Konrud</a>, 
    
        <a href="/en-US/profiles/zhuangyin">zhuangyin</a>, 
    
        <a href="/en-US/profiles/wbamberg">wbamberg</a>, 
    
        <a href="/en-US/profiles/rwaldron">rwaldron</a>, 
    
        <a href="/en-US/profiles/fscholz">fscholz</a>, 
    
        <a href="/en-US/profiles/erikadoyle">erikadoyle</a>, 
    
        <a href="/en-US/profiles/LJHarb">LJHarb</a>, 
    
        <a href="/en-US/profiles/mohitgarg">mohitgarg</a>, 
    
        <a href="/en-US/profiles/Aldomolina">Aldomolina</a>, 
    
        <a href="/en-US/profiles/xgqfrms-GitHub">xgqfrms-GitHub</a>, 
    
        <a href="/en-US/profiles/oksana-khristenko">oksana-khristenko</a>, 
    
        <a href="/en-US/profiles/nmve">nmve</a>, 
    
        <a href="/en-US/profiles/kdex">kdex</a>, 
    
        <a href="/en-US/profiles/domfarolino">domfarolino</a>, 
    
        <a href="/en-US/profiles/RussVanBert">RussVanBert</a>, 
    
        <a href="/en-US/profiles/gnclmorais">gnclmorais</a>, 
    
        <a href="/en-US/profiles/NiB18">NiB18</a>, 
    
        <a href="/en-US/profiles/Kovensky">Kovensky</a>, 
    
        <a href="/en-US/profiles/eduardoboucas">eduardoboucas</a>, 
    
        <a href="/en-US/profiles/solaman">solaman</a>, 
    
        <a href="/en-US/profiles/Hywan">Hywan</a>, 
    
        <a href="/en-US/profiles/matthavener">matthavener</a>, 
    
        <a href="/en-US/profiles/awalGarg">awalGarg</a>, 
    
        <a href="/en-US/profiles/yan">yan</a>, 
    
        <a href="/en-US/profiles/Sheppy">Sheppy</a>, 
    
        <a href="/en-US/profiles/Mingun">Mingun</a>, 
    
        <a href="/en-US/profiles/DomenicDenicola">DomenicDenicola</a>, 
    
        <a href="/en-US/profiles/ziyunfei">ziyunfei</a>
    
                  </div>
                

                
                  <div class="contributors-sub">
                    <svg class="icon icon-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
    <path d="M14 8.5v7c0 .281-.219.5-.5.5h-5a.494.494 0 0 1-.5-.5v-1c0-.281.219-.5.5-.5H12V8.5c0-.281.219-.5.5-.5h1c.281 0 .5.219.5.5zm6.5 5.5c0-4.688-3.813-8.5-8.5-8.5S3.5 9.313 3.5 14s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5zm3.5 0c0 6.625-5.375 12-12 12S0 20.625 0 14 5.375 2 12 2s12 5.375 12 12z"/>
</svg>
                    <strong>Last updated by:</strong>
                    <a href="/en-US/profiles/SphinxKnight">SphinxKnight</a>,
                    <time datetime="2018-05-29T02:44:37.195984-07:00">May 29, 2018, 2:44:37 AM</time>
                  </div>
                
              </div>
            </div>

            
              <!-- quick links and zone subnav strip -->
              <div id="wiki-left" class="column-strip wiki-column">

                
                  <!-- crumbs -->
                  
  
    <nav class="crumbs" role="navigation">
      <ol typeof="BreadcrumbList" vocab="https://schema.org/" aria-label="breadcrumbs">
        
          <li property="itemListElement" typeof="ListItem" class="crumb">
            <a href="/en-US/docs/Web" property="item" typeof="WebPage">
              <span property="name">Web technology for developers</span>
            </a>
            <meta property="position" content="1">
          </li>
        
          <li property="itemListElement" typeof="ListItem" class="crumb">
            <a href="/en-US/docs/Web/JavaScript" property="item" typeof="WebPage">
              <span property="name">JavaScript</span>
            </a>
            <meta property="position" content="2">
          </li>
        
          <li property="itemListElement" typeof="ListItem" class="crumb">
            <a href="/en-US/docs/Web/JavaScript/Reference" property="item" typeof="WebPage">
              <span property="name">JavaScript reference</span>
            </a>
            <meta property="position" content="3">
          </li>
        
          <li property="itemListElement" typeof="ListItem" class="crumb">
            <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects" property="item" typeof="WebPage">
              <span property="name">Standard built-in objects</span>
            </a>
            <meta property="position" content="4">
          </li>
        
          <li property="itemListElement" typeof="ListItem" class="crumb">
            <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" property="item" typeof="WebPage">
              <span property="name">Array</span>
            </a>
            <meta property="position" content="5">
          </li>
        
        <li property="itemListElement" typeof="ListItem" class="crumb">
          <span property="name">Array.from()</span>
        </li>
      </ol>
    </nav>
  
                

                

                
                  <!-- quick links -->
                  
  <div class="quick-links" id="quick-links">
    <div class="quick-links-head">Related Topics</div>
    <ol><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects">Standard built-in objects</a></strong></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a></strong></li><li data-default-state="open"><a href="#"><strong>Properties</strong></a><ol><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array."><code>Array.length</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="The Array.prototype property represents the prototype for the Array constructor and allows you to add new properties and methods to all Array objects."><code>Array.prototype</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables" title="The @@unscopable symbol property contains property names that were not included in the ECMAScript standard prior to the ES2015 version. These properties are excluded from with statement bindings."><code>Array.prototype[@@unscopables]</code></a></li></ol></li><li data-default-state="open"><a href="#"><strong>Methods</strong></a><ol><li><em><code>Array.from()</code></em></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" title="The Array.isArray() method determines whether the passed value is an Array."><code>Array.isArray()</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="The Array.observe() method was used for asynchronously observing changes to Arrays, similar to Object.observe() for objects. It provided a stream of changes in order of occurrence. It's equivalent to Object.observe() invoked with the accept type list [&quot;add&quot;, &quot;update&quot;, &quot;delete&quot;, &quot;splice&quot;]. However, this API has been deprecated and removed from Browsers. You can use the more general Proxy object instead."><code>Array.observe()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."><code>Array.of()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."><code>Array.prototype.concat()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size."><code>Array.prototype.copyWithin()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array."><code>Array.prototype.entries()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="The every() method tests whether all elements in the array pass the test implemented by the provided function."><code>Array.prototype.every()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included."><code>Array.prototype.fill()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="The filter() method creates a new array with all elements that pass the test implemented by the provided function."><code>Array.prototype.filter()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."><code>Array.prototype.find()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned."><code>Array.prototype.findIndex()</code></a></li><li><span class="sidebar-icon"><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" title="The flat() method creates a new array with all sub-array elements concatted into it recursively up to the specified depth."><code>Array.prototype.flat()</code></a></li><li><span class="sidebar-icon"><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap" title="The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is quite often useful and merging both into one method is slightly more efficient."><code>Array.prototype.flatMap()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="The forEach() method executes a provided function once for each array element."><code>Array.prototype.forEach()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="The includes() method determines whether an array includes a certain element, returning true or false as appropriate. It uses the sameValueZero algorithm to determine whether the given element is found."><code>Array.prototype.includes()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."><code>Array.prototype.indexOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="The join() method joins all elements of an array (or an array-like object) into a string and returns this string."><code>Array.prototype.join()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="The keys() method returns a new Array Iterator object that contains the keys for each index in the array."><code>Array.prototype.keys()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."><code>Array.prototype.lastIndexOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="The map() method creates a new array with the results of calling a provided function on every element in the calling array."><code>Array.prototype.map()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="The pop() method removes the last element from an array and returns that element. This method changes the length of the array."><code>Array.prototype.pop()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="The push() method adds one or more elements to the end of an array and returns the new length of the array."><code>Array.prototype.push()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" title="The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value."><code>Array.prototype.reduce()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight" title="The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value."><code>Array.prototype.reduceRight()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."><code>Array.prototype.reverse()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array."><code>Array.prototype.shift()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."><code>Array.prototype.slice()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="The some() method tests whether at least one element in the array passes the test implemented by the provided function."><code>Array.prototype.some()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points."><code>Array.prototype.sort()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" title="The splice() method changes the contents of an array by removing existing elements and/or adding new elements."><code>Array.prototype.splice()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."><code>Array.prototype.toLocaleString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource" title="The toSource() method returns a string representing the source code of the array."><code>Array.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="The toString() method returns a string representing the specified array and its elements."><code>Array.prototype.toString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."><code>Array.prototype.unshift()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="The values() method returns a new Array Iterator object that contains the values for each index in the array."><code>Array.prototype.values()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator" title="The initial value of the @@iterator property is the same function object as the initial value of the values() property."><code>Array.prototype[@@iterator]()</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve" title="The Array.unobserve() method was used to remove observers set by Array.observe(), but has been deprecated and removed from Browsers. You can use the more general Proxy object instead."><code>Array.unobserve()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species" title="The Array[@@species] accessor property returns the Array constructor."><code>get Array[@@species]</code></a></li></ol></li><li><strong>Inheritance:</strong></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a></strong></li><li><a href="#"><strong>Properties</strong></a><ol><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments" title="The function.arguments property refers to an an array-like object corresponding to the arguments passed to a function. Use the simple variable arguments instead. This property is forbidden in strict model due to tail call optimization."><code>Function.arguments</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity" title="The arity property used to return the number of arguments expected by the function, however, it no longer exists and has been replaced by the Function.prototype.length property."><code>Function.arity</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller" title="The function.caller property returns the function that invoked the specified function. This property is forbidden in strict model due to tail call optimization."><code>Function.caller</code></a></li><li><span class="sidebar-icon"><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName" title="The function.displayName property returns the display name of the function."><code>Function.displayName</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length" title="The length property indicates the number of arguments expected by the function."><code>Function.length</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name" title="A Function object's read-only name property indicates the function's name as specified when it was created, or &quot;anonymous&quot; for functions created anonymously."><code>Function.name</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="The Function.prototype property represents the Function prototype object."><code>Function.prototype</code></a></li></ol></li><li><a href="#"><strong>Methods</strong></a><ol><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)."><code>Function.prototype.apply()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" title="The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called."><code>Function.prototype.bind()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="The call() method calls a function with a given this value and arguments provided individually."><code>Function.prototype.call()</code></a></li><li><span class="sidebar-icon"><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></span><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator" title="The non-standard isGenerator() method used to determine whether or not a function is a generator. It has been removed from Firefox starting with version 58."><code>Function.prototype.isGenerator()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Function.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" title="The toString() method returns a string representing the source code of the function."><code>Function.prototype.toString()</code></a></li></ol></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a></strong></li><li><a href="#"><strong>Properties</strong></a><ol><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/count" title="The __count__ property used to store the count of enumerable properties on the object, but it has been removed."><code>Object.prototype.__count__</code></a></s></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod" title="The __noSuchMethod__ property used to reference a function to be executed when a non-existent method is called on an object, but this function is no longer available."><code>Object.prototype.__noSuchMethod__</code></a></s></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent" title="The __parent__ property used to point to an object's context, but it has been removed."><code>Object.prototype.__parent__</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto" title="The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed."><code>Object.prototype.__proto__</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" title="Returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and &quot;test&quot;."><code>Object.prototype.constructor</code></a></li></ol></li><li><a href="#"><strong>Methods</strong></a><ol><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="The __defineGetter__ method binds an object's property to a function to be called when that property is looked up."><code>Object.prototype.__defineGetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__" title="The __defineSetter__ method binds an object's property to a function to be called when an attempt is made to set that property."><code>Object.prototype.__defineSetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__" title="The __lookupGetter__ method returns the function bound as a getter to the specified property."><code>Object.prototype.__lookupGetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__" title="The __lookupSetter__ method returns the function bound as a setter to the specified property."><code>Object.prototype.__lookupSetter__()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)."><code>Object.prototype.hasOwnProperty()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" title="The isPrototypeOf() method checks if an object exists in another object's prototype chain."><code>Object.prototype.isPrototypeOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable."><code>Object.prototype.propertyIsEnumerable()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes."><code>Object.prototype.toLocaleString()</code></a></li><li><span class="sidebar-icon"><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Object.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="The toString() method returns a string representing the object."><code>Object.prototype.toString()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch" title="The unwatch() method removes a watchpoint set with the watch() method."><code>Object.prototype.unwatch()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="The valueOf() method returns the primitive value of the specified object."><code>Object.prototype.valueOf()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="The watch() method watches for a property to be assigned a value and runs a function when that occurs."><code>Object.prototype.watch()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."><code>Object.setPrototypeOf()</code></a></li></ol></li></ol>
  </div>
                

                <!-- approvals -->
                

              </div>
            
          </div>
        </div>
      </div>
    </div> <!-- ends "main-content" -->

    
      <div class="newsletter-box">
        <div class="newsletter">
    <form id="newsletterForm" class="newsletter-form nodisable" name="newsletter-form" action="https://www.mozilla.org/en-US/newsletter/" method="post">
        <div class="newsletter-head">
            <h2 class="newsletter-teaser">Learn the best of web development</h2>
            <p class="newsletter-description">Get the latest and greatest from MDN delivered straight to your inbox.</p>
            
        </div>

        <div class="newsletter-fields">
            <input type="hidden" id="fmt" name="fmt" value="H">
            <input type="hidden" id="newsletterNewslettersInput" name="newsletters" value="app-dev" />
            <div id="newsletterErrors" class="newsletter-errors"></div>

            <div id="newsletterEmail" class="form-group newsletter-group-email">
                <label for="newsletterEmailInput" class="form-label offscreen">E-mail</label>
                <input type="email" id="newsletterEmailInput" name="email" class="form-input newsletter-input-email" required placeholder="you@example.com" size="30">
            </div>

            <div id="newsletterPrivacy" class="form-group form-group-agree newsletter-group-privacy hidden">
                <input type="checkbox" id="newsletterPrivacyInput" name="privacy" required>
                <label for="newsletterPrivacyInput">
                I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/">Privacy Policy</a>.
                </label>
            </div>
            <div id="newsletterSubmit" class="newsletter-group-submit">
                <button id="newsletter-submit" type="submit" class="button neutral newsletter-submit">
                    Sign up now<svg class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" aria-hidden="true">
    <path d="M23 15a2.01 2.01 0 0 1-.578 1.422L12.25 26.594c-.375.359-.891.578-1.422.578s-1.031-.219-1.406-.578L8.25 25.422c-.375-.375-.594-.891-.594-1.422s.219-1.047.594-1.422L12.828 18h-11C.703 18 0 17.062 0 16v-2c0-1.062.703-2 1.828-2h11L8.25 7.406a1.96 1.96 0 0 1 0-2.812l1.172-1.172c.375-.375.875-.594 1.406-.594s1.047.219 1.422.594l10.172 10.172c.375.359.578.875.578 1.406z"/>
</svg>
                </button>
            </div>
        </div>
    </form>
    <div id="newsletterThanks" class="newsletter-thanks hidden">
        <h2>Thanks! Please check your inbox to confirm your subscription.</h2>
        <p>If you haven’t previously confirmed a subscription to a Mozilla-related newsletter you may have to do so. Please check your inbox or your spam filter for an email from us.
        </p>
    </div>
    <button id="newsletterHide" type="button" class="only-icon newsletter-hide hidden">
        <span>Hide Newsletter Sign-up</span>
        <svg class="icon icon-close" xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" aria-hidden="true">
    <path d="M20.281 20.656c0 .391-.156.781-.438 1.062l-2.125 2.125c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438L11 19.249l-4.594 4.594c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-2.125-2.125c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062L6.751 15l-4.594-4.594c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438L11 10.751l4.594-4.594c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062s-.156.781-.438 1.062L15.249 15l4.594 4.594c.281.281.438.672.438 1.062z"/>
</svg>
    </button>
</div>
      </div>
    

  <menu type="context" id="edit-history-menu">
    <menuitem data-action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$edit" label="Edit page"></menuitem>
    <menuitem data-action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from$history" label="View page history"></menuitem>
  </menu>

      </div>
  </main>
  <!-- Footer -->
    <footer id="nav-footer" class="nav-footer">
      <div class="center">
          <a href="/en-US/" class="nav-footer-logo">MDN Web Docs</a>
<div class="footer-group footer-group-mdn">
  <h2 class="footer-title">MDN</h2>
  <ul class="footer-list">
    <li><a href="/en-US/docs/Web">Web Technologies</a></li>
    <li><a href="/en-US/docs/Learn">Learn Web Development</a></li>
    <li><a href="/docs/MDN/About">About MDN</a></li>
    <li><a href="/en-US/docs/MDN/Feedback">Feedback</a></li>
    <li class="footer-social">
        <a href="https://twitter.com/mozdevnet">
            <!-- Twitter -->
            <svg class="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
    <title>Twitter</title>
    <path d="M25.312 6.375a10.85 10.85 0 0 1-2.531 2.609c.016.219.016.438.016.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-.828-7.75-2.266.406.047.797.063 1.219.063 2.359 0 4.531-.797 6.266-2.156a5.056 5.056 0 0 1-4.719-3.5c.313.047.625.078.953.078.453 0 .906-.063 1.328-.172a5.048 5.048 0 0 1-4.047-4.953v-.063a5.093 5.093 0 0 0 2.281.641 5.044 5.044 0 0 1-2.25-4.203c0-.938.25-1.797.688-2.547a14.344 14.344 0 0 0 10.406 5.281 5.708 5.708 0 0 1-.125-1.156 5.045 5.045 0 0 1 5.047-5.047 5.03 5.03 0 0 1 3.687 1.594 9.943 9.943 0 0 0 3.203-1.219 5.032 5.032 0 0 1-2.219 2.781c1.016-.109 2-.391 2.906-.781z"/>
</svg>
        </a>
    </li>
    <li class="footer-social">
        <a href="https://github.com/mdn/">
            <!-- GitHub -->
            <svg class="icon icon-github" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
    <title>Github</title>
    <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-.609.109-.828-.266-.828-.578 0-.391.016-1.687.016-3.297 0-1.125-.375-1.844-.812-2.219 2.672-.297 5.484-1.313 5.484-5.922 0-1.313-.469-2.375-1.234-3.219.125-.313.531-1.531-.125-3.187-1-.313-3.297 1.234-3.297 1.234a11.28 11.28 0 0 0-6 0S6.704 6.656 5.704 6.969c-.656 1.656-.25 2.875-.125 3.187-.766.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-.344.313-.656.844-.766 1.609-.688.313-2.438.844-3.484-1-.656-1.141-1.844-1.234-1.844-1.234-1.172-.016-.078.734-.078.734.781.359 1.328 1.75 1.328 1.75.703 2.141 4.047 1.422 4.047 1.422 0 1 .016 1.937.016 2.234 0 .313-.219.688-.828.578C3.439 23.796.002 19.296.002 13.999c0-6.625 5.375-12 12-12zM4.547 19.234c.031-.063-.016-.141-.109-.187-.094-.031-.172-.016-.203.031-.031.063.016.141.109.187.078.047.172.031.203-.031zm.484.532c.063-.047.047-.156-.031-.25-.078-.078-.187-.109-.25-.047-.063.047-.047.156.031.25.078.078.187.109.25.047zm.469.703c.078-.063.078-.187 0-.297-.063-.109-.187-.156-.266-.094-.078.047-.078.172 0 .281s.203.156.266.109zm.656.656c.063-.063.031-.203-.063-.297-.109-.109-.25-.125-.313-.047-.078.063-.047.203.063.297.109.109.25.125.313.047zm.891.391c.031-.094-.063-.203-.203-.25-.125-.031-.266.016-.297.109s.063.203.203.234c.125.047.266 0 .297-.094zm.984.078c0-.109-.125-.187-.266-.172-.141 0-.25.078-.25.172 0 .109.109.187.266.172.141 0 .25-.078.25-.172zm.906-.156c-.016-.094-.141-.156-.281-.141-.141.031-.234.125-.219.234.016.094.141.156.281.125s.234-.125.219-.219z"/>
</svg>
        </a>
    </li>
  </ul>
</div>

          <a href="https://mozilla.org" class="nav-footer-mozilla">Mozilla</a>
<div class="footer-group footer-group-mozilla">
  <h2 class="footer-title">Mozilla</h2>
  <ul class="footer-list">
    <li><a href="https://www.mozilla.org/about/">About</a></li>
    <li><a href="https://www.mozilla.org/contact/">Contact Us</a></li>
    <li><a href="https://www.mozilla.org/firefox/?utm_source=developer.mozilla.org&utm_campaign=footer&utm_medium=referral">Firefox</a></li>
    <li class="footer-social">
        <a href="https://twitter.com/mozilla">
            <!-- Twitter -->
            <svg class="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
    <title>Twitter</title>
    <path d="M25.312 6.375a10.85 10.85 0 0 1-2.531 2.609c.016.219.016.438.016.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-.828-7.75-2.266.406.047.797.063 1.219.063 2.359 0 4.531-.797 6.266-2.156a5.056 5.056 0 0 1-4.719-3.5c.313.047.625.078.953.078.453 0 .906-.063 1.328-.172a5.048 5.048 0 0 1-4.047-4.953v-.063a5.093 5.093 0 0 0 2.281.641 5.044 5.044 0 0 1-2.25-4.203c0-.938.25-1.797.688-2.547a14.344 14.344 0 0 0 10.406 5.281 5.708 5.708 0 0 1-.125-1.156 5.045 5.045 0 0 1 5.047-5.047 5.03 5.03 0 0 1 3.687 1.594 9.943 9.943 0 0 0 3.203-1.219 5.032 5.032 0 0 1-2.219 2.781c1.016-.109 2-.391 2.906-.781z"/>
</svg>
        </a>
    </li>
    <li class="footer-social">
        <a href="https://www.facebook.com/mozilla">
            <!-- Facebook -->
            <svg class="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28">
    <title>Facebook</title>
    <path d="M14.984.187v4.125h-2.453c-1.922 0-2.281.922-2.281 2.25v2.953h4.578l-.609 4.625H10.25v11.859H5.469V14.14H1.485V9.515h3.984V6.109C5.469 2.156 7.891 0 11.422 0c1.687 0 3.141.125 3.563.187z"/>
</svg>
        </a>
    </li>
    <li class="footer-social">
        <a href="https://www.instagram.com/mozillagram/">
            <!-- Instagram -->
            <svg class="icon icon-instagram" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
    <title>Instagram</title>
    <path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm2.156 0c0 3.406-2.75 6.156-6.156 6.156S5.844 17.406 5.844 14 8.594 7.844 12 7.844s6.156 2.75 6.156 6.156zm1.688-6.406c0 .797-.641 1.437-1.437 1.437S16.97 8.39 16.97 7.594s.641-1.437 1.437-1.437 1.437.641 1.437 1.437zM12 4.156c-1.75 0-5.5-.141-7.078.484-.547.219-.953.484-1.375.906s-.688.828-.906 1.375c-.625 1.578-.484 5.328-.484 7.078s-.141 5.5.484 7.078c.219.547.484.953.906 1.375s.828.688 1.375.906c1.578.625 5.328.484 7.078.484s5.5.141 7.078-.484c.547-.219.953-.484 1.375-.906s.688-.828.906-1.375c.625-1.578.484-5.328.484-7.078s.141-5.5-.484-7.078c-.219-.547-.484-.953-.906-1.375s-.828-.688-1.375-.906C17.5 4.015 13.75 4.156 12 4.156zM24 14c0 1.656.016 3.297-.078 4.953-.094 1.922-.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656.094-3.297.078-4.953.078s-3.297.016-4.953-.078c-1.922-.094-3.625-.531-5.031-1.937S.173 20.875.08 18.953C-.014 17.297.002 15.656.002 14s-.016-3.297.078-4.953c.094-1.922.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-.094 3.297-.078 4.953-.078s3.297-.016 4.953.078c1.922.094 3.625.531 5.031 1.937s1.844 3.109 1.937 5.031C24.016 10.703 24 12.344 24 14z"/>
</svg>
        </a>
    </li>
  </ul>
</div>

          
  
    <form class="languages go" method="get" action="/en-US/docs/Web">
      <label for="language">Other languages:</label>
      <select id="language" class="wiki-l10n" name="next" dir="ltr">
        <option title="English (US)" data-locale="en-US" value="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" selected>
          English (US) (en-US)
        </option>
        
          <option title="German" data-locale="en-US" value="/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Deutsch (de)
          </option>
          <option title="Spanish" data-locale="en-US" value="/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from">
            Español (es)
          </option>
          <option title="French" data-locale="en-US" value="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from">
            Français (fr)
          </option>
          <option title="Indonesian" data-locale="en-US" value="/id/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Bahasa Indonesia (id)
          </option>
          <option title="Italian" data-locale="en-US" value="/it/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Italiano (it)
          </option>
          <option title="Japanese" data-locale="en-US" value="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            日本語 (ja)
          </option>
          <option title="Korean" data-locale="en-US" value="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            한국어 (ko)
          </option>
          <option title="Polish" data-locale="en-US" value="/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/from">
            Polski (pl)
          </option>
          <option title="Portuguese (Brazilian)" data-locale="en-US" value="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Português (do Brasil) (pt-BR)
          </option>
          <option title="Russian" data-locale="en-US" value="/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Русский (ru)
          </option>
          <option title="Turkish" data-locale="en-US" value="/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            Türkçe (tr)
          </option>
          <option title="Chinese (Simplified)" data-locale="en-US" value="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            中文 (简体) (zh-CN)
          </option>
          <option title="Chinese (Traditional)" data-locale="en-US" value="/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
            正體中文 (繁體) (zh-TW)
          </option>
      </select>
      <noscript><button type="submit">Go</button></noscript>
    </form>
  


          
            <ul class="footer-tos">
              <li><a href="https://www.mozilla.org/about/legal/terms/mozilla">Terms</a></li>
              <li><a href="https://www.mozilla.org/privacy/websites/">Privacy</a></li>
              <li><a href="https://www.mozilla.org/privacy/websites/#cookies">Cookies</a></li>
            </ul>

            <div id="license" class="contentinfo">
              <p>&copy; 2005-2018 Mozilla and individual contributors.</p> <p>Content is available under <a href="/en-US/docs/MDN/About#Copyrights_and_licenses">these licenses</a>.</p>
            </div>
          
      </div>
    </footer> 

  <!-- site js -->
  
    
    <!--[if lte IE 8]><script type="text/javascript" src="https://developer.mozilla.org/static/build/js/selectivizr.091e18cf669b.js" charset="utf-8"></script><![endif]-->

    
    <script src="https://developer.mozilla.org/static/jsi18n/en-US/javascript.414b87adc480.js"></script>
    <script type="text/javascript" src="https://developer.mozilla.org/static/build/js/main.9d7a43a3c387.js" charset="utf-8"></script>
    <script>
    if (window.mdn && mdn.analytics) mdn.analytics.trackOutboundLinks();
</script>
    

  

    <script async type="text/javascript" src="https://developer.mozilla.org/static/build/js/wiki.85628393fab7.js" charset="utf-8"></script>



  

  

  

  
    <script async type="text/javascript" src="https://developer.mozilla.org/static/build/js/newsletter.7cd3274169f2.js" charset="utf-8"></script>
  


</body>
</html>