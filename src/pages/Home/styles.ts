import styled from 'styled-components';

interface ButtonProps {
  actived: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 20vh;
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
  @media (max-width: 375px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  @media (max-width: 375px) {
    margin-top: 40px;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  width: 20%;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0% 2%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const WrapperSelect = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 375px) {
    margin-bottom: 15px;
  }
`;

export const Select = styled.button<ButtonProps>`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 0px 10px;
  white-space: pre;
  font-size: 1.4rem;
  text-decoration: ${(props) => (props.actived ? 'underline' : 'none')};
  text-decoration-color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const Select2 = styled.button<ButtonProps>`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 0px 10px;
  white-space: pre;
  font-size: 1.4rem;
  text-decoration: ${(props) => (props.actived ? 'none' : 'underline')};
  text-decoration-color: ${(props) => props.theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-right: 5%;
  height: 120px;
  border-radius: 5px;
  margin-top: 45px;
  @media (max-width: 960px) {
    display: none;
  }
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
  border-radius: 10px;
  background-color: #c2c2c2;
  color: ${(props) => props.theme.colors.textWhite};
  padding: 4px;
  margin: 1px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const WrapperLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72vh;
`;
