#!/usr/bin/env ruby
require 'rubygems'
require 'sinatra'

get '/' do
   File.read('index.html')
end
