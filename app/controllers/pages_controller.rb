class PagesController < ApplicationController
  def home
  end

  def download_pdf
    send_file "#{Rails.root}/app/assets/data/CV_Lilas_Marchand.pdf", type: "application/pdf", x_sendfile: true
  end
end
