import styled from 'styled-components';

interface ButtonProps {
  actived: boolean;
}

export const WrapperUser = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundHover};
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const NameUser = styled.h3`
  font-weight: bold;
  margin: 0px;
  font-size: 1.4rem;
`;

export const BioUser = styled.p`
  font-size: 1.1rem;
  margin: 0px;
`;

export const WrapperEdit = styled.div`
  display: flex;
  width: 60%;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2px;
  font-size: 0.8rem;
  opacity: 1;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperArticlesCenter = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

export const WrapperSelect = styled.div`
  display: flex;
  margin-bottom: 20px;
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

export const WrapperCard = styled.div``;
