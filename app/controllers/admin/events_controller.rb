module Admin
  class EventsController < AdminController
    def index
      @events = Event.all
    end
  end
end
