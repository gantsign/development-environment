# frozen_string_literal: true

# -*- mode: ruby -*-
# vi: set ft=ruby :

# We need Vagrant >= 2.1.0 becuse we use triggers
Vagrant.require_version '>= 2.1.0'

required_plugins = %w[vagrant-reload vagrant-persistent-storage vagrant-vbguest vagrant-proxyconf nugrant]
plugins_to_install = required_plugins.reject { |plugin| Vagrant.has_plugin? plugin }
unless plugins_to_install.empty?
  puts "Installing plugins: #{plugins_to_install.join(' ')}"
  if system "vagrant plugin install #{plugins_to_install.join(' ')}"
    exec "vagrant #{ARGV.join(' ')}"
  else
    abort 'Installation of one or more plugins has failed. Aborting.'
  end
end

vagrant_dir = __dir__

# All Vagrant configuration is done below. The '2' in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  # Important: use Bento boxes https://app.vagrantup.com/bento not the Canonical ones.
  # Bento boxes are officially-recommended by Vagrant https://www.vagrantup.com/docs/boxes.html
  config.vm.box = 'bento/ubuntu-18.04'

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Specifying an unsupported audio setting will cause VirtualBox provisioning
  # to fail.
  default_vb_audio = nil
  default_vb_audiocontroler = 'hda'
  if Vagrant::Util::Platform.windows?
    default_vb_audio = 'dsound'
  elsif Vagrant::Util::Platform.platform =~ /darwin/
    default_vb_audio = 'coreaudio'
    default_vb_audiocontroler = 'hda'
  end

  # Customizable configuration
  # See https://github.com/maoueh/nugrant
  config.user.defaults = {
    'proxy' => {
      'enabled' => false,
      'http' => 'http://example.com:3128/',
      'https' => 'http://example.com:3128/',
      'ftp' => 'http://example.com:3128/',
      'no_proxy' => 'localhost,127.0.0.1'
    },
    'apt_proxy' => {
      'http' => nil,
      'https' => nil,
      'ftp' => nil
    },
    'git_proxy' => {
      'http' => nil
    },
    'gnome_proxy' => {
      'mode' => nil,
      'autoconfig_url' => nil,
      'ignore_hosts' => nil,
      'use_same_proxy' => nil,
      'http' => {
        'host' => nil,
        'port' => nil,
        'use_authentication' => nil,
        'authentication_user' => nil,
        'authentication_password' => nil,
        'enabled' => nil
      },
      'https' => {
        'host' => nil,
        'port' => nil
      },
      'ftp' => {
        'host' => nil,
        'port' => nil
      },
      'socks' => {
        'host' => nil,
        'port' => nil
      }
    },

    'ansible' => {
      'skip_tags' => []
    },

    'virtualbox' => {
      'name' => 'development-environment',
      'gui' => true,
      'cpus' => 2,
      'graphicscontroller' => nil,
      'vram' => '64',
      'accelerate3d' => 'off',
      'memory' => '4096',
      'clipboard' => 'bidirectional',
      'draganddrop' => 'bidirectional',
      'audio' => default_vb_audio,
      'audiocontroller' => default_vb_audiocontroler
    },

    'timezone' => 'Europe/London',

    'locales' => {
      'default' => 'en_GB.UTF-8',
      'present' => ['en_GB.UTF-8', 'en_US.UTF-8']
    },

    'keyboard' => {
      'model' => 'pc105',
      'layout' => 'gb',
      'variant' => ''
    },

    'dock_position' => 'LEFT',

    'git_user' => {
      'name' => nil,
      'email' => nil,
      'force' => false
    },

    # Deprecated use intellij.edition instead
    'intellij_edition' => nil,

    'intellij' => {
      'edition' => 'community',
      'license_key_path' => nil
    },

    'persistent_storage_location' => '.vagrant/persistent-disk.vdi'
  }

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing 'localhost:8080' will access port 80 on the guest machine.
  # config.vm.network 'forwarded_port', guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network 'private_network', ip: '192.168.33.10'

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network 'public_network'

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder '../data', '/vagrant_data'

  config.persistent_storage.enabled = true
  config.persistent_storage.location = config.user.persistent_storage_location
  config.persistent_storage.size = 16_000
  config.persistent_storage.mountname = 'persistent'
  config.persistent_storage.filesystem = 'ext4'
  config.persistent_storage.mountpoint = '/var/persistent'
  config.persistent_storage.volgroupname = 'persist-vg'

  # Update the VirtualBox Guest Additions
  config.vbguest.auto_update = true

  config.vm.provider 'virtualbox' do |vb|
    # Give the VM a name
    vb.name = config.user.virtualbox.name

    # Display the VirtualBox GUI when booting the machine
    vb.gui = config.user.virtualbox.gui

    # Customize CPU settings
    vb.cpus = config.user.virtualbox.cpus

    # Customize graphics settings
    unless config.user.virtualbox.graphicscontroller.nil?
      vb.customize ['modifyvm', :id, '--graphicscontroller', config.user.virtualbox.graphicscontroller]
    end
    vb.customize ['modifyvm', :id, '--vram', config.user.virtualbox.vram]
    vb.customize ['modifyvm', :id, '--accelerate3d', config.user.virtualbox.accelerate3d]

    # Customize the amount of memory on the VM
    vb.memory = config.user.virtualbox.memory

    # Enable host desktop integration
    vb.customize ['modifyvm', :id, '--clipboard', config.user.virtualbox.clipboard]
    vb.customize ['modifyvm', :id, '--draganddrop', config.user.virtualbox.draganddrop]

    unless config.user.virtualbox.audio.nil?
      # Enable sound
      vb.customize ['modifyvm', :id, '--audio', config.user.virtualbox.audio, '--audiocontroller', config.user.virtualbox.audiocontroller]
    end
  end

  # Customfile
  #
  # Use this to insert your own (and possibly rewrite) Vagrant config lines.
  # If a file 'Customfile' exists in the same directory as this Vagrantfile,
  # it will be evaluated as ruby inline as it loads.
  if File.exist?(File.join(vagrant_dir, 'Customfile'))
    eval(IO.read(File.join(vagrant_dir, 'Customfile')), binding)
  end

  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define 'atlas' do |push|
  #   push.app = 'YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME'
  # end

  if config.user.proxy.enabled
    config.proxy.enabled = config.user.proxy.enabled
    config.proxy.http = config.user.proxy.http
    config.proxy.https = config.user.proxy.https
    config.proxy.ftp = config.user.proxy.ftp
    config.proxy.no_proxy = config.user.proxy.no_proxy
    config.apt_proxy.http = config.user.apt_proxy.http
    config.apt_proxy.https = config.user.apt_proxy.https
    config.apt_proxy.ftp = config.user.apt_proxy.ftp
    config.git_proxy.http = config.user.git_proxy.http
  end

  gnome_proxy = {
    'mode' => config.user.gnome_proxy.mode,
    'autoconfig_url' => config.user.gnome_proxy.autoconfig_url,
    'ignore_hosts' => config.user.gnome_proxy.ignore_hosts,
    'use_same_proxy' => config.user.gnome_proxy.use_same_proxy,
    'http_host' => config.user.gnome_proxy.http.host,
    'http_port' => config.user.gnome_proxy.http.port,
    'http_use_authentication' => config.user.gnome_proxy.http.use_authentication,
    'http_authentication_user' => config.user.gnome_proxy.http.authentication_user,
    'http_authentication_password' => config.user.gnome_proxy.http.authentication_password,
    'http_enabled' => config.user.gnome_proxy.http.enabled,
    'https_host' => config.user.gnome_proxy.https.host,
    'https_port' => config.user.gnome_proxy.https.port,
    'ftp_host' => config.user.gnome_proxy.ftp.host,
    'ftp_port' => config.user.gnome_proxy.ftp.port,
    'socks_host' => config.user.gnome_proxy.socks.host,
    'socks_port' => config.user.gnome_proxy.socks.port
  }
  if config.user.proxy.enabled && gnome_proxy['mode'].nil?
    gnome_proxy['mode'] = 'manual'
    gnome_proxy['ignore_hosts'] =
      config.proxy
            .no_proxy
            .split(',')
            .map { |hostname| hostname.gsub(/^127.0.0.1$/, '127.0.0.0/8') }
            .push('::1')
            .uniq
    gnome_proxy['use_same_proxy'] = false
    gnome_proxy['http_host'] = config.user.proxy.http.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\1')
    gnome_proxy['http_port'] = config.user.proxy.http.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\2')
    gnome_proxy['http_enabled'] = true
    gnome_proxy['https_host'] = config.user.proxy.https.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\1')
    gnome_proxy['https_port'] = config.user.proxy.https.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\2')
    gnome_proxy['ftp_host'] = config.user.proxy.ftp.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\1')
    gnome_proxy['ftp_port'] = config.user.proxy.ftp.gsub(%r{^http://([^:]+):([0-9]+)/$}, '\2')
  end

  # Use persistent APT cache
  config.vm.provision 'shell', inline: <<SCRIPT
  persistent_mount='/var/persistent/var/cache/apt/archives /var/cache/apt/archives none bind 0 0'
  mkdir -p /var/persistent/var/cache/apt/archives \
  && grep -q -F "${persistent_mount}" /etc/fstab || echo "${persistent_mount}" >> /etc/fstab \
  && mount /var/cache/apt/archives

  persistent_mount='/var/persistent/usr/local/src/ansible/data /usr/local/src/ansible/data none bind 0 0'
  mkdir -p /var/persistent/usr/local/src/ansible/data \
  mkdir -p /usr/local/src/ansible/data \
  && grep -q -F "${persistent_mount}" /etc/fstab || echo "${persistent_mount}" >> /etc/fstab \
  && mount /usr/local/src/ansible/data
SCRIPT

  # Perform preliminary setup before the main Ansible provisioning
  config.vm.provision 'ansible_local' do |ansible|
    ansible.playbook = 'provisioning/init.yml'
  end

  # Run Ansible from the Vagrant VM
  config.vm.provision 'ansible_local' do |ansible|
    ansible.playbook = 'provisioning/playbook.yml'
    ansible.galaxy_role_file = 'provisioning/requirements.yml'

    # Use alt-galaxy to download roles instead of ansible-galaxy.
    # Workaround for: "[ERROR]: failed to download the file: [Errno 104] Connection reset by peer"
    ansible.galaxy_command = 'alt-galaxy install --role-file=%{role_file} --roles-path=%{roles_path} --force'

    ansible.extra_vars = {
      timezone: config.user.timezone,

      locales_present: config.user.locales.present,
      locales_default: {
        lang: config.user.locales['default']
      },
      keyboard_model: config.user.keyboard.model,
      keyboard_layout: config.user.keyboard.layout,
      keyboard_variant: config.user.keyboard.variant,

      xdesktop_dock_position: config.user.dock_position,

      gnome_proxy_mode: gnome_proxy['mode'],
      gnome_proxy_autoconfig_url: gnome_proxy['autoconfig_url'],
      gnome_proxy_ignore_hosts: gnome_proxy['ignore_hosts'],
      gnome_proxy_use_same_proxy: gnome_proxy['use_same_proxy'],
      gnome_proxy_http_host: gnome_proxy['http_host'],
      gnome_proxy_http_port: gnome_proxy['http_port'],
      gnome_proxy_http_use_authentication: gnome_proxy['http_use_authentication'],
      gnome_proxy_http_authentication_user: gnome_proxy['http_authentication_user'],
      gnome_proxy_http_authentication_password: gnome_proxy['http_authentication_password'],
      gnome_proxy_http_enabled: gnome_proxy['http_enabled'],
      gnome_proxy_https_host: gnome_proxy['https_host'],
      gnome_proxy_https_port: gnome_proxy['https_port'],
      gnome_proxy_ftp_host: gnome_proxy['ftp_host'],
      gnome_proxy_ftp_port: gnome_proxy['ftp_port'],
      gnome_proxy_socks_host: gnome_proxy['socks_host'],
      gnome_proxy_socks_port: gnome_proxy['socks_port'],

      git_user_name: config.user.git_user.name,
      git_user_email: config.user.git_user.email,
      git_user_force: config.user.git_user.force,

      intellij_edition: config.user.intellij_edition.nil? ? config.user.intellij.edition : config.user.intellij_edition,

      intellij_license_key_path: config.user.intellij.license_key_path
    }
    ansible.skip_tags = config.user.ansible.skip_tags
  end

  # Restart the VM after everything is installed
  config.vm.provision :reload

  # Force password change on first use
  config.vm.provision 'shell', inline: 'chage --lastday 0 vagrant'
end
