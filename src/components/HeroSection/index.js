import React, { useState, useEffect } from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
  position: relative;
`;

const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  font-size: 24px;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.text_secondary + "20"};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.card};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const hasResume = Bio.resume && Bio.resume.trim() !== "";

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {hasResume ? (
              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Resume
              </ResumeButton>
            ) : (
              <ResumeButton onClick={handleResumeClick}>
                Check Resume
              </ResumeButton>
            )}
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

      {!hasResume && showModal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Resume Coming Soon!</ModalTitle>
            <ModalMessage>
              My resume is currently being updated and will be available soon.
              In the meantime, feel free to reach out to me via email or
              LinkedIn for more information about my experience and skills.
            </ModalMessage>
            <CloseButton onClick={closeModal}>Got it!</CloseButton>
            <SocialLinks>
              <SocialLink href="mailto:parsa.hajiha@yahoo.com" title="Email">
                <svg viewBox="0 0 24 24">
                  <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://github.com/parsa-hj"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/parsa-hajiha/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default HeroSection;
