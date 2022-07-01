/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataProduct } from "./hooks";
import { UpdataProductPopup } from "./components/UpdateProductPopup";

export const ProductFeature = () => {
  const { description, brand, category, price, rating, thumbnail, title } =
    useDataProduct();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
      `}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-weight: bold;
            text-transform: uppercase;
          `}
        >
          {title}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              display: flex;
              margin-right: 20px;
              align-items: center;
              justify-content: center;
              font-size: 22px;
              color: black;
              cursor: default;
            `}
          >
            {rating}
          </p>
          <UpdataProductPopup />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <div
          css={css`
            max-width: 500px;
            margin-right: 100px;
          `}
        >
          <img
            css={css`
              width: 100%;
            `}
            src={thumbnail}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 200px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <b
                css={css`
                  margin-right: 10px;
                `}
              >
                Brand:
              </b>
              <p>{brand}</p>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <b
                css={css`
                  margin-right: 10px;
                `}
              >
                Category:
              </b>
              <p>{category}</p>
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <b
                css={css`
                  margin-right: 10px;
                `}
              >
                Price:
              </b>
              <p>{price}$</p>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <b
                css={css`
                  margin-right: 10px;
                `}
              >
                Description:
              </b>
              <p>{description}</p>
            </div>
            <div
              css={css`
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
              `}
            >
              <button
                css={css`
                  width: 100px;
                  height: 30px;
                  color: white;
                  margin-right: 30px;
                  border: none;
                  border-radius: 5px;
                  background: #fa3838;
                  font-weight: bold;
                  text-transform: uppercase;
                  transition: 0.2s;
                  :hover {
                    font-size: 14px;
                    transition: 0.2s;
                    background: #ff2a2a;
                    box-shadow: 0 0 10px #fa3838;
                  }
                  :active {
                    font-size: 20px;
                    background: #e62929;
                    box-shadow: 0 0 10px #fa3838;
                  }
                `}
              >
                buy
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
