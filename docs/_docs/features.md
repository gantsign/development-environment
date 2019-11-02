---
title: Features
permalink: /docs/features/
description: >
  Features provided by the GantSign EnV development environment.
numbered_headings: yes
date: 2017-01-18T16:35:52+00:00
modified: 2019-10-06T21:16:46+01:00
---

There are a lot of well known projects, and hidden gems, which aid in your
productivity; this project aims to install the best of them to make life a
little easier.

{% include inline_toc.html %}

## For everybody

### Dynamically allocated swap space

Website: [https://github.com/Tookmund/Swapspace](https://github.com/Tookmund/Swapspace)

Swapspace is a dynamic swap manager for Linux. It dynamically allocates file
based swap space to provide virtual memory when needed.

### Compressed swap

Website: [https://www.kernel.org/doc/Documentation/vm/zswap.txt](https://www.kernel.org/doc/Documentation/vm/zswap.txt)

Zswap is a kernel feature that provides a compressed RAM cache for swap pages.

Unless you have 16GB of RAM you're probably going to struggle to run VirtualBox,
your IDE, a Maven build, your application, and a few services in Docker at the
same time.

Enabling swap compression in the virtual machine allows you to run more things
at once before swap I/O performance becomes an issue.

### File backup & restore between rebuilds

Website: [https://rsync.samba.org](https://rsync.samba.org)

One of the advantages of using a virtual machine is it's easy to get back to a
clean working state by rebuilding the virtual machine.

However, you want to keep your user-specific setup, and your workspace with all
the repositories you've cloned.

This project uses [rsync](https://rsync.samba.org) to backup selected files and
folders from the client virtual machine to a separate persistent virtual disk on
the host machine.

When the virtual machine is rebuilt, these files and folders are copied back to
the new client virtual machine.

The following are some of the files and folders backed-up by default:

* `/home/vagrant/workspace/`

    * **Put all your projects here**

* `/home/vagrant/.gitconfig`
* `/home/vagrant/.ssh/` (except the `authorized_keys` file)
* `/home/vagrant/.gnupg/`
* `/home/vagrant/.m2/`  (except the `repository` and `wrapper` directories)

**Caution:** the followings directories are excluded from the backup by
default: `.bin`, `.molecule`, `.tmp`, `bin`, `build`, `node_modules`, `target`.

**Note:** you can find your backup under: `/var/persistent/home/vagrant/`.

**Notice:** we accept no responsibility for files lost due to a failure of the
backup/restore process. We recommend you push your work to your source control
server before rebuilding your virtual machine. We also recommend you manually
backup important keys and certificates (e.g. SSH, GPG, X.509) on your host
machine.

## For command line users

### Terminator

Website: [http://gnometerminator.blogspot.co.uk/p/introduction.html](http://gnometerminator.blogspot.co.uk/p/introduction.html)

A highly customizable terminal emulator that supports splitting the screen into
grids of separate console windows (as well as supporting multiple tabs).

![Terminator terminal emulator]({{ '/images/terminator.png' | relative_url }})

Tip: right click on the window to bring up the menu to split the screen or open
a new tab.

### CDPATH

Website: [http://zsh.sourceforge.net/Intro/intro_13.html](http://zsh.sourceforge.net/Intro/intro_13.html)

This environment variable changes how tab completion and the `cd` command works.

We've added the `/home/vagrant/workspace` directory to `CDPATH`; this enables
you to `cd` into any sub-directory of `/home/vagrant/workspace` from any
directory in the file system.

For example:

```bash
# Create a directory under /home/vagrant/workspace
mkdir -p /home/vagrant/workspace/my-awesome-project

# Change directory somewhere else
cd /etc

# Use tab completion (from /etc)
cd my-awe<TAB>

# Change directory to my-awesome-project (from /etc)
cd my-awesome-project

# Check you're in the right directory
pwd
/home/vagrant/workspace/my-awesome-project
```

This makes it really quick and easy to access your project directories.

### Oh My Zsh

Website: [http://ohmyz.sh](http://ohmyz.sh)

Rather than a specific command, Oh My Zsh changes your default shell from `bash`
to `zsh`, and customizes the `zsh` shell.

Oh My Zsh gives you:

* Better tab completion (like expanding partial names in path).
* Themes to enhance your command prompt (like showing the current git branch).
* Plugins to enable command specific tab completion (e.g. `mvn` and `git`).

![zsh terminal output]({{ '/images/oh-my-zsh.png' | relative_url }})

Try this:

```bash
cat /u/s/a/vim<TAB>

# Expands to:
cat /usr/share/applications/vim.desktop
```

Tip: tab-completion for command options often only works after you've specified
the `-`. For example `grep` `TAB` produces no suggestions, but `grep -` `TAB`
produces 160 suggestions.

### Antigen

Website: [https://github.com/zsh-users/antigen](https://github.com/zsh-users/antigen)

Oh My Zsh has a wide selection of plugins, but sometimes you want to install
plugins from elsewhere. This is where Antigen comes in, Antigen is a plugin
manager for Zsh and can install Zsh plugins from Git repositories.

Note: the Antigen commands don't make persistent changes. Any change you make to
the theme/plugins will be lost the next time you launch the shell. To make
changes permanent you need to run the Antigen commands as part of the
initialisation of your shell. To do this you either need to change the
`playbook.yml` of this project and re-provision your VM, or run the Antigen
commands from the `.zshrc` in your home directory.

You can find a list of third-party plugins at:
[https://github.com/unixorn/awesome-zsh-plugins#plugins](https://github.com/unixorn/awesome-zsh-plugins#plugins)

### HTTPie

Website: [https://httpie.org](https://httpie.org)

HTTPie is a command line HTTP client. HTTPie is somewhat like cURL or Wget, but
designed more for interactive use than use in shell scripting. It has a more
intuitive command line interface, JSON support and syntax highlighting.

![HTTPie]({{ '/images/httpie.png' | relative_url }})

### The Silver Searcher

Website: [http://geoff.greer.fm/ag](http://geoff.greer.fm/ag)

If you've used Linux you've almost certainly used `grep`, but you've probably
never heard of `ag` (The Silver Searcher).

While `grep` is a great general purpose tool, `ag` is a specific tool for
finding matching text in a directory tree and outputting the results in a human
readable format.

Below is the output of the command `ag java` on this project:

![The Silver Searcher terminal output]({{ '/images/ag.png' | relative_url }})

Tip: if you have multiple pages of output you may want to use
`ag --pager=less PATTERN`.

### Tree

Website: [http://mama.indstate.edu/users/ice/tree](http://mama.indstate.edu/users/ice/tree)

The `tree` command is similar to `find .` but outputs in a graphical tree
format.

Below is the output of the command `tree` on this project:

![Tree terminal output]({{ '/images/tree.png' | relative_url }})

Tip: if you have multiple pages of output you may want to use
`tree -C | less -R`.

### Jq

Website: [https://stedolan.github.io/jq](https://stedolan.github.io/jq)

The `jq` command would be worth installing just to be able to use it to pretty
print JSON in colour, but `jq` is amazing at manipulating JSON as well.

![Jq output]({{ '/images/jq.png' | relative_url }})

Tip: to pretty print a JSON file run `jq '.' PATH_TO_JSON_FILE`.

### fd

Website: [https://github.com/sharkdp/fd](https://github.com/sharkdp/fd)

`fd` is a simple, fast and user-friendly alternative to `find`.

It's much better for the most common use-case (i.e. finding files/directories by
name) e.g:

![fd]({{ '/images/fd.png' | relative_url }})

This is obviously easier than `find -iname '*molecule*'`.

`fd` is still capable of handling more advanced use-cases as well, e.g. you can
specify the type of file or a command to execute.

### bat

Website: [https://github.com/sharkdp/bat](https://github.com/sharkdp/bat)

`bat` is a more advanced alternative to `cat` with support for
syntax-highlighting, line numbers, searching and paging.

e.g. running `bat ~/.bashrc` will give you:

![fd]({{ '/images/bat.png' | relative_url }})

### htop

Website: [http://hisham.hm/htop](http://hisham.hm/htop)

The `htop` command is essentially a `top` replacement with a better looking user
interface and a few more features.

![htop terminal output]({{ '/images/htop.png' | relative_url }})

### Glances

Website: [https://nicolargo.github.io/glances](https://nicolargo.github.io/glances)

The `glances` application shows a broader view of what's going on on your system
than `top` or `htop` provide. In addition to RAM and CPU usage, you can see
disk I/O, network I/O and warnings/alerts.

![Glances terminal output]({{ '/images/glances.png' | relative_url }})

## For GUI desktop users

### Pre-pinned applications

No more fishing through menus to run the applications you use the most. The
provisioning script pre-pins selected applications to the dock so they're
ready to use.

![Pre-pinned applications]({{ '/images/pin-to-launcher.png' | relative_url }})

### Choice of dock position

Each user can choose whether they want the dock bar on the left, right or bottom
of the screen.

{% capture fig_img %}
![Dock position]({{ '/images/dock-position.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Examples of left and bottom dock positions</figcaption>
</figure>

### Seahorse

Website: [https://wiki.gnome.org/Apps/Seahorse](https://wiki.gnome.org/Apps/Seahorse)

Graphical user interface for managing your keys, and a SSH agent to save you
having to put in your SSH password more than once in the same session.

![Seahorse]({{ '/images/seahorse.png' | relative_url }})

## For developers

### IntelliJ IDEA IDE

Website: [https://www.jetbrains.com/idea](https://www.jetbrains.com/idea)

In my opinion IntelliJ IDEA is the best IDE whether you're working in Java,
Python, Node.js or Go (Node.js and Go support requires IntelliJ IDEA Ultimate
Edition).

The Community Edition is excellent at what it does but it's quite limited in
support for languages and frameworks. You need to pay for the
[Ultimate Edition](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html)
if you want support for common tools/frameworks such as JavaEE and the Spring
Framework. The relatively small price for the Ultimate Edition is well worth the
money.

By default the Community Edition is installed.

![IntelliJ IDEA IDE]({{ '/images/intellij.png' | relative_url }})

### Visual Studio Code

Website: [https://code.visualstudio.com](https://code.visualstudio.com)

Great support for YAML, Markdown, HTML, CSS, LESS, SASS, JavaScript,
TypeScript, Node.js, Python, Bash and many more.

Core languages have IntelliSense support for smart completion.

The built in debugger is very good and supports several languages.

Has good built-in support for Git; while, it's missing a few features that you'd
expect from a standalone Git client, it covers the normal development workflow.

Tip: click on the branch name in the bottom left corner to change/create
branches.

![Visual Studio Code editor window]({{ '/images/visual-studio-code.png' | relative_url }})

### EditorConfig

Website: [http://editorconfig.org](http://editorconfig.org)

EditorConfig is a project that defines a common configuration file supported by
many IDEs and text editors (some require a plugin installed).

The EditorConfig configuration file defines the basic editor preferences for
particular files and file types (e.g. charset, line endings, indent, trailing
whitespace).

This development environment installs the EditorConfig plugin for Visual
Studio Code as part of the provisioning; IntelliJ IDEA supports EditorConfig
without the need for a plugin.

For an example of an `.editorconfig` file see the root directory of this
project.

### Git aliases

Git aliases save you a lot of typing and make it easy to execute more complex
Git commands:

* View summary lines for recent commits

    `git ls` ≡ `git log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate`

* View summary lines and list changed files for recent commits

    `git ll` ≡ `git log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat`

* View summary lines and dates for recent commits

    `git lds` ≡ `git log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short`

* View tree of recent commits (all branches)

    `git lt` ≡ `git log --oneline --graph --decorate --all`

* Checkout an existing branch

    `git co` ≡ `git checkout`

* Create a new branch

    `git cb` ≡ `git checkout -b`

* Amend the last commit and change the commit message

    `git ca` ≡ `git commit --amend`

* Amend the last commit without changing the commit message

    `git cane` ≡ `git commit --amend --no-edit`

* Rebase the current branch onto `origin/master`

    `git rom` ≡ `git rebase origin/master`

* Rebase the current branch onto `origin/develop`

    `git rod` ≡ `git rebase origin/develop`

* Push the current branch to `origin HEAD`

    `git po` ≡ `git push origin HEAD`

* Force push the current branch to `origin HEAD`

    `git pof` ≡ `git push origin HEAD --force`

* Switch to the `master` branch pull changes and prune remote branches

    `git cmp` ≡ `git checkout master && git pull -p`

* Switch to the `develop` branch pull changes and prune remote branches

    `git cdp` ≡ `git checkout develop && git pull -p`

* Pop the most recent stash

    `git pop` ≡ `git stash pop`

* Reformat the recent changes as Markdown release notes

    `git release-notes` ≡ `git log --color --pretty=format:'%s%Cred%d%Creset' --decorate | sed -E 's/(.*) \\((\\#[0-9]+)\\)/* \\2: \\1/' | tac -`

### Git-GUI

Website: [https://git-scm.com/docs/git-gui](https://git-scm.com/docs/git-gui)

Git-GUI and Gitk (see below) are companion applications that together make the
most fully featured open source GUI Git client available for Linux.

Git-GUI is the commit dialog and the UI for performing remote operations.

![Git GUI window]({{ '/images/git-gui.png' | relative_url }})

Generally, I'd advise only using Git-GUI when you need to amend a commit, the
rest of the time you're better off using the commit dialog in your editor/IDE.

Tip: run `git gui` in your Git working directory to launch Git-GUI.

### Gitk

Website: [https://git-scm.com/docs/gitk](https://git-scm.com/docs/gitk)

Gitk and Git-GUI (see above) are companion applications that together make the
most fully featured open source GUI Git client available for Linux.

Gitk is the repository/history browser.

![Gitk window]({{ '/images/gitk.png' | relative_url }})

As you can see it's not the prettiest application, but the other options are
either not free for commercial use, require registration to download, or lack
support for resetting the working branch to a particular commit.

While the built in diff viewer is a bit basic, it supports using Meld
(see below) as an external diff viewer.

Tip: run `gitk` in your Git working directory to launch Gitk.

Gitk and Git-GUI are integrated, so once you've run one of the applications, you
can launch the other from the menu bar.

### Meld

Website: [http://meldmerge.org](http://meldmerge.org)

A GUI diff/merge tool with Git support.

![Meld diff/merge tool]({{ '/images/meld.png' | relative_url }})

Tip: run `meld .` in your Git working directory to review your uncommitted
changes.

### Git Credential Manager for Mac and Linux

Website: [https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)

Stores credentials for Git version control securely. Useful if you want to write
to a Git repository using HTTPS rather than SSH.

Note: if you use two-factor authentication with GitHub (you'd be crazy not to),
you need to generate a
[personal access token](https://github.com/settings/tokens) with appropriate
repository permissions. When using Git in the VM, enter this personal access
token when prompted to enter your password (instead of entering your GitHub
password).

### Hub

Website: [https://github.com/github/hub](https://github.com/github/hub)

Hub is a command line tool that wraps Git in order to extend it with extra
features for GitHub.

Note: Hub only wraps Git when run from Zsh (it works using a shell alias), the
actual Git executable is unchanged.

e.g. Cloning a GitHub repository

```bash
git clone Netflix/flamescope
# Equivalent to:
# git clone git@github.com:Netflix/flamescope.git
```

e.g. Creating a pull request

```bash
git pull-request -m "\
Pull request title here

Pull request body here.
"
```

e.g. Browse issues for current repository

```bash
git browse -- issues
```

Run the following to see all the extensions provided by hub:

```bash
man hub
```

To view more information about a specific extension run:

```bash
man hub-<subcommand>
# e.g.
man hub-pull-request
```

### Postman

Website: [https://www.getpostman.com](https://www.getpostman.com)

A user friendly tool for testing REST services.

![Postman window]({{ '/images/postman.png' | relative_url }})

## For containerized development

### Docker

Website: [https://www.docker.com](https://www.docker.com)

Solves the problem of handling dependencies and common configuration between
development, build, test and production.

When using a Docker image, there's no more worrying if you have the correct
Java/Ruby/Python version installed, or is the `JAVA_HOME` set to the correct
installation; all of that is provided in the Docker image, you just use it.

It's also easy to build your own Docker images so you can get the same benefits
with your own software.

### ctop

Website: [https://ctop.sh](https://ctop.sh)

`ctop` is the terminal based tool that provides a `top` like interface for
container metrics. View CPU, memory, network I/O, and disk I/O for your
Docker containers at a glance from your terminal.

![ctop in terminal window]({{ '/images/ctop.png' | relative_url }})

### Kubernetes

Website: [http://kubernetes.io](http://kubernetes.io)

Kubernetes is the leading solution for managing containerized applications
in production.

Docker is great for running containerized applications locally, but you need
something more to manage containerized applications across multiple servers.
There's [Docker Swarm](https://docs.docker.com/engine/swarm/) and
[Apache Mesos](http://mesos.apache.org) but the most popular solution is
Kubernetes.

Kubernetes allows you to deploy services to a cluster of servers, to manage
configuration, configure networking, perform rolling updates and much more.

### Minikube

Website: [https://github.com/kubernetes/minikube](https://github.com/kubernetes/minikube)

Minikube makes it easy to run a single node Kubernetes cluster in the
development environment.

Give it a try by running the following from the terminal:

```bash
minikube start
minikube dashboard
```

Note: because we're already running inside a VM we're running Minikube with
`--vm-driver=none` using a Zsh
[plugin](https://github.com/gantsign/zsh-plugins/tree/master/minikube-none).

### Helm

Website: [https://helm.sh](https://helm.sh)

Helm is a package manager for Kubernetes. It makes it easier to use software
built for Kubernetes.

Give it a try by running the following from the terminal:

```bash
# Start Minikube (if you haven't already)
minikube start

# Initialize helm (if you haven't already)
helm init

# Wait for tiller to be ready
# You can watch the tiller status be ready (1/1) by running:
kubectl get pods -w --namespace kube-system
# terminate with ctrl-c

# Install Apache Tomcat
helm install stable/tomcat

# helm will give the service a name <something>-tomcat
# you can access the tomcat by running:
http "$(minikube service --url <something>-tomcat)"
# You'll get a HTTP 404 response (we haven't provided a
# webarchive), but you'll see it's come from a
# `Apache-Coyote` server.
```

### Kompose

Website: [http://kompose.io](http://kompose.io)

Kompose is a conversion tool to go from Docker Compose to Kubernetes.

Give it a try by running the following from the terminal:

```bash
# Start Minikube (if you haven't already)
minikube start

# cd into a docker-compose project
# or use wget to download the following example compose file
wget https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose-v3.yaml \
  -O docker-compose.yaml

# Bring up your services
kompose up

# Watch your services load
kubectl get pods -w
# terminate with ctrl-c

# Once you're done shutdown the services
kompose down

# Once you're done with the Minikube instance
minikube stop
minikube delete
```

### kops

Website: [https://github.com/kubernetes/kops](https://github.com/kubernetes/kops)

Kubernetes operations (`kops`) helps you with production grade K8s installation,
upgrades, and management. `kops` is the easiest way to get a production grade
Kubernetes cluster up and running.

## For Java developers

### Open JDK

To get free patches for longer this project uses builds from
[AdoptOpenJDK](https://adoptopenjdk.net).

### Maven

Maven 3.6.2 is installed by default.

Note: Gradle is not installed as Gradle users are recommended to use the
[Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html).

### Maven Notifier

Website: [https://github.com/jcgay/maven-notifier](https://github.com/jcgay/maven-notifier)

One for all you multi-taskers; if you like to check your email while waiting for
a long build to finish, this extension will trigger a popup notification to let
you know when the build is complete.

![Maven Notifier popup]({{ '/images/maven-notifier.png' | relative_url }})

### IntelliJ IDEA plugins

* [CheckStyle-IDEA](https://plugins.jetbrains.com/plugin/1065-checkstyle-idea)
  for checking the code style of your Java source files.
* [Lombok](https://plugins.jetbrains.com/plugin/6317-lombok-plugin) to cut down
  boilerplate in your Java source code.
* [LogSupport2](https://plugins.jetbrains.com/plugin/9417-log-support-2) to
  encourage logging best practice.

### IntelliJ code style

[GantSign Code Style](https://github.com/gantsign/code-style-intellij) has
support for the following JVM languages:

* Java: based on the
  [Google Java Style Guide](http://google.github.io/styleguide/javaguide.html)
* Kotlin: based on the
  [Kotlin Style Guide](https://kotlinlang.org/docs/reference/coding-conventions.html)

### IntelliJ inspection profile

The [GantSign Inspection Profile](https://github.com/gantsign/inspection-profile-intellij)
has support for Java and Kotlin. This is a strict inspection profile intended
for greenfield code.

### SDKMAN!

Website: [https://sdkman.io](https://sdkman.io)

SDKMAN! is a tool for managing parallel versions of multiple Software
Development Kits. It's similar to [RVM](https://rvm.io) but for Java, Groovy,
Kotlin, Scala, Maven, Gradle and a bunch of other JVM based SDKs.

To switch Java version in the current shell:

```bash
sdk use java 8
```

To change the default Java version:

```bash
sdk default java 8
```

To install Gradle:

```bash
sdk install gradle
```

To play with GraalVM:

```bash
# List available versions
sdk list java

# Install latest GraalVM version
sdk install java 1.0.0-rc5-graal

# Switch to GraalVM in the current shell
sdk use java 1.0.0-rc5-graal
```

To list all the supported SDKs:

```bash
sdk list
```

## For Node.js developers

### Node.js runtime

This development environment comes with Node.js
[v10](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V10.md)
installed.

### Pre-installed global packages

To provide a better out of the box experience the following global packages come
pre-installed.

* [Grunt](http://gruntjs.com) task runner
* [Gulp](http://gulpjs.com) task runner
* [npm-check-updates](https://github.com/tjunnone/npm-check-updates) dependency
  version upgrade tool
* [TS Node](https://github.com/TypeStrong/ts-node) CLI TypeScript support
* [Typings](https://github.com/typings/typings) TypeScript definition manager

### IDE support

[Visual Studio Code](https://code.visualstudio.com/) comes with excellent
support for Node.js, JavaScript and TypeScript.

### IntelliJ code style

[GantSign Code Style](https://github.com/gantsign/code-style-intellij) has
support for JavaScript based on
[JavaScript Standard Style](https://standardjs.com).

## For Python developers

### Pyenv version manager

Website: [https://github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)

Pyenv lets you install and switch between multiple versions of Python. Other
tools such as Pipenv use Pyenv when they need a version of Python you don't
currently have installed.

### Pipenv package manager

Website: [https://pipenv.readthedocs.io](https://pipenv.readthedocs.io)

Pipenv helps you manage a virtualenv for your projects as well as managing
your packages. It will add/remove packages from your `Pipfile` as you
install/uninstall packages. It also generates the `Pipfile.lock` for
deterministic builds.

### Python plugin for Visual Studio Code

This development environment comes with Microsoft's excellent Python plugin for
Visual Studio Code:
[ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

**Tip:** launch Visual Studio Code from your Pipenv shell. This will give Visual
Studio Code access to your virtualenv and let it install packages e.g. `pylint`,
`autopep8` and `rope` without needing sudo.

To launch Visual Studio Code from your Pipenv shell run the following commands:

```bash
cd your-python-project
pipenv shell
code .
```

### Python plugin for IntelliJ IDEA

Depending whether you're using the IntelliJ IDEA Community Edition or the
Ultimate Edition a different plugin will be installed. If you're using IntelliJ
IDEA Community Edition the plugin installed will provide equivalent
functionality to
[PyCharm Community Edition](https://www.jetbrains.com/pycharm/features/editions_comparison_matrix.html).
If you're using IntelliJ IDEA Ultimate Edition the plugin installed will provide
equivalent functionality to [PyCharm Professional Edition](https://www.jetbrains.com/pycharm/features/editions_comparison_matrix.html).

**Tip:** launch IntelliJ from your Pipenv shell. This will give IntelliJ access
to your virtualenv and let it install packages e.g. `pylint`, `autopep8` and
`rope` without needing sudo.

To launch IntelliJ from your Pipenv shell run the following commands:

```bash
cd your-python-project
pipenv shell
idea .
```

## For Go developers

### Go SDK

This development environment comes with Go language
[SDK 1.13.4](https://golang.org/dl/#go1.13.4) installed.

### Go environment variables

`GOROOT` is set to the location where Go is installed.

`GOPATH` is set to `$HOME/workspace-go`.

`$GOROOT\bin` and `$GOPATH\bin` are added to your `PATH`.

### Go plugins for IDEs

* [IntelliJ IDEA (Ultimate Edition only)](https://plugins.jetbrains.com/plugin/9568-go)
* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go)

## For Ansible developers

### Molecule Wrapper Zsh support

Website: [https://github.com/gantsign/molecule-wrapper](https://github.com/gantsign/molecule-wrapper)

[Molecule](http://molecule.readthedocs.io) is an excellent tool to assist you in
developing and testing Ansible Roles and Playbooks.

Molecule integrates with Docker to provide an isolated environment to try your
provisioning and uses [Testinfa](http://testinfra.readthedocs.io/) to test the
results.

Molecule can be tricky to install and that's where Molecule Wrapper comes in.
Molecule Wrapper is a shell script that installs Molecule (and its dependencies)
before invoking Molecule.

The Zsh support for Molecule Wrapper adds an alias so you can run `./moleculew`
with the `molecule` command and enables tab-completion support.
