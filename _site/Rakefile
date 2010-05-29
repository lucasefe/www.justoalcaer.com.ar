require 'rubygems'
require 'highline/import'
require 'net/ssh'

GITHUB_REPO = 'git://github.com/lucasefe/www.justoalcaer.com.ar.git'
STAGING_TO = 'neura.lucasefe.com.ar:/var/apps/staging.justoalcaer.com.ar/'
PRODUCTION_TO = 'neura.lucasefe.com.ar:/var/apps/www.justoalcaer.com.ar/'

desc "deploy site to litanyagainstfear.com"
task :deploy do
  deploy_to(PRODUCTION_TO, GITHUB_REPO)  
end
task :setup do
  cold_deploy_to(PRODUCTION_TO, GITHUB_REPO)
end

namespace :staging do
  task :deploy do
    deploy_to(STAGING_TO, GITHUB_REPO)
  end
  task :setup do
    cold_deploy_to(STAGING_TO, GITHUB_REPO)
  end
end

def cold_deploy_to(to, from)
  username, password = fetch_credentials
  host, dir = to.split(":")
  deploy_dir = "#{dir}/cached-copy"
  
  Net::SSH.start(host, username, :port => 22, :password => password) do |ssh|
    commands = <<-EOF
      mkdir -p #{deploy_dir}
      cd #{deploy_dir}
      git clone #{from} .
    EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands
  end
end
def deploy_to(to, from)
  username, password = fetch_credentials
  host, dir = to.split(":")
  deploy_dir = "#{dir}/cached-copy"
  Net::SSH.start(host, username, :port => 22, :password => password) do |ssh|
    commands = <<-EOF
      cd #{deploy_dir}
      git pull
    EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands    
  end
end
def fetch_credentials
  username = ask("Username: ") { |q| q.echo = true }
  password = ask("Password: ") { |q| q.echo = "*" }
  return username, password
end