desc "deploy site to litanyagainstfear.com"
task :deploy do
  require 'rubygems'
  require 'highline/import'
  require 'net/ssh'

  username = ask("Username: ") { |q| q.echo = true }
  password = ask("Password: ") { |q| q.echo = "*" }

  Net::SSH.start('neura.lucasefe.com.ar', username, :port => 22, :password => password) do |ssh|
    commands = <<EOF
cd /var/apps/www.lucasefe.com.ar/cached-copy
git pull
EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands
  end
end