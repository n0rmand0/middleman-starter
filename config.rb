###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

page "/",
  locals: {
    body_class: "home",
    title: "",
    keywords: "",
    description: ""
  }


###
# Helpers
###

helpers do

  # automatically add active state to links
  def nav_link(link_text, url, target_class, options = {})
    options[:class] ||= ""
    current_page.locals[:body_class] ||=""
    options[:class] << " active" if  current_page.locals[:body_class].include? target_class
    link_to(link_text, url, options)
  end

end

# General configuration
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'


activate :sprockets
sprockets.append_path  File.join(root, "/source/bower_components")
sprockets.append_path File.join(root, "/source/javascripts/vendor")

activate :external_pipeline,
  name: :gulp,
  command: build? ? 'gulp production' : 'gulp',
  source: ".tmp",
  latency: 1

# Build-specific configuration
configure :build do
  activate :asset_hash
  activate :directory_indexes
  activate :gzip
  activate :minify_javascript
  activate :minify_css
end


## Deploy your site to more than one configuration using environment variables.
# https://github.com/middleman-contrib/middleman-deploy
# deploy with '$ rake deploy:staging' or '$ rake deploy:production'
# case ENV['TARGET'].to_s.downcase
# when 'staging'
#   activate :deploy do |deploy|
#     deploy.deploy_method = :rsync
#     deploy.host = ""
#     deploy.path = ""
#     deploy.user = ""
#     deploy.port =
#   end
# when 'production'
#   activate :deploy do |deploy|
#     deploy.deploy_method = :rsync
#     deploy.host = ""
#     deploy.path = ""
#     deploy.user = ""
#     deploy.port =
#   end
# end
