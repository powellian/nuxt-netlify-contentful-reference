➜  S-CMS git:(master) git branch -m master main
➜  S-CMS git:(main) git status
On branch main
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
➜  S-CMS git:(main) git push -u origin main
Total 0 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'main' on GitHub by visiting:
remote:      https://github.com/powellian/S-CMS/pull/new/main
remote:
To https://github.com/powellian/S-CMS.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
➜  S-CMS git:(main) git push origin --delete master
To https://github.com/powellian/S-CMS.git
 - [deleted]         master
➜  S-CMS git:(main) pwd
/Users/powellian/Sites/Pi/S/S-CMS
➜  S-CMS git:(main) ls -ls
total 8
8 -rw-r--r--  1 powellian  staff  174 12 Oct 15:54 README.md
0 drwxr-xr-x  2 powellian  staff   64 12 Oct 15:47 _etc
➜  S-CMS git:(main) ls -la
total 24
drwxr-xr-x   6 powellian  staff   192 12 Oct 15:54 .
drwxr-xr-x   9 powellian  staff   288 20 Nov 09:55 ..
-rw-r--r--@  1 powellian  staff  6148 12 Oct 15:54 .DS_Store
drwxr-xr-x  16 powellian  staff   512 14 Dec 18:52 .git
-rw-r--r--   1 powellian  staff   174 12 Oct 15:54 README.md
drwxr-xr-x   2 powellian  staff    64 12 Oct 15:47 _etc
➜  S-CMS git:(main) rm .DS_Store
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms)
➜  S-CMS git:(feature/nuxt-netlify-cms) CLnpm create-nuxt-app s-nuxt-netlify-cms
zsh: command not found: CLnpm
➜  S-CMS git:(feature/nuxt-netlify-cms) npm create-nuxt-app s-nuxt-netlify-cms

Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    /Users/powellian/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.14.9 /Users/powellian/.nvm/versions/node/v14.15.0/lib/node_modules/npm

➜  S-CMS git:(feature/nuxt-netlify-cms) create-nuxt-app s-nuxt-netlify-cms

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in s-nuxt-netlify-cms
? Project name: s-nuxt-netlify-cms
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Bulma
? Nuxt.js modules: Axios, Progressive Web App (PWA), Content
? Linting tools: Prettier
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
npm WARN deprecated core-js@2.6.12: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.


⠇ Installing packages with npm