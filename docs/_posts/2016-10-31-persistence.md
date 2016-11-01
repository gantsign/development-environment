---
title: Improved storage of persisted files
tags:
  - storage
description: >
  Moved persisted files from VirtualBox shared folders to virtual disk.
excerpt: >
  ... this project has changed from storing persistent copies of files on the
  host filesystem using VirtualBox shared folders, to storing persistent
  copies...
read_time: no
date: 2016-10-31T18:04:34+01:00
modified: 2016-10-31T18:04:34+01:00
---

{% include base_path %}

When using a virtual development environment it's important to be able to
rebuild it with the minimum of effort so you can perform software updates or
just repair your environment.

When rebuilding your environment you want to keep your workspace and certain
other user specific files; this enables you to resume working without having to
clone all your project repositories again and perform user specific setup after
each rebuild.

To make the persistence of these files as robust as possible, this project has
changed from storing persistent copies of files on the host filesystem using
VirtualBox shared folders, to storing persistent copies of files in a separate
virtual disk using the
[vagrant-persistent-storage](https://github.com/kusnier/vagrant-persistent-storage)
plugin.

To upgrade to the new storage mechanism update the development environment to
the latest version, rebuild the VM, and run the following command to copy the
files from the old storage location:

```
rsync --recursive --times --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r --verbose \
    /vagrant/home/* /home/vagrant
```
