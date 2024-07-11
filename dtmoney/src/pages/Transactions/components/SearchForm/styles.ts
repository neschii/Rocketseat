import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 0px solid ${(props) => props.theme["purple-300"]};
    color: ${(props) => props.theme["purple-300"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme["purple-700"]};
      border-color: 0px solid ${(props) => props.theme["purple-700"]};
      color: ${(props) => props.theme["white"]};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`;