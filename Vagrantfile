# -*- mode: ruby -*-
# vi: set ft=ruby :

# Initial configuration
if Vagrant::Util::Platform.windows? then
  def running_in_admin_mode?
    (`reg query HKU\\S-1-5-19 2>&1` =~ /ERROR/).nil?
  end

  unless running_in_admin_mode?
    puts "This vagrant makes use of SymLinks to the host. On Windows, Administrative privileges are required to create symlinks (mklink.exe). Try again from an Administrative command prompt."
    exit 1
  end
end

$script = <<SCRIPT
  echo "-------------------- updating package lists"
  apt-get -y update
  # gotta put this before the upgrade, b/c it reboots and then all commands are lost
  echo "-------------------- installing postgres"
  apt-get -y install postgresql
  apt-get -y install libpq-dev
  echo "-------------------- creating postgres vagrant role with password vagrant"
  # Create Role and login
  sudo su postgres -c "psql -c \"CREATE ROLE vagrant SUPERUSER LOGIN PASSWORD 'vagrant'\""
  echo "-------------------- creating wtm database"
  # Create WTM database
  sudo su postgres -c "createdb -E UTF8 -T template0 --locale=en_US.utf8 -O vagrant wtm"
  echo "-------------------- upgrading packages to latest"
  apt-get -y upgrade
  apt-get -y autoremove

  sudo apt-get install -y curl gnupg gpgv2 gnupg2

  # rbenv prerequisites
  sudo apt-get -y install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev

  # install git
  sudo apt-get -y install git

  # install rbenv
  # git clone https://github.com/rbenv/rbenv.git ~/.rbenv
  sudo apt-get -y install rbenv ruby-build

  # add rbenv to $PATH
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
  echo 'eval "$(rbenv init -)"' >> ~/.bashrc

  # where the script should fail
  # if it does, do 'vagrant ssh' and copy paste the rest in the terminal
  # restart shell
  exec -l $SHELL

  # add 'install' option to rbenv
  git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build

  # install ruby
  rbenv install --verbose 2.5.0
  rbenv global 2.5.0

  # rails
  gem install rails

  # working directory
  cd vagrant

  # bundler for gems
  sudo apt-get -y install bundler
  bundle

  # nodejs is a dependency for running the server
  curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash
  sudo apt-get -y install nodejs

  # heroku
  wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh

  # login to heroku
  heroku login

  # for symlinks to work, (installing webpacker), need to run terminal with admin privileges if running windows
SCRIPT

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/xenial64"

  # Configurate the virtual machine to use 1.5GB of RAM
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1536"]
  end

  # Forward the Rails server default port to the host
  # This port is the default rails port
  # If there are issues, this port can be changed to something like 1234
  # But you have to start rails using "rails s -p 0.0.0.0"
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  # Initial configuration - installs required apps
  config.vm.provision "shell", inline: $script

  # Use Chef Solo to provision our virtual machine
  config.vm.provision :chef_solo do |chef|
    chef.add_recipe "postgresql::server"
    chef.add_recipe "postgresql::client"
    # chef.log_level = :debug
  end
end
