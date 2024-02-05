import React, { useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

import video from '../../Assets/video.mp4';

import {
  HomeSection,
  HomeContainer,
  VideoContent,
  HomeContent,
  TextContent,
  SmallText,
  HomeTitle,
  CardDiv,
  DestinationInput,
  Input,
  DateInput,
  PriceInput,
  LabelTotal,
  FilterContent,
  AosContent,
  RightIcons,
  LeftIcons,
} from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <HomeSection id="home" className="home">
      <HomeContainer className="overlay"></HomeContainer>
      <VideoContent src={video} autoPlay loop muted></VideoContent>

      <HomeContent data-aos="fade-down" className="homeContent container">
        <TextContent className="textDiv">
          <SmallText className="smallText">Our Packages</SmallText>
          <HomeTitle data-aos="fade-down" className="homeTitle">
            Search your Holiday
          </HomeTitle>
        </TextContent>

        <CardDiv data-aos="fade-down" className="cardDiv grid">
          <DestinationInput className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <Input className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation />
            </Input>
          </DestinationInput>

          <DateInput className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <Input className="input flex">
              <input type="date" />
            </Input>
          </DateInput>

          <PriceInput className="priceInput">
            <LabelTotal className="label_total flex">
              <label htmlFor="city">Max price:</label>
              <h3 className="total">$5000</h3>
            </LabelTotal>
            <Input className="input flex">
              <input type="range" max="5000" min="1000" />
            </Input>
          </PriceInput>

          <FilterContent className="searchOptions flex">
            <HiFilter />
            <span>MORE FILTERS</span>
          </FilterContent>
        </CardDiv>

        <AosContent data-aos="fade-up" className="homeFooterIcons flex">
          <RightIcons className="rightIcons">
            <FiFacebook />
            <AiOutlineInstagram />
            <SiTripadvisor />
          </RightIcons>
          <LeftIcons className="leftIcons">
            <BsListTask />
            <TbApps />
          </LeftIcons>
        </AosContent>
      </HomeContent>
    </HomeSection>
  );
};
