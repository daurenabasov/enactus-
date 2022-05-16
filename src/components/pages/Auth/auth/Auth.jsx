import React from "react";
import s from "./Auth.module.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";
import baseurl from "../../../../url";
import { useHistory } from "react-router-dom";



const Auth = () => {
    let history = useHistory();

  return (
    <div className={s.register}>
      <div className={s.formBlock}>
        <h5>
          <a className={s.activeLink} href="/register">
            Войти
          </a>
          <span className={s.separatePoint}></span>
          <a className={s.nonActiveLink} href="/auth">
            Нет аккаунта? Создать
          </a>
        </h5>
        <div className={s.formGroup}>
          <Formik
            initialValues={{ email: "", password: "", toggle: true }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
              axios({
                method: 'post',
                url: `${baseurl}/api/v1/companies`,
                data: {
                  username: values.name,
                  email: values.email,
                  password: values.password,
                  image_company: "https://img.a.transfermarkt.technology/portrait/medium/395516-1642608355.jpg?lm=1",
                  description: "wedew",
                  phone_number: "0707890890"
                }
              }).then(res => {
                history.push("/");
              });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Введите email"),
              name: Yup.string().required("Введите имя")
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input
                    id="email"
                    placeholder="Введите Email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback" >Введите корректный Email</div>
                  )}
                  

                <div>
                    <input 
                        id="password"
                        placeholder="Придумайте пароль"
                        type={values.toggle ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.password && touched.password
                                ? "text-input error"
                                : "text-input"
                        }
                    />
                    {
                        errors.password && touched.password && (
                            <div className="input-feedback">Введите пароль</div>
                        )
                    }
                    <label>
                    <Field type="checkbox" name="toggle" />
                        {values.toggle ? 'Скрыть' : 'Показать'}
                    </label>
                </div>
                
                
                

                  
                  <button type="submit" disabled={isSubmitting} className={s.SubmitButton}>
                    Войти
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;