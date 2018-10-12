---
title: Upgrade
permalink: /docs/upgrade/
description: >
  How to upgrade your development environment to the latest release.
numbered_headings: yes
date: 2018-10-12T13:07:23+01:00
modified: 2018-10-12T13:07:23+01:00
---

{% include base_path %}

The following instructions will guide you through the process of upgrading your
local GantSign EnV development environment to the latest release.

{% include inline_toc.html %}

## Backup any essential files

The development environment is designed to backup and restore projects in your
workspace and selected configuration files. But there are exclusions (e.g. built
artifacts) and there is always the risk that the backup/restore process will
fail.

We recommend you push all your changes, and manually backup any essential files,
before re-provisioning your development-environment. We accept no responsibility
for lost files.

## Halt the development environment

If the development environment is running, shut it down by running the following
on the host (from the project root directory):

```
vagrant halt
```

## Pull the changes for the latest release

Pull the latest changes by running the following on the host (from the project
root directory):

```bash
git pull --rebase origin {{ site.release.version }}
```

## Re-provision the development environment

Re-provision the development environment by running the following commands on
the host (from the project root directory):

```bash
vagrant destroy && vagrant up
```

Once provisioning is complete continue to
[Change your password](#change-your-password).

### Troubleshooting

#### HTTP errors

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

#### Out of disk space

We cache most of the downloads (so they can be reused for re-provisioning the
VM). Provisioning multiple times over months will mean the cache will fill with
multiple versions of the software being installed. Eventually, this leads to out
of disk space errors during re-provisioning. To resolve these errors you need to
purge the download cache. To purge the download cache you need to login to the
VirtualBox VM (username: `vagrant`, password: `vagrant`) and run the following
commands:

```bash
rm -rf /var/persistent/usr/local/src/ansible/data/*
rm -rf /var/persistent/var/cache/apt/archives/*
```

Now go back to the console where you run Vagrant and run the following to retry
provisioning:

```bash
vagrant provision
```

Be aware purging the download cache will mean all the software will need to be
downloaded again. So the first time you provision the VM after purging the
caches will take longer and be more susceptible to HTTP errors.

#### Unable to save credentials

Your Unix password may get out of sync with the password for your GNOME Keyring
when you rebuild your development-environment (as the Unix password is reset to
`vagrant`) or if you reset the password without specifying the current password
(e.g. using `sudo passwd vagrant`).

Once your GNOME Keyring password is out of sync the keyring won't unlock when
you login. You'll be unable use save credentials or save new credentials (e.g.
in Google Chrome or for your SSH keys).

If you remember the password used by the GNOME Keyring (e.g. the last password
before you re-provisioned the development environment), you can change the Unix
password to match, then logout and log back in and your passwords should work
again.

If you don't remember the password for the GNOME Keyring (or the password
doesn't work) you'll need to delete your keyring and create a new one (any saved
passwords will be lost).

To delete your keyring run the following from the development environment
terminal:

```bash
cp ~/.local/share/keyrings/login.keyring ~/.local/share/keyrings/login.keyring.bak
cp ~/.local/share/keyrings/user.keystore ~/.local/share/keyrings/user.keystore.bak

rm ~/.local/share/keyrings/login.keyring
rm ~/.local/share/keyrings/user.keystore
```

## Change your password

Once provisioning is complete you need to change your password. Login using the
username `vagrant` and password `vagrant`. You'll then be prompted to change
your password. **Important:** change the password to the password you were
using before you re-provisioned the development environment. This is necessary
to restore access to all your saved credentials.

**Important:** you need to complete this procedure before you stop/reload the
VM.
