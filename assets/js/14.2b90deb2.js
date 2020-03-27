(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{342:function(t,i,a){"use strict";a.r(i);var r=a(3),e=Object(r.a)({},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git基本原理及常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基本原理及常用指令","aria-hidden":"true"}},[t._v("#")]),t._v(" Git基本原理及常用指令")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"版本控制系统（vcs）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统（vcs）","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本控制系统（VCS）")]),t._v(" "),a("p",[t._v("三个要素：版本控制、主动提交、中央仓库；")]),t._v(" "),a("p",[t._v("中央式版本控制系统（Centralized VCS）：如svn")]),t._v(" "),a("p",[t._v("分布式版本控制系统（Distributed VCS）：如git")])])]),t._v(" "),a("p",[t._v("（DVCS的本地仓库、与VCS本地的区别，本地仓库是带版本管理功能的，可以离线做一些提交，回滚、查看历史、分支操作，而VCS的本地备份如脱离服务器则做不上面的这些操作）")]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"git的基本工作模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git的基本工作模型","aria-hidden":"true"}},[t._v("#")]),t._v(" Git的基本工作模型")]),t._v(" "),a("p",[t._v("1、从 GitHub 把中央仓库 clone 到本地（使用命令： git clone）")]),t._v(" "),a("p",[t._v("2、把写完的代码提交：先用 git add 文件名（add . 添加所有改动； 也支持匹配表达式，如 add *.java） 把文件添加到暂存区，再用 git commit 提交。")]),t._v(" "),a("p",[t._v("=="),a("em",[t._v('PS：在这个过程中，可以使用 git status 来随时查看工作目录的状态\n每个文件有 "changed / unstaged"（已修改）, "staged"（已修改并暂存）, "commited"（已提交） 三种状态，以及一种特殊状态 "untracked"（未跟踪）')]),t._v("==")]),t._v(" "),a("p",[t._v("3、提交一次或多次之后，把本地提交 push 到中央仓库（git push）")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"head、master-与-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head、master-与-branch","aria-hidden":"true"}},[t._v("#")]),t._v(" HEAD、master 与 branch")]),t._v(" "),a("p",[t._v("1、HEAD 是指向当前commit的引用，它具有唯一性，每个仓库中只有一个HEAD。在每次提交时它都会自动向前移动到最新的 commit 。")]),t._v(" "),a("p",[t._v("2、branch 是一类引用。HEAD除了直接指向commit，也可以通过指向某个 branch 来间接指向 commit。当 HEAD 指向一个 branch 时，commit 发生时，HEAD 会带着它所指向的 branch 一起移动。")]),t._v(" "),a("p",[t._v("3、master 是 Git 中的默认 branch，它和其它 branch 的区别在于：新建的仓库中的第一个 commit 会被 master 自动指向；在 git clone 时，会自动 checkout 出 master。")]),t._v(" "),a("p",[t._v("4、branch 的创建、切换和删除：")]),t._v(" "),a("p",[t._v("创建 branch 的方式是 git branch 名称 或 git checkout -b 名称（创建后自动切换）；")]),t._v(" "),a("p",[t._v("切换的方式是 git checkout 名称；")]),t._v(" "),a("p",[t._v("删除的方式是 git branch -d 名称。")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"push的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push的本质","aria-hidden":"true"}},[t._v("#")]),t._v(" push的本质")]),t._v(" "),a("p",[t._v("1、push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传。")]),t._v(" "),a("p",[t._v("2、push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 git config 修改 push.default 来改变 push 时的行为逻辑。")]),t._v(" "),a("p",[t._v("3、push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master）的。")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"merge：合并-commits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge：合并-commits","aria-hidden":"true"}},[t._v("#")]),t._v(" merge：合并 commits")]),t._v(" "),a("p",[t._v("1、merge 的含义：从两个 commit「分叉」的位置起，把目标 commit 的内容应用到当前 commit（HEAD 所指向的 commit），并生成一个新的 commit；")]),t._v(" "),a("p",[t._v("命令： HEAD指向master：git merge branch-name")]),t._v(" "),a("p",[t._v("放弃解决冲突：git merge --abort")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"日志查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志查看","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志查看")]),t._v(" "),a("p",[t._v("1、查看历史中的多个 commit： git log")]),t._v(" "),a("ul",[a("li",[t._v("查看详细改动： git log -p")]),t._v(" "),a("li",[t._v("查看大致改动：git log --stat")])]),t._v(" "),a("p",[t._v("2、查看具体某个 commit：show")]),t._v(" "),a("ul",[a("li",[t._v("要看最新 commit ，直接输入 git show ；")]),t._v(" "),a("li",[t._v("要看指定 commit ，输入 git show commit的引用或SHA-1")]),t._v(" "),a("li",[t._v("如果还要指定文件，在 git show 的最后加上文件名")])]),t._v(" "),a("p",[t._v("3、查看未提交的内容：diff")]),t._v(" "),a("ul",[a("li",[t._v("查看暂存区和上一条 commit 的区别：git diff --staged（或 --cached）")]),t._v(" "),a("li",[t._v("查看工作目录和暂存区的区别：git diff 不加选项参数")]),t._v(" "),a("li",[t._v("查看工作目录和上一条 commit 的区别：git diff HEAD")])])])])])},[],!1,null,null,null);i.default=e.exports}}]);