import React from 'react'
import styled from 'styled-components'

export const TopBorder = () => (
  <div
    style={{
      height: '4px',
      background: 'linear-gradient(0.25turn,#ff4c5d, #ff554c)'
    }}
  />
)

const HeaderWrapper = styled.div`
  display: flex;
  padding: 10px 5px 10px 5px;
  height: 30px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 230, 230);
  font-size: 14px;

  > nav {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;

    > li {
      height: 100%;
      padding: 0 4px 0 4px;
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px 0 4px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      > p {
        margin-left: 5px;
      }

      &:hover {
        color: rgb(105, 105, 105);
      }

      > img {
        height: 100%;
        border-radius: 50%;
        margin-right: 10px;
      }

      > .notification {
        position: relative;
      }
      .not-num {
        position: absolute;
        bottom: 0;
        left: -5px;
        background: #ff554c;
        color: white;
        border-radius: 50%;
        z-index: 999;
        width: 19px;
        height: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export default HeaderWrapper
