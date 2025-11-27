import styles from "./RegistrationPage.module.css";
import Container from "@/app/components/UI/Container";
import { AuthFormLayout } from "@/app/components/Forms/AuthFormLayout/AuthFormLayout";

export const RegistrationPage = () => {
  return (
    <div className={styles.RegistrationPage}>
      <Container>
        <div className={styles.RegistrationPageInner}>
          <AuthFormLayout isLogin={false}></AuthFormLayout>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
