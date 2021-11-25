(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{457:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"install-osmosis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosis"}},[s._v("#")]),s._v(" Install Osmosis")]),s._v(" "),a("p",[s._v("This guide will explain how to install the osmosid binary into your system.")]),s._v(" "),a("p",[s._v("On Ubuntu start by updating your system:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])])]),a("h2",{attrs:{id:"install-build-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-build-requirements"}},[s._v("#")]),s._v(" Install build requirements")]),s._v(" "),a("p",[s._v("Install make and gcc.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" build-essential ufw "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" jq snapd --yes\n")])])]),a("p",[s._v("Install go:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://git.io/vQhTU "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s -- --version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".2\n")])])]),a("p",[s._v("After installed, open new terminal to properly load go")]),s._v(" "),a("h2",{attrs:{id:"install-osmosis-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosis-binary"}},[s._v("#")]),s._v(" Install Osmosis Binary")]),s._v(" "),a("p",[s._v("Clone the osmosis repo, checkout and install v4.2.0 (note, if you are making a testnet node, skip this step):")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/osmosis-labs/osmosis\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" osmosis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v4.2.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);