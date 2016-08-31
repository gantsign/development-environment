---
title: User guide
permalink: /docs/user-guide/
excerpt: >
  How to use the development environment.
---

## Using Vagrant

All the following commands must be run from the project root directory.

### To start the development environment

```
vagrant up
```

### To stop the development environment

```
vagrant halt
```

### To remove the development environment

Use with caution this will delete all the files in your development environment.

```
vagrant destroy
```

## Rebuilding the development environment

### Updating the project

To get all the latest improvements you'll want to update from time to time; to
update the project directory run the following command from the project root
directory:

```bash
git pull
```

### Destroying the development environment

Before you can rebuild you development environment you have to destroy your
current one; make sure all your files are backed up outside the development
environment before continuing.

When you're ready to destroy the development environment, run the following
command from the project root directory:

```bash
vagrant destroy
```

### Recreating the development environment

This is the same as provisioning for the first time.

Run the following command from the project root directory:

```bash
vagrant up
```
