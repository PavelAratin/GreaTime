import Container from "@/app/components/UI/Container";
import styles from "./LoginPage.module.css";
import { FormLogin } from "@/app/components/Forms/FormLogin/FormLogin";

export const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <Container>
        <div className={styles.LoginPageInner}>
          <FormLogin></FormLogin>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
