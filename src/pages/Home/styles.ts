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
  margin-top: 80px;
`;

export const WrapperLeft = styled.div`
  display: flex;
  width: 25%;
`;

export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0% 2%;
`;

export const WrapperSelect = styled.div`
  display: flex;
`;

export const Select = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #c3c3c3;
  margin-right: 15px;
  &:hover {
    color: #9b9b9b;
  }

  &:active {
    color: black;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-right: 5%;
  background-color: #f5f5f5;
  height: 250px;
  border-radius: 16px;
`;

export const WrapperTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 200px;
`;

export const ButtonTags = styled.button`
  border: 1px solid grey;
  border-radius: 12px;
  background-color: grey;
  color: #fff;
  margin: 4px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;
