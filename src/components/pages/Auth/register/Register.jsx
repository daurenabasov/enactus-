import React from "react";
import s from "./Register.module.css";

import { Formik, Field } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <div className={s.register}>
      <div className={s.formBlock}>
        <h5>
          <a className={s.activeLink} href="/register">
            Зарегистрируйтесь
          </a>
          <span className={s.separatePoint}></span>
          <a className={s.nonActiveLink} href="/auth">
            Уже есть аккаунт?
          </a>
        </h5>
        <div className={s.formGroup}>
          <Formik
            initialValues={{ email: "", name: "", password: "", toggle: true }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
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
                    <div className="input-feedback" >Введите Email</div>
                  )}
                  <input
                    id="name"
                    placeholder="Ваше имя"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">Введите имя</div>
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
                
                
                

                  <button
                    type="button"
                    // className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                    
                  >
                    Reset
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
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

export default Register;
