class ConnectionsController < ApplicationController
  def index
    @connections = Connection.all
    @contact = Contact.new
  end
end
