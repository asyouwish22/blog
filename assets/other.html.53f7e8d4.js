import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as i,e as c}from"./app.b6a8f912.js";const a={},d=c('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="cookie\u5982\u4F55\u9632\u8303xss\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#cookie\u5982\u4F55\u9632\u8303xss\u653B\u51FB" aria-hidden="true">#</a> Cookie\u5982\u4F55\u9632\u8303XSS\u653B\u51FB</h2><p>XSS(\u8DE8\u7AD9\u811A\u672C\u653B\u51FB)\u6307\u653B\u51FB\u8005\u5728\u8FD4\u56DE\u7684HTML\u4E2D\u5D4C\u5165JavaScript\u811A\u672C\uFF0C\u4E3A\u51CF\u8F7B\u8FD9\u4E9B\u653B\u51FB\uFF0C\u9700\u8981\u5728HTTP\u5934\u90E8\u914D\u4E0A\uFF0Cset-cookie:</p><p>httponly-\u6B64\u5C5E\u6027\u53EF\u9632\u6B62XSS\uFF0C\u5B83\u7981\u6B62JavaScript\u811A\u672C\u8BBF\u95EEcookie</p><p>secure- \u6B64\u5C5E\u6027\u544A\u8BC9\u6D4F\u89C8\u5668\u4EC5\u5728\u8BF7\u6C42\u4E3Ahttps\u7684\u65F6\u5019\u53D1\u9001cookie</p><h2 id="cookie-session-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#cookie-session-\u533A\u522B" aria-hidden="true">#</a> cookie session \u533A\u522B</h2><ol><li>cookie \u6570\u636E\u5B58\u653E\u5728\u5BA2\u6237\u7684\u6D4F\u89C8\u5668\u4E0A\uFF0Csession \u6570\u636E\u653E\u5728\u670D\u52A1\u5668\u4E0A\u3002</li><li>cookie \u4E0D\u662F\u5F88\u5B89\u5168\uFF0C\u522B\u4EBA\u53EF\u4EE5\u5206\u6790\u5B58\u653E\u5728\u672C\u5730\u7684COOKIE \u5E76\u8FDB\u884C COOKIE \u6B3A\u9A97\u8003\u8651\u5230\u5B89\u5168\u5E94\u5F53\u4F7F\u7528 session\u3002</li><li>session \u4F1A\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u4FDD\u5B58\u5728\u670D\u52A1\u5668\u4E0A\u3002\u5F53\u8BBF\u95EE\u589E\u591A\uFF0C\u4F1A\u6BD4\u8F83\u5360\u7528\u4F60\u670D\u52A1\u5668\u7684\u6027\u80FD\u8003\u8651\u5230\u51CF\u8F7B\u670D\u52A1\u5668\u6027\u80FD\u65B9\u9762\uFF0C\u5E94\u5F53\u4F7F\u7528 COOKIE\u3002</li><li>\u5355\u4E2Acookie \u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7 4K\uFF0C\u5F88\u591A\u6D4F\u89C8\u5668\u90FD\u9650\u5236\u4E00\u4E2A\u7AD9\u70B9\u6700\u591A\u4FDD\u5B5820\u4E2Acookie.</li></ol><h2 id="\u6D4F\u89C8\u5668\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7F13\u5B58" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7F13\u5B58</h2><p>\u7F13\u5B58\u5206\u4E3A\u4E24\u79CD\uFF1A\u5F3A\u7EE5\u5B58\u548C\u534F\u5546\u7F13\u5B58<br> \u6839\u636E\u54CD\u5E94\u7684 <code>header</code> \u5185\u5BB9\u6765\u51B3\u5B9A</p><ol><li>\u5F3A\u7F13\u5B58\u76F8\u5173\u5B57\u6BB5\u6709 <code>expires</code>, <code>cache-control</code>\u3002\u5982\u679C cache-control \u4E0E expires \u540C\u65F6\u5B58\u5728\u7684\u8BDD\uFF0Ccache-control \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E expires.</li><li>\u534F\u5546\u7F13\u5B58\u76F8\u5173\u5B57\u6BB5\u6709 <code>Last-Modified</code>/<code>If-Modified-Since</code>, <code>Etag</code>/<code>If-None-Match</code></li></ol><h2 id="\u5F3A\u7F13\u5B58\u3001\u534F\u5546\u7F13\u5B58\u5206\u522B\u7528\u4E8E\u4EC0\u4E48\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u7F13\u5B58\u3001\u534F\u5546\u7F13\u5B58\u5206\u522B\u7528\u4E8E\u4EC0\u4E48\u8D44\u6E90" aria-hidden="true">#</a> \u5F3A\u7F13\u5B58\u3001\u534F\u5546\u7F13\u5B58\u5206\u522B\u7528\u4E8E\u4EC0\u4E48\u8D44\u6E90</h2><p>\u9879\u76EE\u6253\u5305\u540E\u6587\u4EF6\u4E3A\uFF1Aindex.html\u3001css\u3001js\u3001img\u6587\u4EF6\u7B49</p><p>index.html\u5E94\u4F7F\u7528\u534F\u5546\u7F13\u5B58\uFF0C\u4E0D\u8981\u4F7F\u7528\u5F3A\u7F13\u5B58\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u8D44\u6E90\u66F4\u65B0\u4E86\uFF0C\u7528\u6237\u9A6C\u4E0A\u80FD\u8BBF\u95EE\u5230\u65B0\u8D44\u6E90\uFF0C\u5176\u4ED6\u6587\u4EF6\u8BBE\u7F6E\u5F3A\u7F13\u5B58+\u534F\u5546\u7F13\u5B58\u5373\u53EF</p><p>\u90A3\u4E48\u4E3A\u4EC0\u4E48index.html\u4E0D\u8BE5\u88AB\u7F13\u5B58\u5462 \uFF1F</p><p>\u56E0\u4E3A\u5B83\u662F\u5E94\u7528\u7684\u5165\u53E3\uFF0C\u53EA\u6709\u52A0\u8F7D\u4ED6\u624D\u4F1A\u52A0\u8F7D\u4ED6\u5F15\u7528\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u6240\u4EE5\u8981\u4FDD\u8BC1index.html\u4E0D\u88AB\u7F13\u5B58\uFF0C\u8FD9\u6837\u624D\u80FD\u4FDD\u8BC1\u672C\u5730\u8D44\u6E90\u4E0E\u670D\u52A1\u5668\u4E00\u81F4</p><p>\u5B9E\u9645\u573A\u666F\u7684\u7F13\u5B58\u7B56\u7565\uFF1A</p><ol><li>\u5BF9\u4E8E\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90: \u8BBE\u7F6E\u5F3A\u7F13\u5B58\u8BA9\u5176\u7ACB\u5373\u5931\u6548\uFF0C\u5373<code>Cache-Control:no-cache</code>\uFF0C\u7136\u540E\u518D\u914D\u5408\u534F\u5546\u7F13\u5B58\u3002\u4F7F\u7528<code>Cache-Control</code>\u4F7F\u6D4F\u89C8\u5668\u6BCF\u6B21\u90FD\u53BB\u8BF7\u6C42\u670D\u52A1\u5668\uFF0C\u7136\u540E\u914D\u5408<code>Etag</code>\u6216<code>Last-Modified</code>\u6765\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u6709\u6548\uFF0C\u8FD9\u79CD\u505A\u6CD5\u867D\u7136\u4E0D\u80FD\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u4F46\u80FD\u51CF\u5C11\u54CD\u5E94\u6570\u636E\u7684\u5927\u5C0F;</li><li>\u4E0D\u7ECF\u5E38\u53D8\u5316\u7684\u8D44\u6E90: \u8BBE\u7F6E\u5F3A\u7F13\u5B58<code>Cache-Control: max-age</code>\uFF0C\u7136\u540E\u914D\u5408\u534F\u5546\u7F13\u5B58</li></ol><h2 id="url\u7684\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#url\u7684\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> Url\u7684\u7EC4\u6210\u90E8\u5206</h2><p>\u4E00\u4E2A\u5B8C\u6574\u7684url\u5305\u542B7\u4E2A\u90E8\u5206\uFF1A</p><ol><li>\u534F\u8BAE\uFF1A\u5E38\u89C1\u7684HTTP\u3001FTP</li><li>\u57DF\u540D</li><li>\u7AEF\u53E3\uFF1A\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u7701\u7565\u7AEF\u53E3\u5C06\u91C7\u7528\u9ED8\u8BA4\u7AEF\u53E3\u53F7</li><li>\u865A\u62DF\u76EE\u5F55\uFF1A\u4ECE\u7B2C\u4E00\u4E2A/\u5230\u6700\u540E\u4E00\u4E2A/\u4E4B\u95F4\u7684\u90E8\u5206\uFF0C\u4E0D\u662F\u5FC5\u987B\u7684</li><li>\u6587\u4EF6\u540D\uFF1A\u4ECE\u6700\u540E\u4E00\u4E2A/\u5230\uFF1F\u4E4B\u524D\uFF0C\u5982\u679C\u6CA1\u6709\uFF1F\u90A3\u5C31\u662F\u4ECE/\u5230#\u4E4B\u524D\uFF0C\u4E0D\u662F\u5FC5\u987B\u7684</li><li>\u53C2\u6570\uFF1A\u4ECE\uFF1F\u5230#\u4E4B\u95F4\u7684\u90E8\u5206\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u53C2\u6570\uFF0C\u4F7F\u7528\uFF06\u62FC\u63A5</li><li>\u951A\uFF1A\u4ECE#\u5F00\u59CB\u5230\u6700\u540E\uFF0C\u4E0D\u662F\u5FC5\u987B\u7684</li></ol>',20),l=[d];function r(h,s){return o(),i("div",null,l)}var p=e(a,[["render",r],["__file","other.html.vue"]]);export{p as default};
