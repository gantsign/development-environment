#!/bin/bash
set -ev

# Vagrantfile syntax check
rubocop ./Vagrantfile --except LineLength,BlockLength,Eval,MutableConstant,FormatStringToken,EmptyLinesAroundArguments

# Install Ansible roles
ansible-galaxy install --role-file=provisioning/requirements.yml "--roles-path=$HOME/roles"

# Set role path
export ANSIBLE_ROLES_PATH="$HOME/roles"

# Ansible syntax check
ansible-playbook provisioning/playbook.yml --inventory=tests/inventory --syntax-check

# Build docs
(cd docs && sudo chmod go+rw -R . && ./build.sh)

# Publish the docs to gh-pages
if [ "$TRAVIS_BRANCH" = 'master' ] && [ "$TRAVIS_PULL_REQUEST" = 'false' ]; then
    (cd docs && ./build.sh --publish)
fi
