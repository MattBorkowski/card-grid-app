import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px 10px 0px 0px;
`;

export const DescriptionText = styled.p`
  flex-grow: 1;
  padding-bottom: 8px
  color: #5E6668;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 10px;
  box-shadow: 2px 2px 15px gray;
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  justify-items: center;
  margin: 0px 16px;
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #252B31;
`;

export const Button = styled.button`
  background: #83BD75;
  padding: 8px;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #4E944F;
    cursor: pointer;
  };
  &:active {
    background-color: #52734D;
    cursor: pointer;
  };
`;