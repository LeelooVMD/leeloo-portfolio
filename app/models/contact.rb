class Contact < MailForm::Base
  attribute :name,      validate: true
  attribute :message,      validate: true
  attribute :email,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  captcha: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact from your portfolio",
      :to => "lilasviolettemarchand@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
