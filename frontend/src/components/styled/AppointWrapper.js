import styled from 'styled-components'

export default styled.div`
  border-bottom: 1px dashed rgb(230, 230, 230);

  > .author {
    display: flex;
    align-items: center;
    > img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 5px;
    }

    > .name {
      color: rgb(142, 142, 142);
    }

    > .date {
      color: rgb(175, 175, 175);
      margin-left: 5px;
    }
  }
`
