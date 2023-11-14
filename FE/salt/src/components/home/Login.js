import { useNavigate } from 'react-router-dom'
import './login.css'
import { login } from '../../service/Account';
import Swal from 'sweetalert2';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
export function Login() {
  const navigate = useNavigate();
  const createAccount = async (value) => {
    try {
      const jwt = await login(value)
      console.log("jwt", jwt);
      localStorage.setItem("JWT", jwt.data.token);
      navigate("/")
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        showConfirmButton: false,
        timer: 1500
    });
    } catch (e) {
      Swal.fire("Tài khoản hoặc mật khẩu không chính xác")
    }
  }
  useEffect(() => {
    document.title = "Nhà Muối";
  }, [])

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Tài khoản không được để trống"),
          password: Yup.string().required("Mật khẩu không được để trống")
        })}
        onSubmit={(values) => {
          console.log("value", values);
          createAccount(values)
        }}
      >
        <div className="form">
          <div className="form__box">
            <div className="form__left">
              <div className="form__padding"><img className="form__image" src="img/logosalt.jpg" /></div>
            </div>
            <div className="form__right">
              <div className="form__padding-right">
                <Form>
                  <h1 className="form__title">Thông tin đăng nhập</h1>
                  <Field className="form__email" name="username" type="text" placeholder="Tài khoản" />
                  <ErrorMessage component="span" name='username' className='text-danger'/>
                  <Field className="form__email" name="password" type="password" placeholder="******" />
                  <ErrorMessage component="span" name='password' className='text-danger'/>
                  <button className="form__submit-btn" type="submit">Đăng nhập</button>
                </Form><span>Quên: <a className="form__link" href="#">Mật khẩu</a></span>
                <p> <a className="form__link" href="/register">Tạo tài khoản mới</a></p>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}