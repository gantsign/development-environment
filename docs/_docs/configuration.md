---
title: Configuration
permalink: /docs/configuration/
description: >
  Instructions for how to configure your development environment.
numbered_headings: yes
date: 2016-09-02T14:47:02+01:00
modified: 2016-09-02T14:47:02+01:00
---

{% include base_path %}

The goal of this project is to make it easy to build your development
environment in a reliable and reproducible way.

To achieve this any essential configuration has to be version controlled.

This still leaves room for a certain amount of user specific configuration on
a users local machine.

{% include inline_toc.html %}

## User specific configuration

User specific configuration is done through the
[Nugrant](https://github.com/maoueh/nugrant) plugin for Vagrant.

The Nugrant configuration file is located in the following two locations:

* Your home folder (configuration shared between projects)

    `~/.vagrantuser`

* The project folder (configuration specific to this clone of the project)

    `.vagrantuser` (you'll find a `.vagrantuser.example` file in the project
    directory)

Note: changes only take effect when the development environment is next
rebuilt/provisioned.

### Proxy Configuration

If you're behind a firewall and need to access the web through a HTTP proxy
there's a little extra config you need to do; if you have direct internet access
you can skip this section.

#### Common Proxy Config

This configuration will apply to most command line tools and GUI applications.
This can be set by adding the following to the `.vagrantuser` file (replace the
proxy host and port with the values for your network):

```yaml
proxy:
  enabled: true
  http: 'http://proxy.example.com:3128/'
  https: 'http://proxy.example.com:3128/'
  ftp: 'http://proxy.example.com:3128/'
  no_proxy: 'localhost,127.0.0.1'
```

#### APT Proxy Override

If you need to use a different proxy for the APT package manager, this can be
set by adding the following to the `.vagrantuser` file (replace the proxy host
and port with the values for your network):

```yaml
apt_proxy:
  http: 'http://proxy.example.com:3128/'
  https: 'http://proxy.example.com:3128/'
  ftp: 'http://proxy.example.com:3128/'
```

#### Git Proxy Override

If you need to use a different proxy for the Git version control system, this
can be set by adding the following to the `.vagrantuser` file (replace the proxy
host and port with the values for your network):

```yaml
git_proxy:
  http: 'http://proxy.example.com:3128/'
```

#### Gnome Proxy Override

If you need to use a different proxy for Gnome applications, or just want to
take advantage of more advanced proxy options for Gnome applications, you can
follow the documentation below.

Note: the Gnome proxy settings are also used by some other non-gnome
applications such as the Google Chrome web browser.

##### Proxy auto-config

To use [proxy auto config](https://en.wikipedia.org/wiki/Proxy_auto-config) add
the following to the `.vagrantuser` file (replace the `autoconfig_url` with the
value for your network):

```yaml
gnome_proxy:
  mode: 'auto'
  autoconfig_url: 'http://wpad.example.com/wpad.dat'
```

Note: in theory Gnome should be able to auto-discover the value for the
`autoconfig_url` using the
[Web Proxy Auto-Discovery Protocol](https://en.wikipedia.org/wiki/Web_Proxy_Autodiscovery_Protocol);
in practice auto-discovery is unlikely to work when you're running Linux in a
VM using NAT rather than directly on your corporate network, so you'll likely
have to specify the location manually.

##### Minimal manual configuration

To manually specify a different proxy for Gnome applications add the following
to the `.vagrantuser` file (replace the hosts and ports with the values for your
network):

```yaml
gnome_proxy:
  mode: 'manual'
  ignore_hosts:
    - 'localhost'
    - '127.0.0.0/8'
    - '::1'
  use_same_proxy: true
  http:
    host: 'proxy.example.com'
    port: 3128
    enabled: true
```

##### Full manual configuration

For full manual control add the following to the `.vagrantuser` file (replace
the hosts, ports and credentials with the values for your network):

```yaml
gnome_proxy:
  mode: 'manual'
  ignore_hosts:
    - 'localhost'
    - '127.0.0.0/8'
    - '::1'
  use_same_proxy: false
  http:
    host: 'proxy.example.com'
    port: 3128
    use_authentication: true
    authentication_user: 'example_username'
    authentication_password: 'example_password'
    enabled: true
  https:
    host: 'proxy.example.com'
    port: 3128
  ftp:
    host: 'proxy.example.com'
    port: 3128
  socks:
    host: 'proxy.example.com'
    port: 9000
```

### Regional preferences

Within a team you may have developers in multiple regions, these settings allow
them to build the development environment according to their regional
preferences:

**Note:** since this project is developed in the United Kingdom all the regional
defaults are for Great Britain.

#### Timezone

You can find the list of available timezones at
[https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
timezone: Europe/London
```

#### Locale

You can find more information on locales at:
[https://help.ubuntu.com/community/Locale](https://help.ubuntu.com/community/Locale).

```yaml
locales:
  default: en_GB.UTF-8
  # Please ensure the default locate is in the list of present locales.
  present:
   - en_GB.UTF-8
   - en_US.UTF-8
```

#### Keyboard

You can find more information on keyboard configuration at:
[https://wiki.debian.org/Keyboard](https://wiki.debian.org/Keyboard).

```yaml
keyboard:
  model: pc105
  layout: gb
  variant: ''
```

### Desktop choice

Each user can choose between the [Ubuntu Unity](https://unity.ubuntu.com)
desktop or the [Xfce](http://www.xfce.org) desktop.

{% capture fig_img %}
![Desktop choice]({{ base_path }}/images/desktop-choice.png)
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Left: Ubuntu Unity desktop, right: Xfce desktop.</figcaption>
</figure>

The default is the Ubuntu Unity desktop but you can select the Xfce desktop by
adding the following to your `.vagrantuser` file:

```yaml
desktop: xfce4
```

### VirtualBox configuration

#### VM name

This is important if you want to maintain separate copies of the environment
(e.g. for working on different branches).

```yaml
virtualbox: # All VirtualBox configuration has to be under the same `virtualbox` tag.
  name: development-environment
```

For example you may keep an environment for performing patches to production:

```yaml
virtualbox: # All VirtualBox configuration has to be under the same `virtualbox` tag.
  name: patches-environment
```

**Important:** each separately named environment must be cloned into a separate
directory.

#### RAM and CPU

If your workstation has more resources than your laptop you may want to allocate
more CPU cores to the VM or more RAM.

```yaml
virtualbox: # All VirtualBox configuration has to be under the same `virtualbox` tag.
  memory: '4096' # in MB
  cpus: 2
```

#### Audio controller

If you're not running on Microsoft Windows you'll probably need to change the
audio controller settings.

You can find more information about VirtualBox audio options at:
[https://www.virtualbox.org/manual/ch08.html#vboxmanage-modifyvm](https://www.virtualbox.org/manual/ch08.html#vboxmanage-modifyvm).

```yaml
virtualbox: # All VirtualBox configuration has to be under the same `virtualbox` tag.
   audio: dsound
   audiocontroller: ac97
```

**Note:** this project is only tested with Microsoft Windows as the host OS.

### Ansible configuration

Ansible tags can be used to skip certain features when installing the
development environment.

This can speed up rebuilds and save on disk space.

```yaml
ansible:
  skip_tags:
    # Choose from any of the below
    - unison
    - docker
    - nodejs
    - molecule
    - java
    - gui
    - chrome
    - gitkraken
    - atom
    - vscode
    - intellij
    - oh-my-zsh
```

**Note:** there are dependencies between some of the features e.g. skipping
`java` will also skip `intellij`.

### Oracle Binary Code License Agreement

To install the Oracle JDK you must accept the "Oracle Binary Code License
Agreement for the Java SE Platform Products and JavaFX"; you can do this by
specifying the following variable in the `.vagrantuser` file (either in
the project root directory or your user home directory):

```yaml
java_license_declaration: 'I accept the "Oracle Binary Code License Agreement for the Java SE Platform Products and JavaFX" under the terms at http://www.oracle.com/technetwork/java/javase/terms/license/index.html'
```

If you don't want to accept the license you can skip the Java install using:

```yaml
ansible:
  skip_tags:
    - java
```

### IntelliJ IDEA edition

If your employer provides IntelliJ IDEA Ultimate licenses for your whole team,
then you'll want to make that the default (see
[Project specific configuration](#project-specific-configuration) below); for
everyone else this development environment supports individual developers using
their personal licenses.

To install IntelliJ IDEA Ultimate instead of IntelliJ IDEA Community add the
following line to your `.vagrantuser` file.

```yaml
intellij_edition: ultimate
```

## Project specific configuration

All project specific configuration should be version controlled.

The easiest way to version control your configuration this is to fork this
project from GitHub
[https://github.com/gantsign/development-environment](https://github.com/gantsign/development-environment).
This project is under the MIT license so you're free to fork into a private
repository either on GitHub or elsewhere.

### Default values for user specific configuration

The default values for the user specific configuration can be found in the
`config.user.defaults` block in the Vagrant file.

**Important:** the values in the `Vagrantfile` override similar values in the
`playbook.yml` changing the values in the `playbook.yml` will have no effect.

### Ansible provisioning

What you need to install for your development environment and how it needs to be
configured set in the Ansible `playbook.yml`.

You can find out more about Ansible at:
[https://www.ansible.com](https://www.ansible.com).

What you may want to configure in the `playbook.yml`:

* Software Development Kits and versions
* Build tools and versions
* Required IDE plugins
* Environment variables
