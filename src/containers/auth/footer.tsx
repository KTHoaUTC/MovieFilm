import { Col, Layout, Row } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const HomeFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Row>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <ul>
          <li> GIỚI THIỆU</li>
          <li>VỀ CHÚNG TÔI </li>
          <li>THỎA THUẬN SỬ DỤNG </li>
          <li> QUY CHẾ BẢO MẬT</li>
        </ul>
        <Col span={6}></Col>
        <ul>
          <li> HỖ TRỢ</li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        <Col span={6}>KẾT NỐI CAPSTONE MOVIE</Col>
      </Row>
    </Footer>
  );
};

export default HomeFooter;
