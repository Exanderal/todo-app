import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.color.primary} 0 50%,
    ${(props) => props.theme.color.secondary} 50% 100%
  );
`;
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.color.tertiary};
  color: white;
  min-width: 30vw;
  border-radius: 4px;
`;
