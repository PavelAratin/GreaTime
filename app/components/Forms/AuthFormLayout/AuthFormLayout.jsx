"use client";
import { useState } from "react";
import styles from "./AuthFormLayout.module.css";
import { Button } from "../../UI/Button/Button";
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Fields/Input/Input";
import { Modal } from "../../UI/Modal/Modal";
import { RegistrationContent } from "../../Modals/RegistrationContent/RegistrationContent";
import { API_URLS } from "@/app/constans/api";
import { HTTP_METHODS } from "next/dist/server/web/http";
import { USER_TYPES } from "@/app/constans/forms";
import { AuthTabs } from "@/app/auth/components/AuthLinks/AuthLinks";
import { RegistrationTypeSelector } from "@/app/auth/components/RegistrationTypeSelector/RegistrationTypeSelector";
// import { AuthTabs } from "@/app/auth/components/AuthTabs/AuthTabs";

export const AuthFormLayout = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "", // ФИО контактного лица
    phone: "", // Телефон контактного лица
    email: "", // E-mail организации
    password: "", // Пароль (только для логина)
    innOrganization: "", // ИНН организации
    userType: "legal",
  });
  const [activeButtonUserType, setActiveButtonUserType] = useState(
    USER_TYPES.LEGAL
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [errors, setErrors] = useState({});
  // 👇 Обработчик отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Показываем ошибку
      setModalContent({
        content: (
          <RegistrationContent
            type="error"
            title="Пожалуйста, исправьте ошибки в форме"
          />
        ),
      });
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await fetch(API_URLS.REGISTRATION, {
        method: HTTP_METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setIsModalOpen(true);
        setModalContent({
          content: (
            <RegistrationContent
              type="success"
              title={result.message}></RegistrationContent>
          ),
        });
      } else {
        setIsModalOpen(true);
        setModalContent({
          content: (
            <RegistrationContent
              type="error"
              title={result.message}></RegistrationContent>
          ),
        });
      }
    } catch (error) {
      if (error.message.includes("GET/HEAD method cannot have body")) {
        setIsModalOpen(true);
        setModalContent({
          content: (
            <RegistrationContent
              type="error"
              title={error.message}></RegistrationContent>
          ),
        });
      }
    }
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const errorText = validateField(name, value);
    console.log(errorText);
    setErrors((prev) => ({
      ...prev,
      [name]: errorText,
    }));
    console.log(errors);
  };

  const changeTypeUserHandler = (typeUser) => {
    setActiveButtonUserType(typeUser);
    setFormData((prev) => ({
      ...prev,
      userType: typeUser,
    }));
  };

  const closeModalHandlder = () => {
    setIsModalOpen(false);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (/\d/.test(value)) {
          return "Введите ФИО";
        }
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className={styles.AuthFormLayout}>
      <Modal isOpen={isModalOpen} onClose={closeModalHandlder}>
        {modalContent?.content}
      </Modal>
      <AuthTabs isLogin={isLogin}></AuthTabs>
      {!isLogin && (
        <div className={styles.AuthFormLayoutHeader}>
          <RegistrationTypeSelector
            onClickHandler={changeTypeUserHandler}
            activeButtonUserType={
              activeButtonUserType
            }></RegistrationTypeSelector>
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
