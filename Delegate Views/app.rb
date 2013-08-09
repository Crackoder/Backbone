require 'sinatra'
require 'json'

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/status/:id' do
  {:status => {:text=>"Test status", :comments => ["first comment", "second comment"]}}.to_json
end