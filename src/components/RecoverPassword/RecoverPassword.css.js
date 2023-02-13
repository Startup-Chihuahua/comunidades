import styled from "styled-components";

export const Container = styled.div`
  background-color: #0e68d6;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 380px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px#000000;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  background-color: #0e68d6;
`;

export const Form = styled.form`
  padding: 10px 30px 50px 30px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 20px;
  color: #505050;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid #b5b5b5;
  border-radius: 12px;
  transition: all 0.3s ease;
  &:focus {
    border-color: #4158d0;
  }
`;
export const Field = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;

export const FieldButtom = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
`;

export const FormFieldLabel = styled.div`
  position: absolute;
  top: 0%;
  left: 20px;
  color: #505050;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  background-color: #ffff;
  transform: translateY(-50%);
  transition: all 0.3s ease;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  color: black;
  user-select: none;
  padding-left: 5px;
`;

export const Button = styled.input`
  color: #fff;
  border: none;
  padding-left: 0;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #0e68d6;
  transition: all 0.3s ease;
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 20px;
  border: 1px solid #b5b5b5;
  border-radius: 12px;
  &: hover {
    background: #0b5bbd;
  } ;
`;
export const Link1 = styled.div`
  color: black;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  color: black;
`;
export const Ref = styled.a`
  color: #4158d0;
  text-decoration: none;
  &: hover {
    text-decoration: underline;
  } ;
`;
