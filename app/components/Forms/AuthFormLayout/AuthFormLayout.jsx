"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthFormLayout.module.css";
import { Button } from "../../UI/Button/Button";
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Fields/Input/Input";
import { Modal } from "../../Modal/Modal";

export const AuthFormLayout = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "", // ФИО контактного лица
    phone: "", // Телефон контактного лица
    email: "", // E-mail организации
    password: "", // Пароль (только для логина)
    innOrganization: "", // ИНН организации
    userType: "legal",
  });
  const [activeButtonUserType, setActiveButtonUserType] = useState("legal");
  // 👇 Обработчик отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📦 ДАННЫЕ ФОРМЫ:", formData);
    try {
      const response = await fetch("http://localhost:5000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("✅ Ответ от сервера:", result);
    } catch (error) {
      console.log("❌ Ошибка при отправке:", error);
    }
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeTypeUserHandler = (typeUser) => {
    setActiveButtonUserType(typeUser);
    setFormData((prev) => ({
      ...prev,
      userType: typeUser,
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
          <Button
            className={`${styles.AuthFormLayoutLink} ${
              activeButtonUserType === "individual" ? styles.active : ""
            }`}
            onClick={() => changeTypeUserHandler("individual")}>
            Физ.лицо
          </Button>
          <Button
            className={`${styles.AuthFormLayoutLink} ${
              activeButtonUserType === "legal" ? styles.active : ""
            }`}
            onClick={() => changeTypeUserHandler("legal")}>
            Юр.лицо
          </Button>
        </div>
      )}
      <AuthForm onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="ФИО контактного лица"
              name="fullName"
              onChange={inputChangeHandler}></Input>
            <Input
              type="tel"
              placeholder="Телефон контактного лица"
              name="phone"
              onChange={inputChangeHandler}></Input>
            {activeButtonUserType === "legal" && (
              <Input
                type="text"
                placeholder="ИНН организации (10 цифр)"
                name="innOrganization"
                value={formData.innOrganization}
                onChange={inputChangeHandler}
              />
            )}
          </>
        )}
        <Input
          type="email"
          placeholder="Введите ваш E-mail"
          name="email"
          onChange={inputChangeHandler}></Input>
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
