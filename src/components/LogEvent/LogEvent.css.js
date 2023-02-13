import styled from "styled-components";

export const Body = styled.body`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #0e68d6;
`;
export const Container = styled.section`
  position: relative;
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 15px 20px#000000;
`;
export const ContainerHeader = styled.header`
  
  border-radius: 8px;
  text-align: center;
  align-items: center;
  background: #0E68D6;
 
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)
  
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const LabelHeader = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;
  text-shadow: 0px 2px 5px #000000;
  color: #ffff;
  &: hover {
    text-decoration: underline;
  } ;
`;

export const ContainerImage = styled.img`
  max-width: 9%;
  width: 120px;
  margin-right: 10px;
`;

export const Form = styled.form`
  margin-top: 30px;
`;
export const InputBox = styled.div`
  width: 100%;
  margin-top: 5px;
`;
export const InputBoxLabel = styled.label`
  color: #333;
`;
export const InputBoxInput = styled.input`
  position: relative;
  height: 42px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 8px;
  &: focus {
    box-shadow: 0 1px 0 ##0000001a;
  }
`;
export const FormColumn = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const FormGenderBox = styled.div`
  margin-top: 20px;
`;
export const GenderBoxH3 = styled.h3`
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
`;
export const GenderOption = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;
export const Gender = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  flex-wrap: wrap;
  column-gap: 5px;
`;
export const GenderInput = styled.input`
  accent-color: #0e68d6;
  cursor: pointer;
`;
export const GenderLabel = styled.label`
  cursor: pointer;
  color: #707070;
`;

export const SelectBox = styled.select`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #707070;
  font-size: 1rem;
`;
export const SelectContainer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
`;

export const Button = styled.button`
  height: 50px;
  width: 30%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 30px;
  border: 1px solid #b5b5b5;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #0e68d6;
  &: hover {
    background: #0b5bbd;
  } ;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
export const TextSelect = styled.p`
  padding-top: 7px;
  height: 15%;
`;
export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`;
