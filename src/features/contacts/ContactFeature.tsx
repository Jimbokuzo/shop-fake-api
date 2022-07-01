/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

export const ContactFeature = () => (
  <div
    css={css`
      margin-top: 30px;
      display: flex;
      flex-direction: column;
    `}
  >
    <div>
      <p
        css={css`
          font-size: 48px;
          font-weight: bold;
          text-transform: uppercase;
        `}
      >
        Contacts
      </p>
    </div>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 400px;
          width: 400px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 300px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
            `}
          >
            <div
              css={css`
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: black;
                margin-right: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
              `}
            >
              <PhoneIcon />
            </div>
            <div>
              <p>096-503-90-46</p>
              <p>063-408-96-84</p>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
            `}
          >
            <div
              css={css`
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: black;
                margin-right: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
              `}
            >
              <AlternateEmailIcon />
            </div>
            <div>
              <p>yegorgrunsky@gmail.com</p>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
            `}
          >
            <div
              css={css`
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: black;
                margin-right: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
              `}
            >
              <LocationOnIcon />
            </div>
            <div>
              <p>sq. European, Dnipro, Ukraine</p>
            </div>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            display: flex;
            align-items: center;
          `}
        >
          <button
            css={css`
              width: 200px;
              height: 50px;
              background: #fa3838;
              border-radius: 10px;
              border: none;
              color: white;
              font-size: 20px;
              font-weight: bold;
              transition: 0.2s;

              :hover {
                font-size: 22px;
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
            Support
          </button>
        </div>
      </div>

      <div>
        <iframe
          css={css`
            width: 600px;
            height: 400px;
            border-radius: 5px;
            border: none;
          `}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.519383384463!2d35.04533066566059!3d48.46575042925096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e7f06af469%3A0xb40db2a0fee9aa0f!2z0JXQstGA0L7Qv9C10LnRgdC60LDRjyDQv9C70L7RidCw0LTRjCwg0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1656659296028!5m2!1sru!2sua"
        ></iframe>
      </div>
    </div>
  </div>
);
