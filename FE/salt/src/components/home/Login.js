import './login.css'
export function Login () {

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
            <h1 class="form__title">Thông tin đăng nhập</h1>
            <input class="form__email" type="text" placeholder="Tài khoản"/>
            <input class="form__password" type="text" placeholder="******"/>
            <input class="form__submit-btn" type="submit" value="Login"/>
          </form><span>Quên<a class="form__link" href="#">Tài khoản</a><a>/</a><a class="form__link" href="#">Mật khẩu</a></span>
          <p> <a class="form__link" href="#">Tạo tài khoản mới</a></p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}