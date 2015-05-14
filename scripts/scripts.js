angular.module("starter",["ionic","starter.controllers","starter.services"]).run(["$ionicPlatform",function(a){a.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleLightContent()})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("tab",{url:"/tab","abstract":!0,templateUrl:"templates/tabs.html"}).state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:"templates/tab-dash.html",controller:"DashCtrl"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:"templates/tab-chats.html",controller:"ChatsCtrl"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:"templates/chat-detail.html",controller:"ChatDetailCtrl"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:"templates/tab-account.html",controller:"AccountCtrl"}}}),b.otherwise("/tab/dash")}]),angular.module("starter.controllers",[]).controller("DashCtrl",["$scope",function(a){}]).controller("ChatsCtrl",["$scope","Chats",function(a,b){a.chats=b.all(),a.remove=function(a){b.remove(a)}}]).controller("ChatDetailCtrl",["$scope","$stateParams","Chats",function(a,b,c){a.chat=c.get(b.chatId)}]).controller("AccountCtrl",["$scope",function(a){a.settings={enableFriends:!0}}]),angular.module("starter.services",[]).factory("Chats",function(){var a=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"https://avatars3.githubusercontent.com/u/11214?v=3&s=460"},{id:2,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"},{id:3,name:"Perry Governor",lastText:"Look at my mukluks!",face:"https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"},{id:4,name:"Mike Harrington",lastText:"This is wicked good ice cream.",face:"https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png"}];return{all:function(){return a},remove:function(b){a.splice(a.indexOf(b),1)},get:function(b){for(var c=0;c<a.length;c++)if(a[c].id===parseInt(b))return a[c];return null}}}),angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"});