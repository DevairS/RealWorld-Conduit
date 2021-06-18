import styled from 'styled-components';

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 200px;
`;

export const TextMain = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 2rem;
`;

export const TextSecondary = styled.p`
  color: #fff;
  margin: 0;
  font-size: 1.6rem;
`;

export const WrapperMain = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

export const WrapperGlobalFeed = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 30px;
`;
export const TextPreview = styled.p`
  font-size: 1.3rem;
`;
export const WrapperTags = styled.div`
  display: flex;
  width: 25%;
  background-color: #e4e8ec;
  height: 200px;
  flex-flow: row wrap;
  margin-right: 3%;
`;

export const ButtonTags = styled.button`
  border: 1px solid grey;
  border-radius: 12px;
  background-color: grey;
  color: #fff;
  margin: 4px;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
`;
