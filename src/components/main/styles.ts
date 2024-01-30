import styled from 'styled-components';

export const MainSection = styled.section`
  width: 100%;
`;

export const TitleSection = styled.div`
  h3 {
    position: relative;
    width: max-content;
    color: var(--textColor);
    margin: 1rem 0;

    &::after {
      position: absolute;
      content: '';
      background: var(--SecondaryColor);
      height: 5px;
      width: 120px;
      right: 0;
      bottom: 5px;
      z-index: -1;
    }
  }
`;

export const ContentSection = styled.div`
  justify-content: center;
  gap: 1.5rem;

  .singleDestination {
    height: 100%;
    display: grid;
    row-gap: 10px;
    border-radius: 10px;
    align-items: center;
    background: var(--cardBG);
    box-shadow: 0 2px 4px rgba(140, 140, 141, 0.549);
    overflow: hidden;
    transition: 0.3s ease;

    &:hover {
      background: var(--cardHover);
      box-shadow: 1px 4px 4px rgba(85, 85, 114, 0.549);
      transition: 0.3s ease;
    }

    .imageDiv {
      height: 180px;
      width: 100%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 2s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    .cardInfo {
      padding: 1rem;

      h4 {
        color: var(--blackColor);
        font-size: 1.25rem;
      }

      .continent {
        gap: 0.5rem;

        .icon {
          color: var(--textColor);
          font-size: 18px;
        }

        span {
          color: var(--textColor);
          font-weight: 400;
          font-size: 14px;
        }
      }

      .fees {
        width: 100%;
        justify-content: space-between;
        padding: 1rem;
        margin: 1rem 0;
        border-top: 1.5px solid var(--greyText);
        border-bottom: 1.5px solid var(--greyText);

        .grade {
          color: var(--textColor);
          max-width: 100px;
          line-height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          small {
            text-align: center;
            background: var(--gradientColor);
            border-radius: 1rem;
            color: var(--whiteColor);
            padding: 1px 10px;
            font-size: 10px;
          }
        }

        .price {
          font-size: 2rem;
          color: var(--blackColor);
        }
      }

      .desc {
        font-size: 13.5px;
        color: var(--textColor);
        font-weight: 500;
      }

      .btn {
        margin-top: 1rem;
        color: var(--whiteColor);
        font-weight: 600;
        justify-content: space-between;
        gap: 0.5rem;

        .icon {
          align-self: center;
          font-size: 18px;
        }
      }
    }
  }
`;

export const SingleDestination = styled.div`
  height: 100%;
  display: grid;
  row-gap: 10px;
  border-radius: 10px;
  align-items: center;
  background: var(--cardBG);
  box-shadow: 0 2px 4px rgba(140, 140, 141, 0.549);
  overflow: hidden;
  transition: 0.3s ease;

  &:hover {
    background: var(--cardHover);
    box-shadow: 1px 4px 4px rgba(85, 85, 114, 0.549);
    transition: 0.3s ease;
  }
`;

export const ImageDiv = styled.div`
  height: 180px;
  width: 100%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 2s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const StyledLocationMarker = styled`
  font-size: 20px;
  cursor: pointer;
`;

export const StyledClipboardList = styled`
  font-size: 20px;
  cursor: pointer;
`;
export const CardInfo = styled.div`
  padding: 1rem;
`;

export const Fees = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0;
  border-top: 1.5px solid var(--greyText);
  border-bottom: 1.5px solid var(--greyText);
`;

export const Grade = styled.div`
  color: var(--textColor);
  max-width: 100px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionSection = styled.div`
  font-size: 13.5px;
  color: var(--textColor);
  font-weight: 500;
`;

export const ButtonDetails = styled.button`
  
  margin-top: 1rem;
  color: var(--whiteColor);
  font-weight: 600;
  justify-content: space-between;
  gap: 0.5rem;

  .icon {
   align-self: center;
   font-size: 18px;
  }
`;