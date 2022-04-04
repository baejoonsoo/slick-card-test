import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
  slidesToScroll: 1,
  centerPadding: "0px",
};

function App() {
  return (
    <Container>
      <StyleSlider {...settings}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
      </StyleSlider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyleSlider = styled(Slider)`
  width: 1000px;
`;

const Item = styled.div`
  background-image: url("logo192.png");
  background-position: center;
  background-repeat: no-repeat;
  border: 1px black solid;

  width: 300px;
  height: 100px;
  color: red;
`;
