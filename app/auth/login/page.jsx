import styles from "./AuthPage.module.css";
import Container from "@/app/components/UI/Container";
import { AuthFormLayout } from "@/app/components/Forms/AuthFormLayout/AuthFormLayout";

export const AuthPage = () => {
  return (
    <div className={styles.AuthPage}>
      <Container>
        <div className={styles.AuthPageInner}>
          <AuthFormLayout isLogin={true}></AuthFormLayout>
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
