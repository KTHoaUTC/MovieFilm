import { Button, Col, Layout, Row } from "antd";
import styles from "./style.module.scss";

const { Header, Footer, Sider, Content } = Layout;
type AuthContainerProps = {};

const HeaderLoginAuth = () => {
  return (
    <>
      <Row className={styles.row_header}>
        <Col className={styles.col_left} span={8}>
          Bạn cần đăng nhập để có nhiều trải nghiệm hơn!
        </Col>
        <Col className={styles.col_center} span={8}>
          <img src="/LogoMovie1.png"></img>
        </Col>
        <Col className={styles.col_right} span={8}>
          <Button className={styles.btn_login_auth}>Đăng Nhập</Button>
          <Button className={styles.btn_logout_auth}>Đăng Xuất</Button>
        </Col>
      </Row>
    </>
  );
};

export default HeaderLoginAuth;
