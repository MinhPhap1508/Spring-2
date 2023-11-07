import './login.css'
export function Register () {

    return(
        <>
        <div class="form">
    <div class="form__box">
      <div class="form__left">
        <div class="form__padding"><img class="form__image" src="img/logosalt.jpg"/></div>
      </div>
      <div class="form__right">
        <div class="form__padding-right">
          <form>
            <h1 class="form__title">Đăng ký tài khoản</h1>
            <input class="form__email" type="text" placeholder="Tài khoản"/>
            <input class="form__password" type="text" placeholder="******"/>
            <input class="form__password" type="text" placeholder="Nhập lại mật khẩu"/>
            <input class="form__submit-btn" type="submit" value="Đăng ký"/>
          </form>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}