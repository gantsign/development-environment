# -*- mode: ruby -*-
# vi: set ft=ruby :

required_plugins = %w( vagrant-reload vagrant-triggers )
plugins_to_install = required_plugins.select { |plugin| not Vagrant.has_plugin? plugin }
if not plugins_to_install.empty?
  puts "Installing plugins: #{plugins_to_install.join(' ')}"
  if system "vagrant plugin install #{plugins_to_install.join(' ')}"
    exec "vagrant #{ARGV.join(' ')}"
  else
    abort "Installation of one or more plugins has failed. Aborting."
  end
end

vagrant_dir = File.expand_path(File.dirname(__FILE__))

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/wily64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Ensure Unison service isn't started until Vagrant shared folders are mounted
  # and stopped before shared folders are unmounted (if we don't Unison will
  # assume all files have been deleted and cascade the delete to the client VM).
  config.trigger.after :up do
    run_remote "sudo systemctl start unison"
  end
  config.trigger.after :reload do
    run_remote "sudo systemctl start unison"
  end
  config.trigger.before :halt do
    run_remote "sudo systemctl stop unison"
  end
  config.trigger.before :reload do
    run_remote "sudo systemctl stop unison"
  end

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  config.vm.provider "virtualbox" do |vb|
    # Give the VM a name
    vb.name = "development-environment"

    # Display the VirtualBox GUI when booting the machine
    vb.gui = true

    # Customize CPU settings
    vb.cpus = 2

    # Customize graphics settings
    vb.customize ["modifyvm", :id, "--vram", "64"]
    vb.customize ["modifyvm", :id, "--accelerate3d", "on"]

    # Customize the amount of memory on the VM:
    vb.memory = "4096"

    # Enable host desktop integration
    vb.customize ["modifyvm", :id, "--clipboard", "bidirectional"]
    vb.customize ["modifyvm", :id, "--draganddrop", "bidirectional"]

    # Enable sound
    vb.customize ["modifyvm", :id, '--audio', 'dsound', '--audiocontroller', 'ac97']
  end

  # Customfile
  #
  # Use this to insert your own (and possibly rewrite) Vagrant config lines.
  # If a file 'Customfile' exists in the same directory as this Vagrantfile,
  # it will be evaluated as ruby inline as it loads.
  if File.exists?(File.join(vagrant_dir,'Customfile')) then
    eval(IO.read(File.join(vagrant_dir,'Customfile')), binding)
  end

  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Install the vagrant-cachier if you want to speed up rebuilds at the cost
  # of some disk space.
  if Vagrant.has_plugin?("vagrant-cachier")
    # Configure cached packages to be shared between instances of the same base
    # box. More info on http://fgrehm.viewdocs.io/vagrant-cachier/usage
    config.cache.scope = :box
  end

  # TODO remove when ansible_local provisioner is stable on
  # Windows (Vagrant 1.8.2?)
  # Use rbconfig to determine if we're on a windows host or not.
  require 'rbconfig'
  is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)
  if is_windows
    # Install Ansible 1.9.2 through Ubuntu package
    config.vm.provision "shell", inline: <<-SHELL
      sudo apt-get -qq update
      sudo apt-get -qq install -y --no-install-recommends ansible
    SHELL
    # Provisioning configuration for shell script.
    config.vm.provision "shell" do |sh|
      sh.path = "provisioning/JJG-Ansible-Windows/windows.sh"
      sh.args = "provisioning/playbook.yml"
    end
  else
    # Provisioning configuration for Ansible (for Mac/Linux hosts).
    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/playbook.yml"
      ansible.sudo = true
    end
  end

  # Restart the VM after everything is installed
  config.vm.provision :reload

end
