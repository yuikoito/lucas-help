import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100vw;

  @media (max-width: 1024px) {
  }
`;
export { SectionContainer };

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px) {
  }
`;
export { DivContainer };

const HeaderContent = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1024px) {
  }
`;
export { HeaderContent };

const TitleContent = styled.p`
  margin: 2rem 0 2rem;
  text-transform: uppercase;
`;
export { TitleContent };

const SubtitleContent = styled.h2`
  margin-top: unset;
  margin-bottom: 2rem`;

export { SubtitleContent };

const BodyContent = styled.div`
  > div{
    display: flex;
    margin-bottom: 2rem;
    gap: 20%;
    //border: 1px solid black
  }
  > div > div > div:not(:last-child) span{
    position: absolute;
    z-index: -1;
    background-color: #b4b8bf;
    height: 80px;
    width: 2px;
    left: 15px;
    top: 22px;
  }
  @media (max-width: 1024px) {
  > div{
    flex-direction: column;
    gap: unset;
  }

  > div > div > div:not(:last-child) span{
    position: absolute;
    height: 2px;
    width: 74px;
    background-color: #b4b8bf;
    top: 18px;
    left: 30px;
  }
  }
`;

export { BodyContent };

const ListBenefits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 16rem;

  @media (max-width: 1024px){
   margin-bottom: 2rem;
   flex-direction: row;
   min-height: unset;
  }
`;
export { ListBenefits };

const LineContent = styled.div`
  display: flex;
  gap: 1rem;
`
export {LineContent}

const ButtonDot = styled.div`
  position: relative;
  display: flex;
`;
export { ButtonDot };

const SquareContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b4b8bf;
  border-radius: 10px;
  padding: 48px;
  min-height: 18rem;
  width: 50%;

  @media (max-width: 1024px){
    width: 80%;
    height: 25rem;
    margin: 1rem auto;

  }
`
export {SquareContent}

const BenefitsButton = styled.button`
    margin: 2rem 0;
    font-family: Moderat,sans-serif;
    background-color: #195ab4;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    padding: 10px;
    line-height: 16px;
    cursor: pointer;
    border: none;
    border-color: transparent;
    border-style: solid;
    border-radius: 4px;
    outline: none;
    align-items: center;
    justify-content: center;
    transition-property: all;
    transition-duration: .15s;
`
export {BenefitsButton};
 
    