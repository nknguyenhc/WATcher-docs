
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/WATcher-docs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/WATcher-docs/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/WATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_m(0),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"watcher-product-site"}},[_v("WATcher Product Site"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#watcher-product-site","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h1',{attrs:{"id":"setting-up"}},[_v("Setting up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This section guides you through the steps required to set up a development container using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Docker")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VSCode")]),_v(" for developing WATcher's user guide site.")]),_v(" "),_c('h2',{attrs:{"id":"prerequisites"}},[_v("Prerequisites"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#prerequisites","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Install the following programs:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://code.visualstudio.com/"}},[_v("VSCode")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.docker.com/"}},[_v("Docker Desktop")])])]),_v(" "),_c('h2',{attrs:{"id":"getting-started"}},[_v("Getting Started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Open the folder in VSCode. The Dev Containers extension should be recommended.\n"),_c('ol',[_c('li',[_c('a',{attrs:{"href":"/WATcher-docs/assets/dev-container-recommended-ext.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/WATcher-docs/assets/dev-container-recommended-ext.png","alt":""}})]),_v(" Click on "),_c('strong',[_v("Install")])]),_v(" "),_c('li',[_v("Ensure that you follow the installation guide for the extension pack as well, especially for operating system-specific steps.")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/WATcher-docs/assets/reopen-in-container.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/WATcher-docs/assets/reopen-in-container.png","alt":""}})]),_v(" Click "),_c('strong',[_v("Reopen in Container")]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"/WATcher-docs/assets/open-a-remote-window.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/WATcher-docs/assets/open-a-remote-window.png","alt":""}})]),_v("  Or click the "),_c('em',[_v("double arrow icon")]),_v(" in the bottom left of the window.")]),_v(" "),_c('li',[_v("Select "),_c('strong',[_v("Reopen in Container")])])])]),_v(" "),_c('li',[_v("After container build, press any key to access shell.")]),_v(" "),_c('li',[_v("You may start the application with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind serve")])])]),_v(" "),_c('blockquote',[_c('p',[_v("If you encounter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Error: Cannot find module '/home/vscode/.vscode-server/data/User/workspaceStorage/a58265afe7bacfc76c46ea6bab19d711/ms-vscode.js-debug/bootloader.js'")])]),_v(" "),_c('ol',[_c('li',[_v("Open "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"debug.javascript.autoAttachFilter\": \"disabled\"")]),_v(" in User Settings")]),_v(" "),_c('li',[_v("Toggle settings to anything valid, pausing a few moment between each change.")]),_v(" "),_c('li',[_v("Try again")])]),_v(" "),_c('p',[_v("Dev Containers seem to still be rather stateful. Fix taken from "),_c('a',{attrs:{"href":"https://www.davidwesst.com/blog/missing-bootloader-in-vscode-devcontainer/"}},[_v("here")]),_v(". Good news is the error does not show up unless you rebuild the container.")])]),_v(" "),_c('h3',{attrs:{"id":"git-settings"}},[_v("Git Settings"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-settings","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Follow official documentation "),_c('a',{attrs:{"href":"https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container"}},[_v("here")])]),_v(" "),_c('h1',{attrs:{"id":"setting-up-alt"}},[_v("Setting up [alt]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-alt","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This section guides you through the steps required to set up a local development environment for developing WATcher's user guide site.")]),_v(" "),_c('h2',{attrs:{"id":"prerequisites-2"}},[_v("Prerequisites"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#prerequisites-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("You need Node 14 to develop this project.\nRun "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("node -v")]),_v(" in your OS terminal to check the version of Node on your computer.")]),_v(" "),_c('p',[_v("If you do not have Node 14 installed in your computer, click on "),_c('a',{attrs:{"href":"https://nodejs.org/en/download/releases/"}},[_v("this link")]),_v(" to download Node 14.")]),_v(" "),_c('h2',{attrs:{"id":"getting-started-2"}},[_v("Getting Started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Fork this repository into your Github account.")])]),_v(" "),_c('li',[_c('p',[_v("Clone the forked repository into your computer.")])]),_v(" "),_c('li',[_c('p',[_v("Install MarkBind with npm: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install -g markbind-cli")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Compile and start the application: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind serve")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Note")]),_v(": If this step fails, it may be possible that the port that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MarkBind")]),_v(" is attempting to serve the site in is being used. This may be rectified with the following command: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind serve -p <available_port>")]),_v(".")])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.0.1")]),_v(", generated on Tue, 18 Jul 2023, 3:26:29 UTC]")])])])}
}];
  