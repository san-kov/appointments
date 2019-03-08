import styled from 'styled-components'

export default styled.div`
  margin: 10px;

  > form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    height: 25px;
    margin-bottom: 20px;
    font-family: 'Fira Sans';
    padding: 5px;
    border: 1px solid rgb(230, 230, 230);
  }
`
