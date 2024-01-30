import styled from 'styled-components';


export const FooterSection = styled.section`
  --PrimaryColor: hsl(199, 100%, 33%);
  --SecondaryColor: hsl(187, 85%, 43%);
  --bodyColor: rgb(240, 240, 246);
  --whiteColor: hsl(0, 0%, 100%);
  --blackColor: hsl(201, 33%, 16%);
  --textColor: hsl(240, 4%, 36%);
  --greyText: rgb(190, 190, 190);

  width: 100%;
  position: relative;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const VideoDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Video = styled.video`
  height: 100%;
  object-fit: cover;
`;

export const VideoOverlay = styled.div`
  content: '';
  position: absolute;
  background: rgba(10, 84, 107, 0.307);
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  mix-blend-mode: multiply;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: max-content;
  padding: 2rem initial;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  row-gap: 2rem;
  z-index: 100;
`;

export const ContactDiv = styled.div`
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.div`
  small {
    font-size: 13px;
    font-weight: 400;
    color: var(--whiteColor);
  }

  h2 {
    color: var(--whiteColor);
    font-size: 1.8rem;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  gap: 1rem;
  flex-direction: column;

  input {
    width: 100%;
    padding: 0.5rem 0.6rem;
    border-radius: 3rem;
    border: 1px solid var(--whiteColor);
    outline: none;
    background: transparent;
    color: var(--whiteColor);

    &::-moz-placeholder {
      color: var(--whiteColor);
      opacity: 0.5;
    }

    &:-ms-input-placeholder {
      color: var(--whiteColor);
      opacity: 0.5;
    }

    &::placeholder {
      color: var(--whiteColor);
      opacity: 0.5;
    }
  }

  .btn {
    width: 100%;
    justify-content: center;
    color: var(--whiteColor);
    font-weight: 500;
    gap: 0.5rem;
  }

  .btn .icon {
    font-size: 18px;
  }
`;

export const FooterCard = styled.div`
  position: relative;
  padding: 1rem 1rem 4rem 1rem;
  gap: 2rem;
  border-radius: 1rem;
  background: var(--bodyColor);
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  display: flex;
`;

export const FooterIntro = styled.div`
  flex-basis: 50%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const LogoDiv = styled.div`
  a {
    color: var(--blackColor);
    font-weight: 600;
  }

  a .icon {
    font-size: 25px;
    color: var(--PrimaryColor);
    transform: translateY(5px);
  }
`;

export const FooterParagraph = styled.div`
  font-size: 13px;
  color: var(--textColor);
`;

export const FooterSocials = styled.div`
  display: flex;
  column-gap: 0.5rem;

  .icon {
    color: var(--blackColor);
    font-size: 20px;

    &:hover {
      color: var(--PrimaryColor);
    }
  }
`;

export const FooterLinks = styled.div`
  flex-basis: 50%;
  width: 100%;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  .linkGroup .groupTitle {
    display: block;
    font-weight: 600;
    color: var(--blackColor);
    margin-bottom: 0.5rem;
  }

  .linkGroup .footerList {
    font-size: 15px;
    color: var(--textColor);
    transition: 0.3s ease-in-out;

    .icon {
      font-size: 15px;
      color: var(--greyText);
    }

    &:hover {
      color: var(--PrimaryColor);
      transform: translateX(7px);
    }

    &:hover .icon {
      color: var(--SecondaryColor);
    }
  }
`;

export const FooterDiv = styled.div`
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--SecondaryColor);
  padding: 0.5rem 2rem;

  small {
    font-size: 10px;
    color: var(--whiteColor);
  }
`;
export const IconWrapper = styled.div`
  &.icon {
    font-size: 18px; 
  }
`;
