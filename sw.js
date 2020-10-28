"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OY"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d792909e6c396a3898463996686ac4cf",url:"./404.html"},{revision:"5362c10dc4f74c98474ed9e0b6d1905e",url:"./about/index.html"},{revision:"bf5242cb4b5764c696a2200ecf86b85d",url:"./archives/2020/07/index.html"},{revision:"d96dc2e816fc6fa78a6a52490c54e0b9",url:"./archives/2020/07/page/2/index.html"},{revision:"3bc08afa16cc89aad36d380ad18decb5",url:"./archives/2020/07/page/3/index.html"},{revision:"0b8923b4921b3854a3a4d85577386648",url:"./archives/2020/07/page/4/index.html"},{revision:"5b84f3258046afbe7eec9b9ae153ded3",url:"./archives/2020/08/index.html"},{revision:"278229bd10c3a6263b4e3812eb084c14",url:"./archives/2020/09/index.html"},{revision:"3018b8215d43dca01b3b7abb48eb7c9a",url:"./archives/2020/10/index.html"},{revision:"59a91fb5e4976669eccac415dc3861c5",url:"./archives/2020/10/page/2/index.html"},{revision:"3cb29e2194c90fda17adfe7e06bcf1a0",url:"./archives/2020/index.html"},{revision:"3c4c969d83eadfafb78046f571af00c6",url:"./archives/2020/page/2/index.html"},{revision:"afd2cd388931a5ce714f9a33e6c4cd13",url:"./archives/2020/page/3/index.html"},{revision:"7053153c836acd1636af5bcd9bfe24fb",url:"./archives/2020/page/4/index.html"},{revision:"9ecc28b0f20802063ba0aa3ccc67a192",url:"./archives/2020/page/5/index.html"},{revision:"a545e9239f99ca90325ccdfae7cdd940",url:"./archives/2020/page/6/index.html"},{revision:"68891a2f3a4e62fe0c0893d52bf5a69a",url:"./archives/2020/page/7/index.html"},{revision:"468515dbc25afec476dd8f9b89b10543",url:"./archives/index.html"},{revision:"4d92bb02d8eef72157760a59d01433b9",url:"./archives/page/2/index.html"},{revision:"88f545821659365e0c021b4891283607",url:"./archives/page/3/index.html"},{revision:"6a997e350fa36f7a88e13bd0adcd13e9",url:"./archives/page/4/index.html"},{revision:"d0d826f4b3ad97c6a7d53a5f557b92d5",url:"./archives/page/5/index.html"},{revision:"c5f950f277f43526fbb60466f9885ad4",url:"./archives/page/6/index.html"},{revision:"a457d0b1b20d211e8f3283e9930cfee6",url:"./archives/page/7/index.html"},{revision:"f266a17c7d98fac526b1c64f9bb4af30",url:"./bangumis/index.html"},{revision:"2eeb1959deac3cb70df7c2ecb16b3ebf",url:"./bb/index.html"},{revision:"9d23f2885b725f454bb038649e5fff92",url:"./calendar.json"},{revision:"1f8dbe0ff3da57d4949b545462d89407",url:"./categories/CentOS/index.html"},{revision:"88061ca4f3392f74f663729c3dd8bb84",url:"./categories/GitHub/index.html"},{revision:"24a16d1bebc2aba256704c3c995dab49",url:"./categories/Git工具/index.html"},{revision:"0e1de8e4b54ae47a3d30deb5fd62c503",url:"./categories/index.html"},{revision:"1d79d827fd7b444138ad2f795452ddad",url:"./categories/Java/index.html"},{revision:"f430a4d69709c3bef2cc7c933246c301",url:"./categories/JavaEE框架/index.html"},{revision:"379973f3688623782423ed615eee7486",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"65b4db1f2c0ceb7fe9862356cac30133",url:"./categories/JavaEE框架/page/3/index.html"},{revision:"476542c08c509bf367ea90208b0a0477",url:"./categories/JavaScript/index.html"},{revision:"d00b1a27280b56ebd928bf3ec3d9386f",url:"./categories/java基础/index.html"},{revision:"ff5f7acfaa5087e4dca55dbcba38b718",url:"./categories/Java算法/index.html"},{revision:"b0ba47c181906d3e8919f11a99cc1e6b",url:"./categories/Java设计模式/index.html"},{revision:"9e480926aec22a2a1eb2fae1a2537480",url:"./categories/JDBC/index.html"},{revision:"584ea3963153436a62e17afd257e440f",url:"./categories/jQuery/index.html"},{revision:"bc321337329585f346fdc34e45b324de",url:"./categories/Linux/index.html"},{revision:"08347c6f58f92fb68170b2858c2825d9",url:"./categories/Linux语言/index.html"},{revision:"1a00dc23d9c4e5a5887069942fa325d5",url:"./categories/Redis/index.html"},{revision:"bac5268fcd37a273684821d0dbd9565a",url:"./categories/前端框架/index.html"},{revision:"af0f140998dbffb1de6d0f49c34c7193",url:"./categories/工具/index.html"},{revision:"4befdc60147366eaa996d7fe9125979d",url:"./categories/数据库/index.html"},{revision:"6c4041d20ae903059d62b4f75b4cd9ef",url:"./categories/项目实战/index.html"},{revision:"b8e255236f92b772bebaa1d86c06e0d2",url:"./css/aplayer.css"},{revision:"e1fbeb84b889055ca44f8cfbe96111b7",url:"./css/APlayer.min.css"},{revision:"ecda44f56a88e2ba3fa86fbb393fe31f",url:"./css/index.css"},{revision:"3189ef54717a729e24a77fabfdba0c92",url:"./css/Mac.css"},{revision:"343052190cb802afae2d318c32281b53",url:"./css/note.css"},{revision:"307a64c4d457831265f235128e4db4e2",url:"./css/oy.css"},{revision:"e01897dab4a813af2892aed3436372e2",url:"./css/plugins.min.css"},{revision:"44a26565576427619a863328e54daaa9",url:"./css/tage.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"59ebeee47eaa5d2e8046a597fbebbccf",url:"./Gallery/index.html"},{revision:"a5d4c96fff1220a6050a0a1b92fdcd6f",url:"./Gallery/marvel/index.html"},{revision:"0a8c2991ccf4f089f9aa34c75a85ba2d",url:"./Gallery/ohmygirl/index.html"},{revision:"a23a9f9ecfeb175eca0a2a441dd8748a",url:"./Gallery/wallpaper/index.html"},{revision:"8b00419f9453ff8d795fdeafac1ea716",url:"./index.html"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./js/APlayer.min.js"},{revision:"4c213e5421c443572e0e1f07d9236b9c",url:"./js/calendar.js"},{revision:"edc0ec6b454f9dcbf2b1e967f5d4b771",url:"./js/languages.js"},{revision:"373a79f160120fdfa6ee173f58d4f3cb",url:"./js/main.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./js/Meting.min.js"},{revision:"f9a174a19b8c7a9b50a7bf663fc846af",url:"./js/oy.js"},{revision:"ae817fda10f198113ed6729091a390c6",url:"./js/search/algolia.js"},{revision:"0165554df297d6ca3be8d1fa0faf2591",url:"./js/search/local-search.js"},{revision:"4d86f461272f4ba4fb9162ea5375d0b0",url:"./js/tw_cn.js"},{revision:"67ae2162608e480f4f8ca3bc7d44f337",url:"./js/utils.js"},{revision:"7a1dc022a700b505d1651b29f01cfb23",url:"./js/xkTool.js"},{revision:"65093f766b81399da3c830ff944d94f3",url:"./link/index.html"},{revision:"0be51d57b969f671d891d5cfa180e1aa",url:"./logs/index.html"},{revision:"5eb18e71be5b760f758413f07e7ac3cf",url:"./main/index.html"},{revision:"20f1dbc8485d604375179afe642ac660",url:"./manifest.json"},{revision:"f9a1ec086531a7cf8050301c806ce92d",url:"./messageboard/index.html"},{revision:"900c7bd3383cb995b8c36317b1dd3e2e",url:"./movies/index.html"},{revision:"02bae9681474df2c5bc01865f0dab3e8",url:"./music/index.html"},{revision:"1b489d87906d7d725383c21b88335b16",url:"./nav/index.html"},{revision:"160edf81498bce3b4bcff6280ac87344",url:"./page/2/index.html"},{revision:"05b2531762901be0064d54280de724cc",url:"./page/3/index.html"},{revision:"8bdf7ba96d8040f38c5345f4550615fc",url:"./page/4/index.html"},{revision:"72f2b86cedfa2a21a407db54a1cb4ea3",url:"./page/5/index.html"},{revision:"36c8072d02e1d022d1b4376ad1341dbe",url:"./page/6/index.html"},{revision:"d5b04285f6f5392cb09b9ecec132c3a5",url:"./page/7/index.html"},{revision:"467a0159e0649169ce2229fc64f9e02b",url:"./post/1005838445.html"},{revision:"86b999781c8715c16d58648301ff1a3f",url:"./post/1104683778.html"},{revision:"a1df879f0bce949b303360134ef82c84",url:"./post/1175849155.html"},{revision:"8cd982ff9cd5a7b418754b03ac478a04",url:"./post/1330258666.html"},{revision:"643b9858497c84cf31b1055df3e0e038",url:"./post/1339733598.html"},{revision:"c65d3460d0fdcc2aef23b2868ddee0df",url:"./post/1393401608.html"},{revision:"e1f773c167790b417e14de66a590244c",url:"./post/1519064184.html"},{revision:"13858010370a8a2697ecd42c86638648",url:"./post/1520998390.html"},{revision:"e74eef2f70cf719e95b7d32ba7d04530",url:"./post/1550900565.html"},{revision:"3c2e0cf05dd68954f7bd5a0699d16f40",url:"./post/1566646582.html"},{revision:"79050e828667351469f5627294077bc7",url:"./post/1574967654.html"},{revision:"ce18ab830296b807f663d8f67d2f52e9",url:"./post/1634411798.html"},{revision:"58c302f349d7527b2db094dded02d057",url:"./post/1677637013.html"},{revision:"6f263b9c686d44694b775da06f23c21e",url:"./post/1738458658.html"},{revision:"0d1df3bd6ebd16177d34fb03dd7b6733",url:"./post/1762820479.html"},{revision:"6adf911c20759fa5f0fe60e7337a81b0",url:"./post/1872245415.html"},{revision:"962ce6c794adac01e6715a75564ff06d",url:"./post/1905208898.html"},{revision:"2a7fdeb3c428bb985422cc937f4ee8b2",url:"./post/2068565369.html"},{revision:"96cf45c74aa0a246641378c502238d79",url:"./post/2068909584.html"},{revision:"1b0eb92c76f52c6e0600fe2b30bd4083",url:"./post/2086819267.html"},{revision:"5b7c16e1f0639d84245d545286f05a61",url:"./post/2120368839.html"},{revision:"9bd8c0cae7687ac6be7d378093ae9019",url:"./post/2130149512.html"},{revision:"62a4a32909399ce244b6967ce4d96b7d",url:"./post/2164673978.html"},{revision:"f535433066bf16610038528a71efe504",url:"./post/2187905911.html"},{revision:"1f3fb150d3b1da889ada1ac14282cf84",url:"./post/2243339053.html"},{revision:"c6fa2acf2a92a827969cf3d30baf283d",url:"./post/272460835.html"},{revision:"1e5c2d710c2ed6cb17e880720b268270",url:"./post/2761314235.html"},{revision:"9531174c97cc5fd3be93dbdaa02cfa19",url:"./post/2781775372.html"},{revision:"00f925fffb8da91e676302f639e75c6b",url:"./post/2817363972.html"},{revision:"7d2d3df5b0be79220830b2fe33769351",url:"./post/2909614374.html"},{revision:"e7e552963afb29200a064c592b3c65bd",url:"./post/2922948377.html"},{revision:"46713d9219b7860816e7dfce54541131",url:"./post/2968822672.html"},{revision:"9fec65541cef3c008ae4bf0fc2de6b3c",url:"./post/315616543.html"},{revision:"f929947b8a8d435a49f992e3b064a49b",url:"./post/325844318.html"},{revision:"1c66639021b34934be5ffad75e5b1712",url:"./post/328351179.html"},{revision:"ec7dc6a4582f3bbbac2830e0a92f00b9",url:"./post/3305917059.html"},{revision:"c948aeaab65b6195ab12fe3a2baee4bb",url:"./post/3528046541.html"},{revision:"c589a8e2d7eee0bec30f393387c51deb",url:"./post/3554798849.html"},{revision:"c7bf2bc0a259025db1cf5b33ca461aee",url:"./post/3556927238.html"},{revision:"1c25839c15415e4100c7d0c9187cac71",url:"./post/3661501281.html"},{revision:"7241f948e72f0171837fc44daae8f9e5",url:"./post/368886813.html"},{revision:"b03c68450a7808b6cf35e4775bea4abb",url:"./post/3830795892.html"},{revision:"7b63e71a9f25e06b70dddebed893a51b",url:"./post/3862476156.html"},{revision:"64daf6a0b0dd80aba0f92d96a0e6e771",url:"./post/3895825257.html"},{revision:"bed8ed99e0d154a4f012b6c85225b648",url:"./post/3956353174.html"},{revision:"8e0bdbc71de2feabecb7b20620740e67",url:"./post/3979597380.html"},{revision:"77d5af976391fcf9923b18656bca6145",url:"./post/3991296734.html"},{revision:"7b4a88d75370d8d798b7ab951cd271a9",url:"./post/3994269159.html"},{revision:"07643e89738b301ffee1da97d375a9b9",url:"./post/4004677012.html"},{revision:"9ba2cd1492b6685ef43efb27f50fb65c",url:"./post/4019007238.html"},{revision:"3610f6faa3ea6b8a30af75c5d5263ca6",url:"./post/4146242720.html"},{revision:"b1e767bc2efbdc7922f79a52a639bdd8",url:"./post/4226784210.html"},{revision:"0df1569bcfb8bf7afc30e28839c8c801",url:"./post/427140827.html"},{revision:"7a31d311640be4d094ce21163076e9d3",url:"./post/518000799.html"},{revision:"3d5da1a39e700f9c3c4122426400971d",url:"./post/658751968.html"},{revision:"814e2068bfed50c3d5a8dde7c3206486",url:"./post/726828229.html"},{revision:"dcabfd4829723480c2cc36625fb76dbd",url:"./post/771027640.html"},{revision:"4f8377b8bcec56bb098db03c56393345",url:"./post/816104377.html"},{revision:"dd9e93128f076879eeb73a97d9512be4",url:"./post/850137752.html"},{revision:"a0dcb76b0462399690742049926e28fe",url:"./post/864013447.html"},{revision:"09a27869bdf7f72b87118a8a3da6a1a2",url:"./post/865268903.html"},{revision:"ec6d270c3242c2eda54ad22d00659606",url:"./post/872766944.html"},{revision:"fa6ef56043de43fc51c7c805b254a944",url:"./speak/index.html"},{revision:"9ae42db639bcb4d03ac75c5d63c34b00",url:"./speak/shuoshuo.css"},{revision:"6a6e5a193ce7c5ab51b7f021dab72f9c",url:"./tags/CentOS-7/index.html"},{revision:"28acc04b3a76e86ec6592f5b3aa060ba",url:"./tags/GitHub/index.html"},{revision:"4ce6cc4b62edbb29ed8dd7aed6527dd0",url:"./tags/index.html"},{revision:"a0d33b504f53ffe65f9d568f69f0cef7",url:"./tags/java/index.html"},{revision:"5240b247c7ca3300569d86d1a079e058",url:"./tags/java/page/2/index.html"},{revision:"a6056c9d19ad0e8f67a326d5d9c5d8a9",url:"./tags/java/page/3/index.html"},{revision:"8e73fb53226ea105d7eebe098b7683e1",url:"./tags/java/page/4/index.html"},{revision:"00e7acb034ff976a94e79223fbe3842c",url:"./tags/javaScript基础/index.html"},{revision:"9f8bc3d8908ad038051ddad9d7b0cc2e",url:"./tags/JavaScript高级/index.html"},{revision:"fdec720bfa0b1d0cecc0f420109d24eb",url:"./tags/Java基础/index.html"},{revision:"f868814ff67b95304731a357984318df",url:"./tags/Java算法/index.html"},{revision:"c7ac59a4e8d26d0bea96332dc572e683",url:"./tags/Java设计模式/index.html"},{revision:"c1b5eb15a3df34c779226a62b212e61a",url:"./tags/java项目/index.html"},{revision:"cf92b746aed22b5d58afd52b36a08b10",url:"./tags/JDBC数据连接池/index.html"},{revision:"80b9cfb088ad7356bad5478434aeafe6",url:"./tags/jQuery/index.html"},{revision:"e0ca28d901973eab529ce09c45b59698",url:"./tags/layui/index.html"},{revision:"6fe4b9f11ed9ae89c2d2c62240028da5",url:"./tags/Maven/index.html"},{revision:"a453716b3edc9d2775dc5db19888075d",url:"./tags/Mybatis/index.html"},{revision:"811501dfd19350d6aa6d9d7ce201bd6b",url:"./tags/MySQL/index.html"},{revision:"92b1f0634282d45be109a36292c0f3fc",url:"./tags/Redis/index.html"},{revision:"f4aee77d8f125cf92bb63aceb92e8ea6",url:"./tags/Spring/index.html"},{revision:"83824240e35990f57e4a01af2a6b1146",url:"./tags/SpringBoot/index.html"},{revision:"c8dfdaab2dc4e0eea26c4391aa276587",url:"./tags/SpringBoot/page/2/index.html"},{revision:"e7eb1e997ec8d6ec9cb65f99678cd9c0",url:"./tags/SpringCloud/index.html"},{revision:"b1d8b5a2a15aa76cbfc19bb7022bfe9d",url:"./tags/SpringMVC/index.html"},{revision:"2f79038781e605be8ec77caac5fa3adf",url:"./tags/web/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();