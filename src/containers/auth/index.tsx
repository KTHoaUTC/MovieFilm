import HeaderLoginAuth from "@/layouts/dashboard/header";
import HomeFooter from "./footer";
import SlideHome from "./slide";
// import styles from "./style.module.scss";
const HomeAuth = () => {
  return (
    <div className="contanier">
      <HeaderLoginAuth></HeaderLoginAuth>
  
      <SlideHome></SlideHome>

      <HomeFooter></HomeFooter>
    </div>
  );
};

export default HomeAuth;
