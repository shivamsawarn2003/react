import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Hero.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import CVImage from "../assets/img/Real resume.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [isCVVisible, setIsCVVisible] = useState(false);

  const handleClick = () => {
    console.log('connect');
    setIsCVVisible(!isCVVisible);
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1); // Removed, not used
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Web Developer", "competitive programmer", "UI/UX Designer"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        // setIndex(prevIndex => prevIndex - 1); // Removed, not used
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(l => l + 1);
        // setIndex(1); // Removed, not used
        setDelta(500);
      } else {
        // setIndex(prevIndex => prevIndex + 1); // Removed, not used
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text.length]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>{`Hi! I'm Shivam`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "competitive", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Welcome to my portfolio, where pixels meet passion and code transforms concepts into compelling digital experiences.
                  </p>
                  <button onClick={handleClick}>View CV <ArrowRightCircle size={25} /></button>
                  {isCVVisible && <img src={CVImage} alt="cv img" />}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn circularImage" : "circularImage"}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
