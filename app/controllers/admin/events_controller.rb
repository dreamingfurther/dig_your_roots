module Admin
  class EventsController < AdminController
    def index
      @events = Event.all
    end

    def show
      @event = Event.find(params[:id])
    end
  end
end
