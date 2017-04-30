class Admin::AdminController < ApplicationController
  before_action :authorize_admin!
end
