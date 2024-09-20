import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner from './banner.png'; // Ensure you have a banner image in the src folder
import coverImage from './rules/cover.png'; // Ensure you have the images in the src folder
import rule1 from './rules/rule1.png';
import rule2 from './rules/rule2.png';
import rule3 from './rules/rule3.png';
import rule4 from './rules/rule4.png';
import rule5 from './rules/rule5.png';
import rule6 from './rules/rule6.png';
import rule7 from './rules/rule7.png';
import rule8 from './rules/rule8.png';
import rule9 from './rules/rule9.png';
import rule10 from './rules/rule10.png';
import rule11 from './rules/rule11.png';
import rule12 from './rules/rule121.png';
import boxImage from './rules/boximg.png'; // Ensure you have the box image in the src folder
import printoutImage from './printout/printoutimg.png'; // Ensure you have the printout image in the src folder
import leftImage from './printout/endzoneleft-1.png';
import rightImage from './printout/endzoneright-1.png';
import scorecardImage from './printout/scorefixed.png';
import videoFile from './vid/printoutvid.mp4'

Modal.setAppElement('#root');

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainer style={{ right: '25px' }} onClick={onClick}>
      &#8250;
    </ArrowContainer>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainer style={{ left: '25px' }} onClick={onClick}>
      &#8249;
    </ArrowContainer>
  );
};

const App = () => {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [isPrintoutModalOpen, setIsPrintoutModalOpen] = useState(false);

  const openRulesModal = () => {
    setIsRulesModalOpen(true);
  };

  const closeRulesModal = () => {
    setIsRulesModalOpen(false);
  };

  const openPrintoutModal = () => {
    setIsPrintoutModalOpen(true);
  };

  const closePrintoutModal = () => {
    setIsPrintoutModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <BannerContainer>
        <Banner src={banner} alt="Banner" />
      </BannerContainer>
      <ContentContainer>
        <Box onClick={openRulesModal}>
          <BoxContent src={boxImage} alt="Box Image" />
          <BoxText>Rules</BoxText>
        </Box>
        <Box onClick={openPrintoutModal}>
          <BoxContent src={printoutImage} alt="Printout Image" />
          <BoxText>Print Outs</BoxText>
        </Box>
      </ContentContainer>
            <VideoContainer>
        <Video controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
      <StyledModal
        isOpen={isRulesModalOpen}
        onRequestClose={closeRulesModal}
        contentLabel="Rules Modal"
      >
        <CloseButton onClick={closeRulesModal}>&times;</CloseButton>
        <Slider {...settings}>
          <SlideImage src={coverImage} alt="Cover" />
          <SlideImage src={rule1} alt="Rule 1" />
          <SlideImage src={rule2} alt="Rule 2" />
          <SlideImage src={rule3} alt="Rule 3" />
          <SlideImage src={rule4} alt="Rule 4" />
          <SlideImage src={rule5} alt="Rule 5" />
          <SlideImage src={rule6} alt="Rule 6" />
          <SlideImage src={rule7} alt="Rule 7" />
          <SlideImage src={rule8} alt="Rule 8" />
          <SlideImage src={rule9} alt="Rule 9" />
          <SlideImage src={rule10} alt="Rule 10" />
          <SlideImage src={rule11} alt="Rule 11" />
          <SlideImage src={rule12} alt="Rule 12" />
        </Slider>
      </StyledModal>
      <StyledModal
        isOpen={isPrintoutModalOpen}
        onRequestClose={closePrintoutModal}
        contentLabel="Printout Modal"
      >
        <CloseButton onClick={closePrintoutModal}>&times;</CloseButton>
        <Slider {...settings}>
          <SlideImage src={leftImage} alt="Left" />
          <SlideImage src={rightImage} alt="Right" />
          <SlideImage src={scorecardImage} alt="Scorecard" />
        </Slider>
        <ButtonContainer>
          <Button onClick={() => handleDownload(leftImage)}>Download Left</Button>
          <Button onClick={() => handleDownload(rightImage)}>Download Right</Button>
          <Button onClick={() => handleDownload(scorecardImage)}>Download Scorecard</Button>
        </ButtonContainer>
      </StyledModal>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;

const VideoContainer = styled.div`
  width: 80%;
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const BoxContent = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxText = styled.h2`
  margin-top: 10px;
  font-size: 1.5em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 80%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;

  &:focus {
    outline: none;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  cursor: pointer;
  z-index: 2;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;

  &:hover {
    background: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export default App;
