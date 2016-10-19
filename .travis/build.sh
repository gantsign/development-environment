#!/bin/bash
set -ev

# Vagrantfile syntax check
rubocop ./Vagrantfile --except LineLength,BlockLength,Eval,MutableConstant

# Install Ansible roles
sudo ansible-galaxy install -r provisioning/requirements.yml

# Ansible syntax check
ansible-playbook provisioning/playbook.yml -i tests/inventory --syntax-check

# Build docs
(cd docs && ./build.sh)

# Publish the docs to gh-pages
if [ "$TRAVIS_BRANCH" = 'master' ] && [ "$TRAVIS_PULL_REQUEST" = 'false' ]; then
    (cd docs && ./build.sh --publish)
fi
