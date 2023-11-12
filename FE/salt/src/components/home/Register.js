import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { register } from '../../service/Account';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
export function Register() {
  const navigate = useNavigate();
  const registerAccount = async (value) => {
    await register(value)
    Swal.fire("Đăng ký thành công!", "", "success")
    navigate("/login")
  }
  const checkConfirmPassword = (confirmPassword) => {
    let password = document.getElementById("password").value
    console.log("value", password);
    return password === confirmPassword;
  }
  useEffect(() => {
    document.title = "Nhà Muối"
  }, [])

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Không để trống tài khoản")
            .test("check-username", "Không để trống", (value) => value.trim().length !== 0),
          password: Yup.string()
            .required("Không để trống mật khẩu")
            .test("check-username", "Không để trống", (value) => value.trim().length !== 0),

          confirmPassword: Yup.string()
            .required("Không để trống mật khẩu")
            .test("check-username", "Không để trống", (value) => value.trim().length !== 0)
            .min(3, "Số lượng ký tự phải lớn hơn hoặc bằng 3")
            .max(50, "Số lượng ký tự phải bé hơn hoặc bằng 50")
            .test('check-confirm-password', 'Mật khẩu không khớp', (value) => checkConfirmPassword(value))
        })}
        onSubmit={(values) => {
          registerAccount(values);
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
                  <h1 className="form__title">Đăng ký tài khoản</h1>
                  <Field className="form__email" name="username" type="text" placeholder="Tài khoản" />
                  <ErrorMessage component="small" name='username' className='text-danger' />
                  <Field className="form__password" name="password" id="password" type="text" placeholder="******" />
                  <ErrorMessage component="small" name='password' className='text-danger' />
                  <Field className="form__password" type="password" onblur="inputConfirmPass()" name="confirmPassword" placeholder="Nhập lại mật khẩu" />
                  <ErrorMessage component="small" name='confirmPassword' className='text-danger' /><br></br>
                  <button className="form__submit-btn" type="submit">Đăng ký</button>
                  <button style={{ color: "black" }} className="form__submit-btn" type="button"><Link style={{ color: "black", textDecoration: "none" }} to="/login">Quay lại</Link ></button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}