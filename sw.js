"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OY"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d32c98b31797c613fd80081efb59c600",url:"./404.html"},{revision:"43989c4c9671166aaa4b821c5178431c",url:"./about/index.html"},{revision:"f11d6f0c4a42b470b8c1abe076fc7cec",url:"./archives/2020/07/index.html"},{revision:"d5535f8b3077f8cea8e676367d2676d0",url:"./archives/2020/07/page/2/index.html"},{revision:"e3e3ccb0fdedb251612a15a64da91399",url:"./archives/2020/07/page/3/index.html"},{revision:"50e572660b1c83dec6b1c5867bae85de",url:"./archives/2020/07/page/4/index.html"},{revision:"763f884a9fb3d5e62e5a1f0db53baeb0",url:"./archives/2020/08/index.html"},{revision:"787c853574ae95d689a78dd6a3170c4e",url:"./archives/2020/09/index.html"},{revision:"52858677405e5e34d575224f959da7d6",url:"./archives/2020/10/index.html"},{revision:"9f0a8fada7331d3de487227cc954fd29",url:"./archives/2020/10/page/2/index.html"},{revision:"595170a47f5a0a2b32eac15de03fa32c",url:"./archives/2020/11/index.html"},{revision:"2f68cf4ff8ead99980d507a0818f2696",url:"./archives/2020/index.html"},{revision:"29b7a63bdc88cf9b9cb97fa7a77b2ad8",url:"./archives/2020/page/2/index.html"},{revision:"0f3532a16f8838f9ac874362a50a1647",url:"./archives/2020/page/3/index.html"},{revision:"88ce6fa4c41eadc3a5e593a0ee1ae9fc",url:"./archives/2020/page/4/index.html"},{revision:"0350c8e9471c565e47295bbe3244d3cb",url:"./archives/2020/page/5/index.html"},{revision:"a756ac5814c6974ade15a07c6444a410",url:"./archives/2020/page/6/index.html"},{revision:"fb895a588be69ba08e23701e4790b7b3",url:"./archives/2020/page/7/index.html"},{revision:"db830afbd12543f1e3defd77138adb18",url:"./archives/index.html"},{revision:"b46088b85f28560dd28c895ccff448cb",url:"./archives/page/2/index.html"},{revision:"3298721620347d8b9f2992b62f8b7142",url:"./archives/page/3/index.html"},{revision:"1f47bfda53e2aa51f3f98d5f349b444a",url:"./archives/page/4/index.html"},{revision:"0198325b4c889cfdad0dcdfe09aa72bb",url:"./archives/page/5/index.html"},{revision:"f882034c00e471204f969250f71677da",url:"./archives/page/6/index.html"},{revision:"591e90670eec78c82acf47a7b3780520",url:"./archives/page/7/index.html"},{revision:"09dc12a9006d350eebd2d530d173effa",url:"./baidu_verify_code-I0I2lRrWh1.html"},{revision:"4f86f56a33bb8927377636a762715d70",url:"./bangumis/index.html"},{revision:"670a47d5f485b3d05311eff289017c24",url:"./bb/index.html"},{revision:"1395829604332f82bb359016e27cecab",url:"./calendar.json"},{revision:"df7fcaed499b4590eeeb880c69823bcf",url:"./categories/CentOS/index.html"},{revision:"c5371f393ef64f2bf9d2dccc16f89931",url:"./categories/GitHub/index.html"},{revision:"720a958c8f5737bba25c61e9a285a1d6",url:"./categories/Git工具/index.html"},{revision:"15b974b9848a049bd2db8dfe751eef98",url:"./categories/index.html"},{revision:"7549c06fe23d105df1da609ea33b50df",url:"./categories/Java/index.html"},{revision:"67e66469261de1e0f8524a6fa0512f36",url:"./categories/JavaEE框架/index.html"},{revision:"6d13982011d176910fff657669d0c340",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"4c52074199b813cc795284e6b27af0c0",url:"./categories/JavaEE框架/page/3/index.html"},{revision:"1e03dd76780146876946c6906fee8022",url:"./categories/JavaEE框架/page/4/index.html"},{revision:"c4bce46a5bf263d633e9ea88cd27d53a",url:"./categories/JavaScript/index.html"},{revision:"d52665ca39aa7927e124e67a54da321a",url:"./categories/java基础/index.html"},{revision:"a7ed64002f8c534e966465080b090ef8",url:"./categories/Java算法/index.html"},{revision:"22f7d9a83946b39ea3c076982a34ca1b",url:"./categories/Java设计模式/index.html"},{revision:"047a822f187987dd8e6635f5aeee358c",url:"./categories/JDBC/index.html"},{revision:"d0dfaeb65ea7032baeacf831277d7be3",url:"./categories/jQuery/index.html"},{revision:"8833db031a81728515f0f912bbe24c17",url:"./categories/Linux/index.html"},{revision:"1fa5fcdf2ba48b3a4e7093d35e90c2cb",url:"./categories/Linux语言/index.html"},{revision:"16d8766eb8faba98380c23fdec3fa7a5",url:"./categories/Redis/index.html"},{revision:"25fef7867c637281effa5879b2f52ff8",url:"./categories/前端框架/index.html"},{revision:"913b0fde267d95c755d6f9abf318affd",url:"./categories/工具/index.html"},{revision:"41425079ae3538e9a4de5f3a9277f558",url:"./categories/数据库/index.html"},{revision:"25704b4e49f40e651801580357eafe67",url:"./categories/项目实战/index.html"},{revision:"b8e255236f92b772bebaa1d86c06e0d2",url:"./css/aplayer.css"},{revision:"e1fbeb84b889055ca44f8cfbe96111b7",url:"./css/APlayer.min.css"},{revision:"d72e65a73937fd5f98a5a1f879cb6aa1",url:"./css/index.css"},{revision:"d0df1c126b9556b83ce4462e198f1f87",url:"./css/load.css"},{revision:"3189ef54717a729e24a77fabfdba0c92",url:"./css/Mac.css"},{revision:"efbfbf64aa1b384cd309bb57908261ba",url:"./css/note.css"},{revision:"8b2432eb7e8a253a236d9ee9013cdff9",url:"./css/oy.css"},{revision:"e01897dab4a813af2892aed3436372e2",url:"./css/plugins.min.css"},{revision:"44a26565576427619a863328e54daaa9",url:"./css/tage.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"da97e46bf62eb8db646650e827e7b683",url:"./Gallery/index.html"},{revision:"689363ba4828638c0c3cb56334492a8a",url:"./Gallery/marvel/index.html"},{revision:"d019a2a52084210125c21912dfd113f3",url:"./Gallery/ohmygirl/index.html"},{revision:"9112f9ca7ff5df8c9b75df15329a4d6e",url:"./Gallery/wallpaper/index.html"},{revision:"2330b222e006686f60813459bef3b710",url:"./index.html"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./js/APlayer.min.js"},{revision:"edc0ec6b454f9dcbf2b1e967f5d4b771",url:"./js/languages.js"},{revision:"42ca4776b0f95e0447ea36baa1b83bc4",url:"./js/load.js"},{revision:"e1d3dc35d8dead0a3074188a84397d66",url:"./js/main.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./js/Meting.min.js"},{revision:"f9a174a19b8c7a9b50a7bf663fc846af",url:"./js/oy.js"},{revision:"ae817fda10f198113ed6729091a390c6",url:"./js/search/algolia.js"},{revision:"3b7ba121fe8008ba41c0566a1a257945",url:"./js/search/local-search.js"},{revision:"3de71ac97a962c250da758841ff7daf0",url:"./js/tw_cn.js"},{revision:"67ae2162608e480f4f8ca3bc7d44f337",url:"./js/utils.js"},{revision:"cf264d8f733281950bdb458ab0eb34fa",url:"./js/weather.js"},{revision:"7a1dc022a700b505d1651b29f01cfb23",url:"./js/xkTool.js"},{revision:"f31054e23e91252deec8ef35e401784e",url:"./link/index.html"},{revision:"031e229fe1a8b64ee37989a5628a3d95",url:"./logs/index.html"},{revision:"b9bd9ff39d0349969e02860ce49aa33d",url:"./main/index.html"},{revision:"20f1dbc8485d604375179afe642ac660",url:"./manifest.json"},{revision:"b384a3f4f36f9ff1ce21da82f3519e5b",url:"./messageboard/index.html"},{revision:"0c92b5999521c1dfa164d99ef102014e",url:"./movies/index.html"},{revision:"425a6b421099e33c7044e07f77d368ad",url:"./music/index.html"},{revision:"836d1f063413db196b4496431396187a",url:"./nav/index.html"},{revision:"99e68427d233bffea706e14ead1ea3ce",url:"./page/2/index.html"},{revision:"cd41bde2d19813d4a3e8e3f3fc899d7d",url:"./page/3/index.html"},{revision:"8d6bfdfb458f7b2acba9b54da2cb2d10",url:"./page/4/index.html"},{revision:"ee14581f828c77356282954b04fbfffc",url:"./page/5/index.html"},{revision:"50c3f79034e8d09ba35da0882039c5a2",url:"./page/6/index.html"},{revision:"26eff9a4e7d937c4b3389703fe41a9c0",url:"./post/1005838445.html"},{revision:"0dd1b813f60df607de21ce8120c63ff6",url:"./post/1104683778.html"},{revision:"1af95db2a6716848aba36d5350926972",url:"./post/1175849155.html"},{revision:"eb1175042432626dce452aa9b81021ce",url:"./post/13005592.html"},{revision:"0c7040497571b9c1fc3db25b3f8d39ad",url:"./post/1330258666.html"},{revision:"3314ac231bc3c0896baf5848372f5075",url:"./post/1339733598.html"},{revision:"83c493d71ec6662433e02aa7c865b999",url:"./post/1393401608.html"},{revision:"b8b61f214ba5d1091b63811fe31b50c2",url:"./post/1519064184.html"},{revision:"51a026a772c47e44ad6a768b956671a3",url:"./post/1520998390.html"},{revision:"5c99753068c5452010903f09ca850320",url:"./post/1550900565.html"},{revision:"7719d7d9699ed54a3b0466387ca1f494",url:"./post/1566646582.html"},{revision:"e7ee77a5d3605668b0a8f8cb6e5cec68",url:"./post/1574967654.html"},{revision:"feea9dbef40c81d5cd639d7a4eaa5300",url:"./post/1634411798.html"},{revision:"e1cc42cc284ebcadabf7a474c10d2299",url:"./post/1677637013.html"},{revision:"64b28c75f7bfd4a589706d346304f605",url:"./post/1738458658.html"},{revision:"ad495a12dace250cba6e4cff6721a357",url:"./post/1762820479.html"},{revision:"6819b80458efa97686ba6bcdaa3d8a02",url:"./post/1872245415.html"},{revision:"a4855d6315addb83f5061e4fae816f0d",url:"./post/1905208898.html"},{revision:"e2c99d5f6bfeabd87a6b7a576d7774ad",url:"./post/2068565369.html"},{revision:"2b443ab5350ede1f890ebce66597d039",url:"./post/2068909584.html"},{revision:"e32b3ea7bef630c1b7dd7e9e935d5e0b",url:"./post/2086819267.html"},{revision:"cb8c77459038a293256e8f9a4053d480",url:"./post/2120368839.html"},{revision:"0be0e04dcab5abffd11945ecd2dd3485",url:"./post/2130149512.html"},{revision:"429482e6e0234aafb7afee8acbc2f4e7",url:"./post/2164673978.html"},{revision:"a9ea98e2d01b52e0bc0c759693bc9ec6",url:"./post/2187905911.html"},{revision:"01a3a6a273b74880474b192b55f4862d",url:"./post/2243339053.html"},{revision:"6367b9c1621387f7ae57402a4fb0b7d3",url:"./post/272460835.html"},{revision:"2ed1b84ae667a88c2d2682a49ade4596",url:"./post/2761314235.html"},{revision:"28443f4192ed6a1ea3a66af594dfeda3",url:"./post/2781775372.html"},{revision:"703ddb6eefd892ca8b5d3db795829ed5",url:"./post/2817363972.html"},{revision:"82bced58f192637dbe7d451d8493a705",url:"./post/2909614374.html"},{revision:"a92cdd1c0e3968c6ce99ba0a8f384236",url:"./post/2922948377.html"},{revision:"655a2b43181b5f12c9cb44dd185570ee",url:"./post/2968822672.html"},{revision:"68b03efb8b7419ae7a39ede1bb94aa1a",url:"./post/315616543.html"},{revision:"934c8d0b488e888fa53957900398f6cf",url:"./post/325844318.html"},{revision:"4a060628daea2afa9a645aaee3b23206",url:"./post/328351179.html"},{revision:"944af8c77c056f0cc63610fae2c67dbb",url:"./post/3305917059.html"},{revision:"e2bd042bd462644316607469faee1912",url:"./post/3528046541.html"},{revision:"a503ba9d41caa6f3b88a0b902440be6a",url:"./post/3554798849.html"},{revision:"e72433099529e6fbb1577fb01041e445",url:"./post/3556927238.html"},{revision:"9a374e2f679f30fee2f179583bf3869b",url:"./post/3661501281.html"},{revision:"39ebf2ffdd1c3393fa738573a26ab6ee",url:"./post/368886813.html"},{revision:"eba61033cb4f76bf956dfab4a123b11f",url:"./post/3830795892.html"},{revision:"3690055a721bedc074d84b09f1b2a907",url:"./post/3862476156.html"},{revision:"6e96af6da453e197b5bb6b900e186811",url:"./post/3895825257.html"},{revision:"d03ec19ae7942c91e9b907d0f615ff89",url:"./post/3956353174.html"},{revision:"8da0f9a5cdc007524d909bacbee1896d",url:"./post/3979597380.html"},{revision:"ec76fd387c7335d6aa462e00942d5633",url:"./post/3991296734.html"},{revision:"e62eb52f2dca9db7d4327093809b3fcc",url:"./post/3994269159.html"},{revision:"e1a875090ec5bb4caa72d6772f33b18a",url:"./post/4004677012.html"},{revision:"29b6652dd20dac606f981c8f72a258d2",url:"./post/4019007238.html"},{revision:"eed01347d33565f9f45c812e7f36a038",url:"./post/4146242720.html"},{revision:"e9a10cf0683a66f7a8e8bf6b057c8949",url:"./post/4226784210.html"},{revision:"14f67293e383d20875190f19e05eebc6",url:"./post/427140827.html"},{revision:"a26ef7b4fdf6a40eba7fa399158e496c",url:"./post/518000799.html"},{revision:"fbd34c27e99e9d96f140fba0fd400b43",url:"./post/658751968.html"},{revision:"2ded597b26d619fbcc7b252f5aafdc43",url:"./post/726828229.html"},{revision:"d7b41c231ac9fd66d7f29c7876843438",url:"./post/771027640.html"},{revision:"305ef205f192e93e64799f2fc98be557",url:"./post/80f09d1c.html"},{revision:"753534016b36da27cab54c79b99596a4",url:"./post/816104377.html"},{revision:"e0a92dac13c1758450a1befa3a4c84af",url:"./post/850137752.html"},{revision:"abd0aa3f9a7f513df4786c6fb93c5601",url:"./post/864013447.html"},{revision:"730bce29511d37cf66cf8d65f52de02b",url:"./post/865268903.html"},{revision:"3ba523844e6483c8e5940e2edc95ff03",url:"./post/872766944.html"},{revision:"296c3ed3799f54f04b6b5533fa5196ac",url:"./post/dfb9e877.html"},{revision:"806b2706036dfa469c59f9a414f14ed6",url:"./speak/index.html"},{revision:"9ae42db639bcb4d03ac75c5d63c34b00",url:"./speak/shuoshuo.css"},{revision:"a6d60c6b93ad214f433dd9eaf0cf34fa",url:"./tags/CentOS-7/index.html"},{revision:"66a0d5bdd0c45a519b6fe98ec205c524",url:"./tags/GitHub/index.html"},{revision:"818ee230a01e2bdece7b96f72130146c",url:"./tags/index.html"},{revision:"2011c02a4d35cb08e6d7e693772eb3e2",url:"./tags/java/index.html"},{revision:"8d83157c09941293b2909a08191109f8",url:"./tags/java/page/2/index.html"},{revision:"1f27b0d92f6180632dca63953d9297de",url:"./tags/java/page/3/index.html"},{revision:"4c9addb79fd0ee4d8545b59006eb7ade",url:"./tags/java/page/4/index.html"},{revision:"6778eb21a1d12f844c85a6ea9fea9161",url:"./tags/java/page/5/index.html"},{revision:"3dc60fe9103a779a54e914f7ac836a01",url:"./tags/javaScript基础/index.html"},{revision:"a0627a6c4e403d68095d294b147bc6cf",url:"./tags/JavaScript高级/index.html"},{revision:"87088ca4f6b812b257220d261b2a2491",url:"./tags/Java基础/index.html"},{revision:"152749daa0231a23b6a348b26506883d",url:"./tags/Java算法/index.html"},{revision:"e44f7065e98edad28c0f31ed627edfe1",url:"./tags/Java设计模式/index.html"},{revision:"9a276b95268e91cf2afef09a0b99532c",url:"./tags/java项目/index.html"},{revision:"1ba04fc07c4fb09fa500b71268748b73",url:"./tags/JDBC数据连接池/index.html"},{revision:"8a8972bba5e042950f0c4012a68440b9",url:"./tags/jQuery/index.html"},{revision:"793adee6a68d436986df5c1d167567c5",url:"./tags/layui/index.html"},{revision:"3b66745f55ae39e3f454df8d2b4f10d2",url:"./tags/Maven/index.html"},{revision:"956c66f1f6663b2ff0af385712200fe1",url:"./tags/Mybatis/index.html"},{revision:"62a283e58ffb15e56bf1a403d6819312",url:"./tags/MySQL/index.html"},{revision:"345d844083fb91df16983e6c10dc171c",url:"./tags/Redis/index.html"},{revision:"2499df50e21e800200fd5b3e9b3874de",url:"./tags/Spring/index.html"},{revision:"15ace29d31dc6ee1df0f476123b5f9df",url:"./tags/SpringBoot/index.html"},{revision:"1c05347c4b14bacf643dd40428df5c0d",url:"./tags/SpringBoot/page/2/index.html"},{revision:"0e2488f7a8a0566f56a4fbd7f48c97ca",url:"./tags/SpringCloud/index.html"},{revision:"a70bced5ed13d1a4cca9d231cfb801a0",url:"./tags/SpringCloud/page/2/index.html"},{revision:"c853f6cf4a95a9ec027d57905163aa85",url:"./tags/SpringMVC/index.html"},{revision:"10d8bfc1c54523a4d368ea0964c3fcc7",url:"./tags/web/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();