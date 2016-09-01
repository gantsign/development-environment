#!/bin/bash
set -ev

# Vagrantfile syntax check
rubocop ./Vagrantfile --except LineLength,Eval,MutableConstant

# Install Ansible roles
sudo ansible-galaxy install -r provisioning/requirements.yml

# Ansible syntax check
ansible-playbook provisioning/playbook.yml -i tests/inventory --syntax-check
