/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}

export const PostItem = ({ post: { id, body, tags, reactions } }: Props) => (
  <div
    css={css`
      max-width: 800px;
      background: #d3bf9a;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
    `}
  >
    <div
      css={css`
        width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        cursor: pointer;
      `}
    >
      <h3
        css={css`
          width: 200px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {tags}
      </h3>
      <p
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background: #202020;
          width: 20px;
          border-radius: 50%;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {reactions}
      </p>
    </div>
    <div
      css={css`
        background: #dbdbdb;
        border-radius: 10px;
        padding-left: 15px;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {body}
      </p>
    </div>
  </div>
);
