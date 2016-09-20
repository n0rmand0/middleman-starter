# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source 'https://rubygems.org'

gem 'middleman'
gem 'middleman-sprockets', '>= 4.0.0'
gem 'middleman-deploy', '>= 2.0.0.pre.alpha'

## Ruby sass
# gem 'sassc-rails'
# gem 'neat'
# gem 'bourbon'
# gem 'middleman-autoprefixer'


require 'rbconfig'
  if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
    gem 'rb-fsevent', '<= 0.9.4'
  end
