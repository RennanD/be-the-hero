import styled from 'styled-components';

import { Button } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 32px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }
    img {
      height: 64px;
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;

        &:hover {
          opacity: 0.8;
        }
      }
      p {
        color: #737380;
        line-height: 32px;

        & + strong {
          margin-top: 32px;
        }
      }
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }
    }
  }
`;

export const LogoutButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border 0.2s;

  &:hover {
    border: 1px solid #e02041;
  }
`;

export const AddButton = styled(Button)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
`;
