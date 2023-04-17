import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  message,
  Row,
  Steps,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";
import { Image } from "antd";
const { Panel } = Collapse;
import dayjs from "dayjs";
import "dayjs/locale/vi"; // Nếu muốn hiển thị ngôn ngữ Tiếng Việt

dayjs.locale("vi"); // Nếu muốn hiển thị ngôn ngữ Tiếng Việt

const BookTicker: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs());
const startOfMonth = selectedDate?.startOf("month");
const endOfMonth = selectedDate?.endOf("month");
const datesOfMonth = [];
let currentDate = startOfMonth;

if (endOfMonth) {
  while (currentDate && currentDate <= endOfMonth) {
    datesOfMonth.push(currentDate);
    currentDate = currentDate.add(1, "day");
  }
}

  const steps = [
    {
      title: "Chọn thông tin vé",
      content: (
        <div className={styles.step_1}>
          <Row>
            <h1> Chọn thông tin vé</h1>
          </Row>
          <Row className={styles.step_}>
            <Col className={styles.step_img} span={10} offset={2}>
              <Image width={450} height={500} src="/doremon.jpg" />
            </Col>
            <Col className={styles.step_content} span={10} offset={2}>
              <h2>Chọn ngày xem phim:</h2>

              <div style={{ overflowX: "scroll", borderRadius:'20px', border: "1px solid red"}}>
                <div style={{ display: "flex" }}>
                  {datesOfMonth.map((date) => (
                    <div
                      key={date.format("DD-MM-YYYY")}
                      onClick={() => setSelectedDate(date)}
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        width: "140px",
                        height: "70px",
                        textAlign: "center",
                        lineHeight: "20px",
                        cursor: "pointer",
                        padding: "1rem 0.3rem",
                        margin: "15px",
                        backgroundColor: date.isSame(selectedDate, "day")
                          ? "#1890ff"
                          : "#fff",
                        color: date.isSame(selectedDate, "day")
                          ? "#fff"
                          : "#000",
                      }}
                    >
                      <div>{date.format("ddd")}</div>
                      <div>{date.format("DD-MM")}</div>
                    </div>
                  ))}
                </div>
              </div>
              <h2 style={{ paddingTop: "2rem" }}>
                Danh sách các rạp chiếu phim:
              </h2>
              <Collapse accordion>
                <Panel
                  className={styles.panel}
                  header="BHH Star 3.2 Quận 10, TPHCM"
                  key="1"
                >
                  <Button className={styles.btn_time}>09:00 AM</Button>
                  <Button className={styles.btn_time}>11:00 AM</Button>
                </Panel>
                <Panel
                  className={styles.panel}
                  header="BHH Star 3.2 Cầu Giấy, Hà Nội"
                  key="2"
                >
                  <Button className={styles.btn_time}>09:00 AM</Button>
                  <Button className={styles.btn_time}>11:00 AM</Button>
                </Panel>
                <Panel
                  className={styles.panel}
                  header="BHH Star 3.2 Kiến Xương, Thái Bình"
                  key="3"
                >
                  <Button className={styles.btn_time}>09:00 AM</Button>
                  <Button className={styles.btn_time}>11:00 AM</Button>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Chọn vé",
      content: "First-content",
    },
    {
      title: "Chọn ghế ngồi",
      content: "Second-content",
    },
    {
      title: "Chọn đồ ăn",
      content: "Last-content",
    },
    {
      title: "Xác nhận",
      content: "Last-content",
    },
    {
      title: "Đặt vé thành công",
      content: "Last-content",
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    marginTop: 46,
  };

  return (
    <>
      <Steps className={styles.step} current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ textAlign: "center", marginTop: 24, marginBottom: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Tiếp Theo
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Hoàn Thành
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Quay Lại
          </Button>
        )}
      </div>
    </>
  );
};

export default BookTicker;
