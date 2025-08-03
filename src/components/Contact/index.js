import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactCard = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactValue = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text_primary + "CC"};
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactCard>
          <ContactItem>
            <ContactIcon>📧</ContactIcon>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactValue href="mailto:parsa.hajiha@gmail.com">
                parsa.hajiha@yahoo.com
              </ContactValue>
            </ContactInfo>
          </ContactItem>

          <ContactItem>
            <ContactIcon>💼</ContactIcon>
            <ContactInfo>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue
                href="https://www.linkedin.com/in/parsa-hajiha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/parsa-hajiha
              </ContactValue>
            </ContactInfo>
          </ContactItem>

          <ContactItem>
            <ContactIcon>💻</ContactIcon>
            <ContactInfo>
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue
                href="https://github.com/parsa-hj"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/parsa-hj
              </ContactValue>
            </ContactInfo>
          </ContactItem>
        </ContactCard>
      </Wrapper>
    </Container>
  );
};

export default Contact;
