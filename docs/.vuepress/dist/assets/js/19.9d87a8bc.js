(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1e3:function(t,s,a){t.exports=a.p+"assets/img/oklite-7.97c9507a.png"},1001:function(t,s,a){t.exports=a.p+"assets/img/oklite-8.081a0094.png"},1002:function(t,s,a){t.exports=a.p+"assets/img/oklite-9.fc3804e4.png"},2261:function(t,s,a){"use strict";a.r(s);var n=a(75),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"oklite-1-2-25-后台模块导入-任意文件上传-cve-2019-16131"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oklite-1-2-25-后台模块导入-任意文件上传-cve-2019-16131"}},[t._v("#")]),t._v(" OKLite 1.2.25 后台模块导入 任意文件上传 CVE-2019-16131")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("OKLite v1.2.25 后台模块导入过滤不完善导致可以上传恶意木马文件")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("OKLite 1.2.25")]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("首先要先清楚它的执行流程")]),t._v(" "),n("p",[t._v("查看文件 "),n("strong",[t._v("framework/init.php")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(994),alt:"img"}})]),t._v(" "),n("p",[t._v("在往下面看可以看到执行函数的逻辑")]),t._v(" "),n("p",[n("img",{attrs:{src:a(995),alt:"img"}})]),t._v(" "),n("p",[t._v("例如 http://127.0.0.1/admin.php?c=ABC&f=EFG")]),t._v(" "),n("p",[t._v("则是调用  "),n("strong",[t._v("framework\\admin\\ABC_control.php")]),t._v("中的"),n("strong",[t._v("EFG_f")]),t._v("方法")]),t._v(" "),n("p",[n("img",{attrs:{src:a(996),alt:"img"}})]),t._v(" "),n("p",[t._v("看到在后台有一个 ZIP 文件上传的函数，找一下上传ZIP文件的位置")]),t._v(" "),n("p",[n("img",{attrs:{src:a(997),alt:"img"}})]),t._v(" "),n("p",[n("strong",[t._v("模块管理 --\x3e 模块导入")])]),t._v(" "),n("p",[t._v("回头看下函数方法的调用")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("zipfile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$folder")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("P_Lang")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'未指定表单名称'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果未指定存储文件夹，则使用")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$folder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$folder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'data/cache/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("cateid")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$folder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("cate")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'filemax'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("104857600")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'root'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$folder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'folder'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'filetypes'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_FILES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_upload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ok'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("cate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("这里的 上传目录默认为 "),n("strong",[t._v("data/cache")]),t._v(" 这个目录，并调用了两个方法 "),n("em",[n("strong",[t._v("upload 和")])]),t._v(" "),n("strong",[t._v("save")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(998),alt:"img"}})]),t._v(" "),n("p",[t._v("可以看到这里其实对上传的zip并没有对里面的文件有什么过滤,任意上传一个ZIP文件抓包")]),t._v(" "),n("p",[n("strong",[t._v("test.php")]),t._v("文件内容 如下，打包为 "),n("strong",[t._v("test.zip")]),t._v(" 上传")]),t._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("<?php phpinfo();?>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(999),alt:"img"}})]),t._v(" "),n("p",[t._v("可以看到这里调用的方法是 "),n("strong",[t._v("upload_control中的 zip 方法")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1e3),alt:"img"}})]),t._v(" "),n("p",[t._v("这里放包后发现调用了另一个方法，跟踪下代码 "),n("strong",[t._v("framework/admin/module_control.php 中的 import_f方法")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1001),alt:"img"}})]),t._v(" "),n("p",[t._v("这里的方法为解压方法，说明ZIP文件上传的逻辑为")]),t._v(" "),n("p",[n("strong",[t._v("模块上传 --\x3e ZIP文件写入 data/cache --\x3e 解压刚刚的ZIP文件到 data/cache 目录")])]),t._v(" "),n("p",[t._v("所以这里的流程完全是没有过滤危险文件的，将一个木马文件打包为ZIP文件上传访问即可")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1002),alt:"img"}})]),t._v(" "),n("p",[t._v("若有收获，就点个赞吧")])],1)}),[],!1,null,null,null);s.default=r.exports},994:function(t,s,a){t.exports=a.p+"assets/img/oklite-1.b38349f0.png"},995:function(t,s,a){t.exports=a.p+"assets/img/oklite-2.8697c15e.png"},996:function(t,s,a){t.exports=a.p+"assets/img/oklite-3.00127582.png"},997:function(t,s,a){t.exports=a.p+"assets/img/oklite-4.443f9153.png"},998:function(t,s,a){t.exports=a.p+"assets/img/oklite-5.7f76fc74.png"},999:function(t,s,a){t.exports=a.p+"assets/img/oklite-6.006b56c9.png"}}]);