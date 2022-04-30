class LoginController < ApplicationController
  def index
    @usuarios = Usuario.last

    render json: @usarios
  end

  def logar
    email, password = params_login
    @user = Administrator.where(email: email)
    return mgs_error_login if @user.empty?

    @user = @user.first
    confirm_password = BCrypt::Password.new(@user.password) == password

    if confirm_password
      time = params['login']['lembrar'] == '1' ? 1.year.from_now : 30.minutes.from_now
      value = {
        id: @user.id,
        nome: @user.name,
        email: @user.email
      }

      cookies[:home_adm] = { value: JsonWebToken.encode(value, time), httponly: true }
      JsonWebToken
      redirect_to root_path
    else
      mgs_error_login
    end
  end

private 

def params_login
  email = params['login']['email']
  password = params['login']['password']
  valida_form = LoginHelper.verify(email, password)

  if valida_form
    mgs_error_login
  else
    [email, password]
  end
end

def mgs_error_login
  flash[:erro] = 'Email ou senha inválidos'
  redirect_to login_path
end

end
