import { BorderOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { CSSProperties, useState } from "react";
import styles from "./style.module.scss";

const SeatButtons = () => {
  const [selectedSeat, setSelectedSeat] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const bookedSeats = [5, 10, 15];
  // const selectedSeat = 20;

  const seatButtons = [];
  for (let i = 1; i <= 50; i++) {
    let seatClass = "empty-seat";
    let seatStyle: CSSProperties = {};
    if (bookedSeats.includes(i)) {
      seatStyle.backgroundColor = "red";
    } else if (i === selectedSeat) {
      seatClass = "selected-seat";
      seatStyle.backgroundColor = "yellow";
    } else {
      seatStyle.backgroundColor = "green";
    }
    seatButtons.push(
      <Button
        style={{
          textAlign: "center",
          marginLeft: "1rem",
          marginTop: "1rem",
          ...seatStyle,
        }}
        key={i}
        className={seatClass}
        onClick={() => handleClick(i)}
      >
        {i}
      </Button>
    );
  }
  const handleClick = (seatNumber: number) => {
    // Kiểm tra xem ghế đã bán chưa
    if (bookedSeats.includes(seatNumber)) {
      console.log(`Ghế số ${seatNumber} đã được đặt trước`);
      return;
    }
    // // Kiểm tra xem ghế đã được chọn chưa
    // if (selectedSeats.includes(seatNumber)) {
    //   setSelectedSeats(selectedSeats.filter((n) => n !== seatNumber));
    //   if (selectedSeat === seatNumber) {
    //     setSelectedSeat(0);
    //     setTotalPrice(0);
    //   }
    //   return;
    // }
    // // Cập nhật số ghế và giá tiền
    // setSelectedSeat(seatNumber);
    // setTotalPrice(seatNumber * 100000);
    // setSelectedSeats([...selectedSeats, seatNumber]);
    // Nếu ghế đã được chọn rồi, bỏ chọn ghế này
    // if (selectedSeats.includes(seatNumber)) {
    //   const updatedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
    //   setSelectedSeats(updatedSeats);
    //   return;
    // }

    // // Cập nhật số ghế và giá tiền
    // setSelectedSeat(seatNumber);
    // const updatedSeats = [...selectedSeats, seatNumber];
    // setSelectedSeats(updatedSeats);
    // setTotalPrice(
    //   updatedSeats.reduce((total, seat) => total + seatNumber * 100000, 0)
    // );
    // Nếu ghế đã được chọn rồi, bỏ chọn ghế này
    if (selectedSeats.includes(seatNumber)) {
      const updatedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
      setSelectedSeats(updatedSeats);
      setTotalPrice(
        updatedSeats.reduce((total, seat) => total + 50 * 1000, 0)
      );
      return;
    }

    // Cập nhật số ghế và giá tiền
    setSelectedSeat(seatNumber);
    const updatedSeats = [...selectedSeats, seatNumber];
    setSelectedSeats(updatedSeats);
    setTotalPrice(
      updatedSeats.reduce((total, seat) => total + seat * 100000, 0)
    );
  };
  const SelectedSeats = () => {
    return (
      <div>
        <h2>Danh sách ghế đã chọn:</h2>
        {selectedSeats.map((seatNumber) => (
          <p key={seatNumber}>Ghế số {seatNumber}</p>
        ))}
      </div>
    );
  };
  return (
    <>
      <Row>
        <Col span={16}>
          {" "}
          <div style={{ textAlign: "center" }}>
            <img style={{ width: "50%", height: "5rem" }} src="/gggg.jpg"></img>
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: "50%",
              }}
            >
              {seatButtons}
            </div>
            <div className={styles.note_seat}>
              <div className={styles.icon_seat}>
                <BorderOutlined className={styles.icon_seat_empty} />
                ghế trống
              </div>
              <div className={styles.icon_seat}>
                <BorderOutlined className={styles.icon_seat_select} />
                ghế đã bán
              </div>
              <div className={styles.icon_seat}>
                <BorderOutlined className={styles.icon_seat_booked} />
                ghế đang chọn
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <h1>Thông tin </h1>
          {/* {selectedSeat > 0 && !selectedSeats.includes(selectedSeat) && (
            <div>
              <p>Số ghế: {selectedSeat}</p>
              <p>Giá tiền: {totalPrice} VND</p>
            </div>
          )}
          <SelectedSeats /> */}
          {selectedSeats.length > 0 && (
            <div>
              <h3>Danh sách ghế đã chọn:</h3>
              <ul>
                {selectedSeats.map((seat) => (
                  <li key={seat}>Ghế số {seat}</li>
                ))}
              </ul>
              <p>Tổng thành tiền: {totalPrice} VND</p>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default SeatButtons;
