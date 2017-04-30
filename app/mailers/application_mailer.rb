class ApplicationMailer < ActionMailer::Base
  ADMIN_HOME_EMAIL = 'dtjrnorris@gmail.com'

  default from: ADMIN_HOME_EMAIL
  layout 'mailer'
end
