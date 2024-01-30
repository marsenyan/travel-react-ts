import styled from 'styled-components';

export const HomeSection = styled.section`
  --PrimaryColor: hsl(199, 100%, 33%);
  --SecondaryColor: hsl(187, 85%, 43%);
  --gradientColor: linear-gradient(to right, hsl(187, 85%, 43%), hsl(199, 100%, 33%));
  --whiteColor: hsl(0, 0%, 100%);
  --textColor: hsl(240, 4%, 36%);
  --whiteColorDeam: hsl(0, 0%, 93%);
  --greyText: rgb(190, 190, 190);
  --inputColor: rgb(239, 239, 239);

  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgb(47, 106, 127);
    mix-blend-mode: hard-light;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    object-fit: cover;
  }

  .homeContent {
    width: 100%;
    height: max-content;
    padding: 8rem 1.5rem 3rem;
    display: flex;
    row-gap: 3rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: auto;
    color: var(--whiteColor);
    z-index: 100;

    .textDiv {
      padding: 2rem 0;

      .smallText {
        font-size: 13px;
        text-transform: uppercase;
      }

      .homeTitle {
        position: relative;
        font-size: 1.8rem;
      }
    }

    .cardDiv {
      position: relative;
      padding: 2rem 1rem;
      background: var(--whiteColor);
      border-radius: 10px;
      gap: 1rem;

      label {
        display: block;
        color: var(--textColor);
        padding-bottom: 10px;
        font-size: 13px;
        font-weight: 500;
      }

      .label_total {
        justify-content: space-between;
        align-items: center;

        .total {
          color: var(--textColor);
          font-size: 18px;
          padding-bottom: 10px;
        }
      }

      .input {
        height: 40px;
        padding: 0 1rem;
        background: var(--inputColor);
        border-radius: 3rem;

        input {
          background: none;
          border: none;
          outline: none;
          width: 100%;
          font-size: 13px;
          font-weight: 500;

          &::placeholder {
            font-size: 13px;
          }
        }

        .icon {
          font-size: 18px;
          color: var(--PrimaryColor) !important;
          margin-left: 10px;
        }

        input[type='range'] {
          background: blue;
        }
      }

      .searchOptions {
        position: absolute;
        background: var(--gradientColor);
        width: max-content;
        bottom: -0.7rem;
        column-gap: 0.8rem;
        padding: 5px 1rem;
        border-radius: 3rem;
        left: 50%;
        transform: translate(-50%);
        justify-content: center;

        &:hover {
          background: var(--PrimaryColor);
        }

        .icon {
          font-size: 18px;
        }

        span {
          font-size: 13px;
        }
      }
    }

    .homeFooterIcons {
      width: 100%;
      justify-content: space-between;

      .icon {
        font-size: 20px;
        margin: 0 5px;
        color: var(--whiteColor);
        font-weight: 600;

        &:hover {
          color: var(--PrimaryColor);
        }
      }
    }
  }

  @media screen and (min-width: 500px) {
    .homeContent .textDiv .smallText {
      font-size: 16px;
    }

    .homeContent .textDiv .homeTitle {
      position: relative;
      font-size: 2.3rem;
      width: max-content;

      &::after {
        position: absolute;
        content: '';
        background: var(--SecondaryColor);
        height: 5px;
        width: 145px;
        right: 0px;
        bottom: 5px;
        z-index: -1;
      }
    }

    .homeContent .cardDiv {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 660px) {
    .homeContent .cardDiv {
      padding: 2rem 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 940px) {
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    height: 80vh;
    .homeContent {
      padding-left: 0;
      padding-right: 0;
    }
    .homeContent .cardDiv {
      padding: 2rem 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1240px) {
    height: 95vh;
    .homeContent {
      padding-left: 0;
      padding-right: 0;
    }
    .homeContent .cardDiv {
      padding: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
    .homeContent .cardDiv .input {
      margin-bottom: 1rem;
    }
    .homeContent .cardDiv .searchOptions {
      bottom: -1rem;
      padding: 8px 1rem;
    }
    .homeContent .cardDiv .searchOptions span {
      font-size: 17px;
    }
  }
`;

export const HomeContainer = styled.div`
  position: absolute;
    height: 100%;
    width: 100%;
    background: rgb(47, 106, 127);
    mix-blend-mode: hard-light;
    top: 0;
    bottom: 0;
    z-index: 1;
`;

export const VideoContent = styled.video`
  position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    object-fit: cover;
`;

export const HomeContent = styled.div`
  width: 100%;
    height: max-content;
    padding: 8rem 1.5rem 3rem;
    display: flex;
    row-gap: 3rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: auto;
    color: var(--whiteColor);
    z-index: 100;
`;

export const TextContent = styled.div`
  padding: 2rem 0;
`;

export const SmallText = styled.div`
  font-size: 13px;
  text-transform: uppercase;
`;

export const HomeTitle = styled.div`
  position: relative;
  font-size: 1.8rem;
`;

export const CardDiv = styled.div`
  position: relative;
      padding: 2rem 1rem;
      background: var(--whiteColor);
      border-radius: 10px;
      gap: 1rem;

      label {
        display: block;
        color: var(--textColor);
        padding-bottom: 10px;
        font-size: 13px;
        font-weight: 500;
      }

      .label_total {
        justify-content: space-between;
        align-items: center;

        .total {
          color: var(--textColor);
          font-size: 18px;
          padding-bottom: 10px;
        }
      }

      .input {
        height: 40px;
        padding: 0 1rem;
        background: var(--inputColor);
        border-radius: 3rem;

        input {
          background: none;
          border: none;
          outline: none;
          width: 100%;
          font-size: 13px;
          font-weight: 500;

          &::placeholder {
            font-size: 13px;
          }
        }

        .icon {
          font-size: 18px;
          color: var(--PrimaryColor) !important;
          margin-left: 10px;
        }

        input[type='range'] {
          background: blue;
        } 
  }

`;

export const DestinationInput = styled.div``;

export const DateInput = styled.div``;

export const PriceInput = styled.div``;

export const LabelTotal = styled.div``;

export const Input = styled.div``;

export const FilterContent = styled.div`
  position: absolute;
  background: var(--gradientColor);
  width: max-content;
  bottom: -0.7rem;
  column-gap: 0.8rem;
  padding: 5px 1rem;
  border-radius: 3rem;
  left: 50%;
  transform: translate(-50%);
  justify-content: center;

    &:hover {
      background: var(--PrimaryColor);
    }

    .icon {
      font-size: 18px;
    }

    span {
      font-size: 13px;
    }
`;

export const AosContent = styled.div`
  width: 100%;
  justify-content: space-between;

    .icon {
      font-size: 20px;
      margin: 0 5px;
      color: var(--whiteColor);
      font-weight: 600;

      &:hover {
        color: var(--PrimaryColor);
      }
    }
`;

export const RightIcons = styled.div`
  font-size: 20px;
  display: flex;
  gap: 6px;
`;

export const LeftIcons = styled.div`
    font-size: 20px;
    display: flex;
    gap: 6px;
`;
