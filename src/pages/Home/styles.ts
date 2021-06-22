import styled from 'styled-components';

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 150px;
`;

export const TextMain = styled.h2`
  color: ${(props) => props.theme.colors.textWhite};
  margin: 0;
  font-size: 2rem;
`;

export const TextSecondary = styled.p`
  color: ${(props) => props.theme.colors.textWhite};
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
  width: 20%;
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
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secundary};
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textWhite};
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-right: 5%;
  height: 120px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundHover};
`;

export const Title = styled.p`
  font-size: 1rem;
`;
export const WrapperTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  height: 100%;
`;

export const ButtonTags = styled.button`
  border: none;
  border: 1px solid ${(props) => props.theme.colors.textLight};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.textLight};
  color: ${(props) => props.theme.colors.textWhite};
  padding: 1px;
  margin: 1px;

  &:hover {
    opacity: 0.7;
  }
`;
