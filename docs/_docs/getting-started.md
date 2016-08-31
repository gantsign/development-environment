---
title: Getting started
permalink: /docs/getting-started/
excerpt: >
  How to setup the development environment.
---

## Install dependencies

* Install Git [https://git-scm.com](https://git-scm.com)
* Install Vagrant [https://www.vagrantup.com](https://www.vagrantup.com)
* Install VirtualBox [https://www.virtualbox.org](https://www.virtualbox.org)

## Clone the project

Clone the development environment repository.

```bash
git clone https://github.com/gantsign/development-environment.git
```

## Oracle Binary Code License Agreement

To install the Oracle JDK you must accept the "Oracle Binary Code License
Agreement for the Java SE Platform Products and JavaFX"; you can do this by
specifying the following variable in the `.vagrantuser` file (either in
the project root directory or your user home directory):

```yaml
---
java_license_declaration: 'I accept the "Oracle Binary Code License Agreement for the Java SE Platform Products and JavaFX" under the terms at http://www.oracle.com/technetwork/java/javase/terms/license/index.html'
```

## Run Vagrant

All that's left is to run Vagrant to provision the virtual machine.

Run the following command from the project root directory:

```bash
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
