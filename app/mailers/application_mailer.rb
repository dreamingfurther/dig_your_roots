class ApplicationMailer < ActionMailer::Base
  ADMIN_HOME_EMAIL      = 'dtjrnorris@gmail.com'
  ADMIN_HOME_EMAIL_FROM = 'dtjrnorris+from@gmail.com'

  default from: ADMIN_HOME_EMAIL
  layout 'mailer'
end
