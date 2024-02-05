import React, { useEffect } from 'react';
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video2 from '../../Assets/video (2).mp4';
import { FooterSection, VideoDiv, Video, VideoOverlay, ContentContainer, ContactDiv, Text, InputDiv,
  FooterCard, FooterIntro, LogoDiv, IconWrapper, FooterParagraph, FooterSocials, FooterLinks, FooterDiv, 
} from './styles';
import { NavLink } from '../navbar/styles';



interface FooterProps {
  
}

export const Footer: React.FC<FooterProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <FooterSection id="footer">
      <VideoDiv>
        <Video src={video2} loop autoPlay muted type="video/mp4"></Video>
        <VideoOverlay></VideoOverlay>
      </VideoDiv>

      <ContentContainer>
        <ContactDiv>
          <Text data-aos="fade-up" data-aos-duration="2000">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </Text>

          <InputDiv>
            <input data-aos="fade-up" data-aos-duration="2000" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" data-aos-duration="3000" className="btn" type="submit">
              SEND <FiSend />
            </button>
          </InputDiv>
        </ContactDiv>

        <FooterCard data-aos="fade-up" data-aos-duration="4000">
          <FooterIntro>
            <LogoDiv>
              <NavLink className="logo flex">
                <IconWrapper>
                  <MdOutlineTravelExplore /> Travel.
                </IconWrapper>
              </NavLink>
            </LogoDiv>

            <FooterParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem
              minima, tempore non odio provident nobis ipsam at, doloremque sed cupiditate ipsum in, atque soluta?
            </FooterParagraph>
            <FooterSocials>
                <IconWrapper>
                  <AiOutlineTwitter />
                </IconWrapper>
                <IconWrapper>
                  <AiFillYoutube/>
                </IconWrapper>
                <IconWrapper>
                  <AiFillInstagram/>
                </IconWrapper>
                <IconWrapper>
                  <FaTripadvisor/>
                </IconWrapper>
              </FooterSocials>
          </FooterIntro>

          <FooterLinks>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight  />
                RentalCar
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight/>
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight  />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight  />
                Oceania
              </li>
            </div>
          </FooterLinks>

          <FooterDiv>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED 2024</small>
          </FooterDiv>
        </FooterCard>
      </ContentContainer>
    </FooterSection>
  );
};


