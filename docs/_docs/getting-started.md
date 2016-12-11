---
title: Getting started
permalink: /docs/getting-started/
description: >
  How to setup the development environment.
numbered_headings: yes
date: 2016-08-31T09:05:34+01:00
modified: 2016-12-11T15:15:34+00:00
---

{% include base_path %}

The following instructions will guide you through the process of provisioning
your local development environment using GantSign EnV.

{% include inline_toc.html %}

## Install dependencies

* Install Git [https://git-scm.com](https://git-scm.com)
* Install Vagrant [https://www.vagrantup.com](https://www.vagrantup.com)
* Install VirtualBox [https://www.virtualbox.org](https://www.virtualbox.org)

## Clone the project

Clone the development environment repository.

```bash
git clone --branch {{ site.release.version }} \
    {{ site.release.git_url }}
```

## Configuration

User specific configuration is done through the
[Nugrant](https://github.com/maoueh/nugrant) plugin for Vagrant.

The Nugrant configuration file is located in the following two locations:

* Your home folder (configuration shared between projects)

    `~/.vagrantuser`

* The project folder (configuration specific to this clone of the project)

    `.vagrantuser` (you'll find a `.vagrantuser.example` file in the project
    directory)

### Oracle Binary Code License Agreement

To install the Oracle JDK you must accept the "Oracle Binary Code License
Agreement for the Java SE Platform Products and JavaFX"; you can do this by
specifying the following variable in the `.vagrantuser` file (either in
the project root directory or your user home directory):

```yaml
---
java_license_declaration: 'I accept the "Oracle Binary Code License Agreement for the Java SE Platform Products and JavaFX" under the terms at http://www.oracle.com/technetwork/java/javase/terms/license/index.html'
```

### Proxy configuration

If you're behind a firewall and need to access the web through a HTTP proxy
there's a little extra config you need to do; if you have direct internet access
you can skip this section.

#### Host proxy config

On the host machine, Vagrant needs to be able to access the internet to install
plugins and download the base image for the virtual machine. To do this you need
to set the following environment variable before running the `vagrant` command
(replace the proxy host and port with the values for your network):

```bash
SET https_proxy=proxy.example.com:3128
```

Note: on Linux / Mac OS use `export` rather than `SET`.

You'll need to reset the environment variable each time you open a new console
window before you run `vagrant`; while there are ways of setting the environment
variable permanently care should be taken as doing so may affect other
applications.

#### Client VM proxy config

Add the following to the `.vagrantuser` file, either in the project root
directory or your user home directory (replace the proxy host and port with the
values for your network):

```yaml
proxy:
  enabled: true
  http: 'http://proxy.example.com:3128/'
  https: 'http://proxy.example.com:3128/'
  ftp: 'http://proxy.example.com:3128/'
  no_proxy: 'localhost,127.0.0.1'
```

For more proxy configuration options, including proxy auto-config support,
see the [configuration]({{ base_path }}/docs/configuration) documentation.

### Advanced configuration

For more configuration options, including configuring regional preferences, view
the [configuration]({{ base_path }}/docs/configuration) documentation.

## Run Vagrant

All that's left is to run Vagrant to provision the virtual machine.

Run the following command from the project root directory:

```bash
vagrant up
```

### Troubleshooting

It's relatively common for provisioning to fail due to transient HTTP failures
(e.g. connection failures, timeouts, connection reset by peer); this is
particularly true the first time provisioning is run as everything has to be
downloaded.

This project will cache most of the downloads on your local machine so you'll
find provisioning is much faster and more reliable from the second time it is
run.

If provisioning fails partway through, you can restart provisioning by running
the following command from the project root directory:

```bash
vagrant provision
```

If provisioning fails leaving the virtual machine in an unrecoverable state, you
can run the following commands from the project root directory, to rebuild the
virtual machine from scratch:

```bash
vagrant destroy
vagrant up
```

## Stopping the virtual machine

It's essential you use Vagrant to stop the VM rather than shutting down via the
OS or the VirtualBox controls; failure to shutdown using Vagrant may result in
file loss.

To shut down the VM using Vagrant the following command from the project root
directory:

```bash
vagrant halt
```
