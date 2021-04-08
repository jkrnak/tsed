(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{717:function(t,e,s){},719:function(t,e,s){"use strict";s(717)},721:function(t,e,s){"use strict";s(25),s(11),s(29);var o=s(72),a=s(21),r={name:"Page",components:{PageNav:o.PageNav,PageHeader:o.PageHeader,PageSidebar:o.PageSidebar},props:["sidebarItems"],data:function(){return{headerFixed:!1}},computed:{repoUrl:function(){return this.editUrl.replace("/edit","/blob")},hashTags:function(){return this.$frontmatter.hashTags||this.$site.themeConfig.defaultHashTags||[]},createIssueUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.docsRepo,o=void 0===s?e:s,r=Object(a.k)(this.$page.path),i=a.l.test(o)?o:"https://github.com/".concat(o);return"".concat(i,"/issues/new?title=").concat(encodeURIComponent("[BUG] Page ".concat(this.$page.title," - ").concat(r)))},editUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.editLinks,r=t.docsDir,i=void 0===r?"":r,n=t.docsBranch,l=void 0===n?"master":n,u=t.docsRepo,c=void 0===u?e:u,h=Object(a.k)(this.$page.path);if(a.a.test(h)?h+="README.md":h+=".md",c&&s)return Object(o.createEditLink)(e,c,i,l,h)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},shouldShowOtherTopics:function(){var t=this.$page.frontmatter;return!t.layout&&!this.isLandingPage&&!1!==t.otherTopics&&this.otherTopicsItems.length},shouldShowPageSidebar:function(){return!1!==this.$page.frontmatter.pageSidebar},otherTopicsItems:function(){return Object(o.resolveOtherTopicsItems)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.headerFixed=window.pageYOffset>140}))},methods:{}},i=(s(719),s(1)),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"page"},[s("div",[s("div",{staticClass:"relative"},[s("PageHeader",{attrs:{fixed:t.headerFixed,title:t.$page.title||"Not found","repo-url":t.repoUrl,hashTags:t.hashTags,"create-issue-url":t.createIssueUrl,"edit-url":t.editUrl}})],1),t._v(" "),s("div",{staticClass:"px-5 md:px-10 max-w-site m-auto"},[s("div",{staticClass:"page-content"},[s("article",[t._t("page-top"),t._v(" "),s("Content"),t._v(" "),t._t("page-bottom")],2),t._v(" "),s("div",{staticClass:"pt-5"},[t.lastUpdated?s("div",{staticClass:"py-5 flex justify-end text-sm"},[s("p",[s("span",{staticClass:"font-bold pr-1"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])])]):t._e(),t._v(" "),s("PageNav",{attrs:{sidebarItems:t.sidebarItems}})],1),t._v(" "),t.shouldShowOtherTopics?s("OtherTopics",{staticClass:"px-3",attrs:{slot:"page-bottom",items:t.otherTopicsItems},slot:"page-bottom"},[s("h4",{staticClass:"text-xl mb-4 mt-2 font-semibold",attrs:{slot:"top"},slot:"top"},[t._v("\n            Other topics\n          ")])]):t._e()],1)]),t._v(" "),t.shouldShowPageSidebar?s("PageSidebar",{staticClass:"fixed overflow-auto",class:{"-mini-header":t.headerFixed},attrs:{page:t.$page}}):t._e()],1)])}),[],!1,null,null,null);e.a=n.exports},724:function(t,e,s){},728:function(t,e,s){"use strict";s(724)},739:function(t,e,s){"use strict";s.r(e);var o=s(72),a=s(3),r=s(173),i={name:"Home",components:{HeroBanner:o.HeroBanner,HeroBannerCta:o.HeroBannerCta,WordsSlider:o.WordsSlider,Feature:o.Feature,GithubContributors:o.GithubContributors,OpenCollectiveBackers:o.OpenCollectiveBackers,Button:o.Button,Showcase:o.Showcase},computed:{gettingStartedUrl:function(){var t=this.$page.frontmatter.gettingStartedUrl;return t},gettingStartedText:function(){var t=this.$page.frontmatter.gettingStartedText;return t},messengerUrl:function(){var t=this.$page.frontmatter.messengerUrl;return t},messengerText:function(){var t=this.$page.frontmatter.messengerText;return t},features:function(){var t=this.$page.frontmatter.features,e=void 0===t?[]:t;return e},contributors:function(){var t=this.$page.frontmatter.contributors;return t},liveDemoUrl:function(){var t=this.$page.frontmatter.liveDemoUrl;return t}}},n=s(1),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeroBanner",[s("template",{slot:"hero-brand"},[s("Content",{attrs:{"slot-key":"hero-brand"}})],1),t._v(" "),s("template",{slot:"hero-slogan"},[s("Content",{attrs:{"slot-key":"hero-slogan"}})],1),t._v(" "),s("template",{slot:"hero-content"},[s("Content",{attrs:{"slot-key":"hero-content"}})],1),t._v(" "),s("template",{slot:"hero-cta"},[s("HeroBannerCta",{attrs:{"getting-started-text":t.gettingStartedText,"getting-started-url":t.gettingStartedUrl,"messenger-text":t.messengerText,"messenger-url":t.messengerUrl}})],1)],2),t._v(" "),s("div",{staticClass:"bg-gray-lighter py-10"},[s("div",{staticClass:"container flex flex-col w-full max-w-md mx-auto px-3 pb-5 text-center"},[s("h2",{staticClass:"text-2xl mb-5 normal-case"},[s("Content",{attrs:{"slot-key":"testimonial-title"}})],1),t._v(" "),s("Content",{attrs:{"slot-key":"testimonial-content"}})],1)]),t._v(" "),t.features.length?s("div",[s("div",{staticClass:"container flex flex-col w-full max-w-site mx-auto px-5 py-5"},[s("div",[s("div",{staticClass:"flex flex-wrap align-center justify-center"},t._l(t.features,(function(e){return s("Feature",{staticClass:"w-full sm:w-1/2 md:w-1/3 mb-5",attrs:{title:e.title,icon:e.icon}},[s("div",{domProps:{innerHTML:t._s(e.details)}})])})),1),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-5 mb-5"},[s("div",[s("Button",{staticClass:"m-2",attrs:{rounded:"medium",href:t.gettingStartedUrl}},[t._v("\n              See more\n            ")]),t._v(" "),t.liveDemoUrl?s("Button",{staticClass:"m-2",attrs:{href:t.liveDemoUrl,rounded:"medium","bg-color":"white-button",color:"blue"}},[t._v("\n              Live demo\n            ")]):t._e()],1)]),t._v(" "),s("Content",{attrs:{"slot-key":"features-footer"}})],1)])]):t._e(),t._v(" "),t._t("page-top"),t._v(" "),s("Content"),t._v(" "),t.contributors?s("Showcase",t._b({class:t.contributors.classes,scopedSlots:t._u([{key:"showcase-cta",fn:function(){return[s("Button",{attrs:{"bg-color":t.contributors.cta.bgColor,color:t.contributors.cta.color,rounded:"medium",href:t.contributors.cta.url}},[t._v("\n        "+t._s(t.contributors.cta.label)+"\n      ")])]},proxy:!0}],null,!1,3949236416)},"Showcase",t.contributors,!1),[s("GithubContributors",t._b({},"GithubContributors",t.contributors.badge,!1))],1):t._e(),t._v(" "),s("SupportUsBlock"),t._v(" "),t._t("page-bottom")],2)}),[],!1,null,null,null).exports,u=s(721),c={name:"WarehousePage",components:{Warehouse:o.Warehouse}},h=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("Warehouse",{attrs:{url:this.$site.themeConfig.warehouseUrl||"https://api.tsed.io/rest/warehouse","initial-plugins":this.$site.themeConfig.warehouseItems}},[e("Content",{attrs:{"slot-key":"warehouse-header"}})],1)}),[],!1,null,null,null).exports;a.a.use(r.a);var d={components:{Home:l,Page:u.a,WarehousePage:h,Navbar:o.Navbar,Sidebar:o.Sidebar,Footer:o.Footer,SupportUs:o.SupportUs},data:function(){return{isSidebarOpen:!1}},computed:{navLinks:function(){return Object(o.getUserNavLinks)(this)},repoUrl:function(){var t=this.$site.themeConfig.repo;return/^https?:/.test(t)?t:"https://github.com/".concat(t)},siteTitle:function(){return this.$site.themeConfig.shortTitle||this.$siteTitle},htmlTitle:function(){return this.$site.themeConfig.htmlTitle||this.$siteTitle},logoSrc:function(){return this.$site.themeConfig.logo&&this.$withBase(this.$site.themeConfig.logo)},isLandingPage:function(){return"Home"===this.$page.frontmatter.layout},isCustomLayout:function(){return this.$page.frontmatter.layout&&!this.isLandingPage},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return this.isSidebarOpen||!1!==t.sidebar&&this.sidebarItems.length},shouldShowPageSidebar:function(){return!1!==this.$page.frontmatter.pageSidebar},sidebarItems:function(){return Object(o.resolveSidebarItems)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},footer:function(){return this.$themeLocaleConfig.footer||this.$site.themeConfig.footer||{}},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"with-sidebar":this.shouldShowSidebar},t]},algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=(s(728),Object(n.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"init",class:{"full-page":!t.shouldShowPageSidebar}},[s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{attrs:{"site-title":t.siteTitle,"html-title":t.htmlTitle,"logo-src":t.logoSrc,href:t.$localePath,"repo-url":t.repoUrl,"social-urls":t.$site.themeConfig,items:t.navLinks,algolia:t.algolia},scopedSlots:t._u([{key:"sidebar-before",fn:function(){return[s("div",{staticClass:"flex cursor-pointer text-xl mr-4",on:{click:t.toggleSidebar}},[s("i",{staticClass:"bx bx-menu"})])]},proxy:!0}],null,!1,1102263417)}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("main",{staticClass:"main-content relative z-2 pt-16"},[t.isCustomLayout?s("div",{staticClass:"custom-layout"},[s(t.$page.frontmatter.layout,{tag:"component"})],1):t.isLandingPage?s("Home"):s("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1),t._v(" "),t.shouldShowSidebar?s("Sidebar",{class:{"-translate-x-100 md:shadow-sidebar md:translate-x-0":!t.isSidebarOpen,"translate-0 shadow-sidebar":t.isSidebarOpen},attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}):t._e(),t._v(" "),s("Footer",{attrs:{"repo-url":t.repoUrl,author:t.$site.themeConfig.author,"license-type":t.$site.themeConfig.licenseType,"copyright-dates":t.$site.themeConfig.copyrightDates,sections:t.footer.sections,"social-urls":t.$site.themeConfig},scopedSlots:t._u([{key:"top",fn:function(){return[t.isLandingPage?t._e():s("SupportUs",{attrs:{brand:t.$site.themeConfig.shortTitle,"sponsor-url":t.$site.themeConfig.sponsorUrl,"license-type":t.$site.themeConfig.licenseType}}),t._v(" "),t._t("footer-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("footer-bottom")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null));e.default=g.exports}}]);