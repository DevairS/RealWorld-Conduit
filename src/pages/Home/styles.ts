import styled from 'styled-components';

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 200px;
`;

export const TextMain = styled.h2`
  color: ${(props) => props.theme.colors.textReverse};
  margin: 0;
  font-size: 2rem;
`;

export const TextSecondary = styled.p`
  color: ${(props) => props.theme.colors.textReverse};
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
  margin-bottom: 30px;
`;

export const Select = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin-right: 15px;
  border: none;
  font-size: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.textHover};
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
  height: 150px;
  border-radius: 16px;
`;

export const Title = styled.p`
  font-size: 1rem;
`;
export const WrapperTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
`;

export const ButtonTags = styled.button`
  border: none;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.text};
  padding: 1px;
  margin: 1px;

  &:hover {
    opacity: 0.7;
  }
`;
