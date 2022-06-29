/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";
import { Link } from "react-router-dom";

interface Props {
  post: PostInterface;
}

export const PostItem = ({ post: { id, title, tags, reactions } }: Props) => (
  <Link
    css={css`
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
      color: black;
      cursor: default;
    `}
    to={`/post/${id}`}
  >
    <div
      css={css`
        max-width: 800px;
        background: #ecd8b2;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 10px #707070;
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 10px;
        `}
      >
        <p
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            background: #202020;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            color: white;
            cursor: default;
            font-family: Arial, Helvetica, sans-serif;
          `}
        >
          {reactions}
        </p>
      </div>
      <div>
        <div
          css={css`
            width: 200px;
            height: 20px;
            font-size: 12px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: Arial, Helvetica, sans-serif;
          `}
        >
          <div
            css={css`
              margin-bottom: 10px;
              background: white;
              cursor: text;
              border-radius: 5px;
            `}
          >
            {tags.map((tag, index) => (
              <b
                key={index}
                css={css`
                  padding: 5px;
                  margin-right: 15px;
                  margin-bottom: 15px;
                `}
              >
                {tag}
              </b>
            ))}
          </div>
        </div>
      </div>
      <div
        css={css`
          background: white;
          border-radius: 5px;
          padding-left: 15px;
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
        `}
      >
        <p
          css={css`
            cursor: text;
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            color: black;
          `}
        >
          {title}
        </p>
      </div>
    </div>
  </Link>
);
