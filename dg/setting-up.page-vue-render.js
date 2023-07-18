
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/WATcher-docs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/WATcher-docs/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/WATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"setting-up"}},[_v("Setting up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This section guides you through the steps required to set up your computer for developing WATcher.")]),_v(" "),_c('h2',{attrs:{"id":"getting-started"}},[_v("Getting started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Prerequisites:")])]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://nodejs.org/en/blog/release/v14.21.2/"}},[_v("Node.js 14")]),_v(" -- (run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("node -v")]),_v(" in your OS terminal to check the version of Node on your computer)")])]),_v(" "),_c('p',[_c('strong',[_v("Recommended:")])]),_v(" "),_c('ul',[_c('li',[_v("IDE: Visual Studio Code")])]),_v(" "),_c('p',[_c('strong',[_v("Steps:")])]),_v(" "),_c('ol',[_c('li',[_v("Fork this repository into your Github account.")]),_v(" "),_c('li',[_v("Clone the forked repository into your computer.")]),_v(" "),_c('li',[_v("Install dependencies with npm: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install")]),_v(" "),_c('ul',[_c('li',[_c('em',[_v("a list of warnings on outdated dependencies is to be expected and no action needs to be taken before proceeding.")])])])]),_v(" "),_c('li',[_v("Compile and start the application in browser: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(".")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"dev-commands"}},[_v("Dev commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-commands","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Given below are different commands you can use to run the app locally.")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")])]),_v(" "),_c('td',[_v("Start the app from the browser in development mode.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm start")])]),_v(" "),_c('td',[_v("Start the app from Electron in development mode.")])])])])]),_c('p',[_c('em',[_v("Note that our development focus is mainly on Web-version and Electron is served as a backup plan when web version fails. You are encouraged to start working with Web version as a beginner first.")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"debugging"}},[_v("Debugging"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#debugging","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("If you are using Visual Studio Code to debug WATcher with Chrome, Firefox or Edge.\nRefer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Debugging Angular")]),_v(" section of "),_c('a',{attrs:{"href":"https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular"}},[_v("this guide")]),_v(" for a step-by-step walkthrough of the debugger setup.")]),_v(" "),_c('p',[_v("In summary, the following steps are needed:")]),_v(" "),_c('ol',[_c('li',[_v("Install the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Debugger for Chrome")]),_v(" extension for VS Code. You can also install debugger extensions for Firefox and Edge.")]),_v(" "),_c('li',[_v("Create VS Code's debugger config file ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("launch.json")]),_v(" ) as shown in "),_c('a',{attrs:{"href":"https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular"}},[_v("the guide")]),_v(". Particularly, set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("url")]),_v(" attribute to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("http://localhost:4200")]),_v(" (reason: WATcher app is served locally on port 4200, by default.)")]),_v(" "),_c('li',[_v("In the root project folder, run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(".")]),_v(" "),_c('li',[_v("In VS Code's Debug View, launch the debugger by clicking the green arrow (or F5). You should see the WATcher app loading within a new browser window.")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"writing-documentation"}},[_v("Writing Documentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#writing-documentation","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("WATcher documentation is hosted in a separate repo")]),_v(" "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher-doc"}},[_v("CATcher-org/WATcher-doc")]),_v(".\nWhen you need to update documentation, you'll need to fork and clone that repo to your computer as well.")]),_v(" "),_c('p',[_c('strong',[_v("We use "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind")]),_v(" for documentation")]),_v(". Follow "),_c('a',{attrs:{"href":"https://se-education.org/guides/tutorials/markbind.html"}},[_v("this tutorial")]),_v(" to learn how to use MarkBind for updating project documentation.")]),_v(" "),_c('hr')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.0.1")]),_v(", generated on Tue, 18 Jul 2023, 3:33:43 UTC]")])])])}
}];
  