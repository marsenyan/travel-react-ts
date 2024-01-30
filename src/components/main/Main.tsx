import React, { useEffect } from 'react';
import { HiOutlineLocationMarker, HiClipboardList } from 'react-icons/hi';
import img from '../../assets/img1.jpg';
import img2 from '../../assets/img (2).jpg';
import img3 from '../../assets/img (3).jpg';
import img4 from '../../assets/img (12).jpg';
import img5 from '../../assets/img (13).jpg';
import img6 from '../../assets/img (6).jpg';
import img7 from '../../assets/img (7).jpg';
import img8 from '../../assets/img (14).jpg';
import img9 from '../../assets/img (9).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MainSection, TitleSection, ContentSection, SingleDestination, ImageDiv, 
  CardInfo, Fees, Grade, DescriptionSection, ButtonDetails } from './styles';
 

interface Destination {
  id: number;
  imgSrc: string;
  destTitle: string;
  location: string;
  grade: string;
  fees: string;
  description: string;
}

const Data: Destination[] = [
    {
     id: 1,
     imgSrc: img,
     destTitle: 'Yerevan',
     location: 'Armenia',
     grade: 'CULTURAL RELAX ',
     fees: '$800',
     description: 'According to travel statistics, Armenia welcomes a significant number of visitors each year, contributing to its growing popularity on the global tourism map. With a rich cultural heritage, stunning landscapes, and a unique blend of history and modernity.'  
    },  
    {
      id:2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX ',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.' 
    },     
      
    {
      id:3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'CULTURAL RELAX ',
      fees: '$700',
      description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ‘lavish’ and ‘beauty’. Always interesting to be in this place'  
    },
    {
      id:4,
      imgSrc: img4,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX ',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ' 
  },    
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX ',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'  
  },  
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy ',
    grade: 'CULTURAL RELAX ',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food! '  
  },
        
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX ',
    fees: '$790',
    description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'  
  },    
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX ',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities' 
  },    
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX ',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.' 
  },
];

export const Main: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  return (
    <MainSection id='main' className='main section container'>
      <TitleSection className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </TitleSection>

      <ContentSection className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <SingleDestination key={id} data-aos="fade-up" className="singleDestination">
            <ImageDiv className="imageDiv">
              <img src={imgSrc} alt="" />
            </ImageDiv>

            <CardInfo className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
               <span className="continent flex">
                  <HiOutlineLocationMarker />
               <span className="name">{location}</span>
              </span>

              <Fees className="fees flex">
                <Grade className="grade">
                  <span>
                    {grade}
                    <small>+1 </small>
                  </span>
                </Grade>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </Fees>

              <DescriptionSection className="desc">
                <p>{description}</p>
              </DescriptionSection>

              <ButtonDetails className='btn flex'>DETAILS <HiClipboardList /> </ButtonDetails>
            </CardInfo>
          </SingleDestination>
        ))}
      </ContentSection>
    </MainSection>
  );
};



