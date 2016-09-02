---
title: Features
permalink: /docs/features/
excerpt: >
  This development environment provides many command line and GUI features.
numbered_headings: yes
date: 2016-09-01T16:07:15+01:00
modified: 2016-09-01T23:07:15+01:00
---

{% include base_path %}

There are a lot of well known projects, and hidden gems, which aid in your
productivity; this project aims to install the best of them to make life a
little easier.

{% include inline_toc.html %}

## For everybody

### Compressed RAM

Website: [https://www.kernel.org/doc/Documentation/blockdev/zram.txt](https://www.kernel.org/doc/Documentation/blockdev/zram.txt)

Unless you have 16GB of RAM you're probably going to struggle to run VirtualBox,
your IDE, a Maven build, your application, and a few services in Docker at the
same time.

Enabling RAM compression in the virtual machine allows you to run more things at
once.

It's so fast there's no reason not to enable it by default.

### File synchronization

Website: [https://www.cis.upenn.edu/~bcpierce/unison](https://www.cis.upenn.edu/~bcpierce/unison)

One of the advantages of a using a virtual machine is it's easy to get back to a
clean working state by rebuilding the virtual machine.

However, you want to keep your user specific setup, and your workspace with all
the repositories you've cloned.

This project uses [unison](https://www.cis.upenn.edu/~bcpierce/unison) to
synchronize selected files and folders from the client to the host machine.

When the virtual machine is rebuilt, these files and folders are copied back to
the new client virtual machine.

The following are some of the files and folders synchronized by default:

* `/home/vagrant/workspace/`

    * Put all your projects here.
    * Tries to only synchronize source files by excluding directories like
      `target`.

* `/home/vagrant/.gitconfig`
* `/home/vagrant/.ssh/` (except the `authorized_keys` file)
* `/home/vagrant/.gnupg/`
* `/home/vagrant/.m2/`  (except the `repository` directory)

**Note:** the synchronization is two way, but due to limitations of VirtualBox
shared folders only the client to host synchronization is done in real-time;
the host to client synchronization only occurs when the `unison` service
restarts (e.g when you restart the VM).

**Important:** ensure your important files are backed up before rebuilding your
virtual machine.

## For command line users

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

### Oh-my-zsh

Website: [http://ohmyz.sh](http://ohmyz.sh)

Rather than a specific command, oh-my-zsh changes your default shell from `bash`
to `zsh`, and customizes the `zsh` shell.

Oh-my-zsh gives you:

* Better tab completion (like expanding partial names in path).
* Themes to enhance your command prompt (like showing the current git branch).
* Plugins to enable command specific tab completion (e.g. `mvn` and `git`).

![zsh terminal output]({{ base_path }}/images/oh-my-zsh.png)

Try this:

```bash
cat /u/s/a/vim<TAB>

# Expands to:
cat /usr/share/applications/vim.desktop
```

### The Silver Searcher

Website: [http://geoff.greer.fm/ag](http://geoff.greer.fm/ag)

If you've used Linux you've almost certainly used `grep`, but you've probably
never heard of `ag` (The Silver Searcher).

While `grep` is a great general purpose tool, `ag` is a specific tool for
finding matching text in a directory tree and outputting the results in a human
readable format.

Below is the output of the command `ag java` on this project:

![The Silver Searcher terminal output]({{ base_path }}/images/ag.png)

Tip: if you have multiple pages of output you may want to use
`ag --pager=less PATTERN`.

### Tree

Website: [http://mama.indstate.edu/users/ice/tree](http://mama.indstate.edu/users/ice/tree)

The `tree` command is similar to `find .` but outputs in a graphical tree
format.

Below is the output of the command `tree` on this project:

![Tree terminal output]({{ base_path }}/images/tree.png)

Tip: if you have multiple pages of output you may want to use
`tree -C | less -R`.

### htop

Website: [http://hisham.hm/htop](http://hisham.hm/htop)

The `htop` command is essentially a `top` replacement with a better looking user
interface and a few more features.

![htop terminal output]({{ base_path }}/images/htop.png)

### Glances

Website: [https://nicolargo.github.io/glances](https://nicolargo.github.io/glances)

The `glances` application shows a broader view of what's going on on your system
than `top` or `htop` provide. In addition to RAM and CPU usage, you can see
disk I/O, network I/O and warnings/alerts.

![Glances terminal output]({{ base_path }}/images/glances.png)

## For GUI desktop users

### Xubuntu Core

Website: [http://xubuntu.org](http://xubuntu.org)

Lightweight X desktop with a minimal number of packages installed. Xubuntu
uses [Xfce](http://www.xfce.org), which provides a more traditional desktop
experience than the standard [Unity](http://unity.ubuntu.com) desktop on Ubuntu.

### DockbarX

Website: [https://github.com/M7S/dockbarx](https://github.com/M7S/dockbarx)

Integrates with the Xfce Panel to provide a modern dockbar interface for
launching and switching between applications.

### Seahorse

Website: [https://wiki.gnome.org/Apps/Seahorse](https://wiki.gnome.org/Apps/Seahorse)

Graphical user interface for managing your keys, and a SSH agent to save you
having to put in your SSH password more than once in the same session.

![Seahorse]({{ base_path }}/images/seahorse.png)

## For developers

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

![Visual Studio Code editor window]({{ base_path }}/images/visual-studio-code.png)

### Atom

Website: [https://atom.io](https://atom.io)

A powerful and highly customizable text editor from GitHub.

Pioneered a new approach of building cross platform GUI applications using
Node.js and Chromium.

While they share the same foundations (i.e.
[http://electron.atom.io](http://electron.atom.io)), Atom is generally less
polished than Visual Studio Code. That said, Atom came first and has more
plugins to choose from.

![Atom editor window]({{ base_path }}/images/atom.png)

### GitKraken

Website: [https://www.gitkraken.com](https://www.gitkraken.com)

A user friendly Git GUI client.

![GitKraken window]({{ base_path }}/images/gitkraken.png)

One it's a bit lacking is the diff/merge tool, which is Meld is also included
(see below).

### Meld

Website: [http://meldmerge.org](http://meldmerge.org)

A GUI diff/merge tool with Git support.

![Meld diff/merge tool]({{ base_path }}/images/meld.png)

Tip: run `meld .` in your Git working directory to review your changes.

## For Java developers

### Oracle JDK

To provide access to the extra tooling (e.g. Java Mission Control) the Oracle
JDK is installed rather than OpenJDK.

### Maven

Maven 3.3.9 is installed by default.

Note: Gradle is not installed as Gradle users are recommended to use the
[Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html).

### Maven Color

Website: [https://github.com/jcgay/maven-color](https://github.com/jcgay/maven-color)

Makes your Maven console output more readable by adding color.

![Maven Color terminal output]({{ base_path }}/images/maven-color.png)

### Maven Notifier

Website: [https://github.com/jcgay/maven-notifier](https://github.com/jcgay/maven-notifier)

One for all you multi-taskers; if you like to check your email while waiting for
a long build to finish, this extension will trigger a popup notification to let
you know when the build is complete.

![Maven Notifier popup]({{ base_path }}/images/maven-notifier.png)

### IntelliJ IDEA IDE

Website: [https://www.jetbrains.com/idea](https://www.jetbrains.com/idea)

In my opinion IntelliJ IDEA is the best Java IDE available.

While the Community Edition is excellent at what it does, you need to pay for
the Ultimate Edition if you want support for common tools/frameworks such as
JavaEE and the Spring Framework; the relatively small price for the Ultimate
Edition is well worth the money.

By default the Community Edition is installed.

The IDE is pre-configured so new projects will use the Oracle JDK and Maven
installation.

![IntelliJ IDEA IDE]({{ base_path }}/images/intellij.png)
