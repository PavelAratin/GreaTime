"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthFormLayout.module.css";
import { Button } from "../../UI/Button/Button";
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Fields/Input/Input";

export const AuthFormLayout = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    contactFIO: "", // ФИО контактного лица
    contactPhone: "", // Телефон контактного лица
    email: "", // E-mail организации
    password: "", // Пароль (только для логина)
    innOrganization: "", // ИНН организации
  });
  // 👇 Обработчик отправки
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📦 ДАННЫЕ ФОРМЫ:", formData);

    // // Здесь будет отправка на сервер
    // if (isLogin) {
    //   console.log("🚀 Отправляем данные ЛОГИНА:", {
    //     email: formData.email,
    //     password: formData.password,
    //   });
    // } else {
    //   console.log("🚀 Отправляем данные РЕГИСТРАЦИИ:", formData);
    // }
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={styles.AuthFormLayout}>
      <div className={styles.AuthFormLayoutHeader}>
        <Link
          className={`${styles.AuthFormLayoutLink} ${
            isLogin ? styles.active : ""
          }`}
          href="/auth/login">
          Вход
        </Link>
        <Link
          className={`${styles.AuthFormLayoutLink} ${
            !isLogin ? styles.active : ""
          }`}
          href="/auth/registration">
          Регистрация
        </Link>
      </div>
      {!isLogin && (
        <div className={styles.AuthFormLayoutHeader}>
          <Link className={styles.AuthFormLayoutLink} href="#">
            Физ.лицо
          </Link>
          <Link
            className={`${styles.AuthFormLayoutLink} ${styles.active}`}
            href="#">
            Юр.лицо
          </Link>
        </div>
      )}
      <AuthForm onSubmit={handleSubmit}>
        {!isLogin && (
          <Input
            type="text"
            placeholder="ФИО контактного лица"
            name="contactFIO"
            onChange={inputChangeHandler}></Input>
        )}
        {!isLogin && (
          <Input
            type="tel"
            placeholder="Телефон контактного лица"
            name="contactPhone"
            onChange={inputChangeHandler}></Input>
        )}
        <Input
          type="email"
          placeholder={isLogin ? "Введите ваш E-mail" : "E-mail организации"}
          name="email"
          onChange={inputChangeHandler}></Input>
        {!isLogin && (
          <Input
            type="text"
            placeholder="Инн организации"
            name="innOrganization"
            onChange={inputChangeHandler}></Input>
        )}
        <Input
          type="password"
          placeholder={isLogin ? "Введите ваш пароль" : "Задайте пароль"}
          name="password"
          onChange={inputChangeHandler}></Input>
        <Button type="submit">
          {isLogin ? "Войти на сайт" : "Зарегистрироваться"}
        </Button>
      </AuthForm>
    </div>
  );
};
