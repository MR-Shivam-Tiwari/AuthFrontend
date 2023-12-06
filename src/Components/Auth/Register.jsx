import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Input, Option, Stack } from "@mui/joy";
import Select, { selectClasses } from "@mui/joy/Select";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Register() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.goBack();
  };
  return (
    <div className="container p-4">
      <div>
        <Button variant="outlined" color="neutral" onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M13.1575 2.36708C13.0656 2.27493 12.9564 2.20181 12.8362 2.15192C12.7159 2.10203 12.587 2.07635 12.4569 2.07635C12.3267 2.07635 12.1978 2.10203 12.0776 2.15192C11.9574 2.20181 11.8482 2.27493 11.7563 2.36708L5.1775 8.94583C5.10411 9.01907 5.04589 9.10607 5.00616 9.20184C4.96643 9.29761 4.94598 9.40027 4.94598 9.50396C4.94598 9.60764 4.96643 9.71031 5.00616 9.80608C5.04589 9.90185 5.10411 9.98884 5.1775 10.0621L11.7563 16.6408C12.1442 17.0287 12.7696 17.0287 13.1575 16.6408C13.5454 16.2529 13.5454 15.6275 13.1575 15.2396L7.42584 9.5L13.1654 3.76042C13.5454 3.38042 13.5454 2.74708 13.1575 2.36708Z"
              fill="#1E232C"
              stroke="#1E232C"
              strokeWidth="0.2"
            />
          </svg>
        </Button>
      </div>
      <div
        className="fw-bold mt-2 mb-3"
        style={{
          position: "relative",
          fontSize: "30px",
          fontStyle: "normal",
          lineHeight: "-0.3px",
        }}
      >
        <span
          style={{
            background:
              "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Hello! Register to get started
        </span>
      </div>

      <div className="">
        <Input size="lg" placeholder="Name" className="mb-3" />
        <Input size="lg" placeholder="Email Id" className="mb-3" />
        <Input size="lg" placeholder="Contact" className="mb-3" />
        <Input size="lg" placeholder="Password" className="mb-3" />
        <Input size="lg" placeholder="Confirm Password" className="mb-3" />
        <Select
          placeholder="Select a pet…"
          fullWidth
          className="mb-4"
          IconComponent={KeyboardArrowDown} // Use IconComponent to specify the custom indicator
          sx={{
            width: "100%",
            "& .MuiSelect-icon": {
              display: "none", // Hide the default icon
            },
            "& .MuiSelect-root": {
              paddingLeft: 0, // Remove left padding to align custom indicator properly
            },
            [`& .MuiSelect-iconOutlined`]: {
              transition: "0.2s",
              transform: "rotate(0deg)",
              [`&.MuiSelect-iconOpen`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
      </div>
      <div className="mb-2">
        <Button
          style={{
            position: "relative",
            fontStyle: "normal",
            lineHeight: "-0.3px",
            background:
              "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
          }}
          fullWidth
        >
          <div
            style={{
              color: "white",
              WebkitBackgroundClip: "text",
              display: "inline-block",
            }}
          >
            Register
          </div>
        </Button>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <hr className="col"></hr>
        <div className="col text-center" style={{ fontSize: "14px" }}>
          Or Register with
        </div>
        <hr className="col"></hr>
      </div>
      <div className="d-flex align-items-center  justify-content-between">
        <Button
          variant="outlined"
          color="neutral"
          style={{ width: "105px", height: "56px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M14.7956 25.0001V14.0703H18.3496L18.8779 9.791H14.7956V7.06523C14.7956 5.83037 15.1272 4.98491 16.8355 4.98491H19V1.16964C17.9468 1.05254 16.8882 0.996004 15.829 1.00028C12.6877 1.00028 10.5308 2.98993 10.5308 6.6425V9.783H7V14.0623H10.5386V25.0001H14.7956Z"
              fill="#4092FF"
            />
          </svg>
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          style={{ width: "105px", height: "56px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M6.42014 15.4656L5.59739 18.537L2.59026 18.6006C1.69158 16.9338 1.18182 15.0267 1.18182 13C1.18182 11.0403 1.65843 9.19223 2.50324 7.56496H2.50389L5.18108 8.05579L6.35385 10.7169C6.10839 11.4325 5.9746 12.2007 5.9746 13C5.9747 13.8676 6.13184 14.6988 6.42014 15.4656Z"
              fill="#FBBB00"
            />
            <path
              d="M24.6117 10.7922C24.7474 11.5071 24.8182 12.2454 24.8182 13C24.8182 13.8461 24.7292 14.6714 24.5598 15.4675C23.9845 18.1766 22.4812 20.5422 20.3987 22.2162L20.3981 22.2155L17.026 22.0435L16.5488 19.0642C17.9306 18.2539 19.0105 16.9857 19.5793 15.4675H13.2598V10.7922H19.6715H24.6117Z"
              fill="#518EF8"
            />
            <path
              d="M20.3981 22.2156L20.3987 22.2163C18.3734 23.8442 15.8006 24.8182 13 24.8182C8.49936 24.8182 4.58639 22.3026 2.59027 18.6007L6.42015 15.4656C7.41818 18.1292 9.98767 20.0254 13 20.0254C14.2948 20.0254 15.5078 19.6754 16.5487 19.0643L20.3981 22.2156Z"
              fill="#28B446"
            />
            <path
              d="M20.5436 3.90259L16.715 7.03699C15.6377 6.36363 14.3643 5.97464 13.0001 5.97464C9.91953 5.97464 7.30199 7.95775 6.35395 10.7169L2.50394 7.56493H2.5033C4.47019 3.77272 8.43252 1.18182 13.0001 1.18182C15.8676 1.18182 18.4968 2.20326 20.5436 3.90259Z"
              fill="#F14336"
            />
          </svg>
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          style={{ width: "105px", height: "56px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            className=""
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <g clip-path="url(#clip0_5_586)">
              <path
                d="M7.66835 25.5133C7.15573 25.1723 6.70141 24.7509 6.32285 24.2653C5.90643 23.7641 5.52061 23.2383 5.16747 22.6907C4.33879 21.4767 3.68891 20.1498 3.23779 18.7509C2.69585 17.1259 2.43341 15.5683 2.43341 14.0449C2.43341 12.3435 2.80147 10.8583 3.52135 9.61025C4.05498 8.6348 4.83956 7.81964 5.79391 7.24913C6.71879 6.67467 7.78148 6.36029 8.87003 6.33913C9.2511 6.33913 9.66141 6.39438 10.0969 6.5C10.4097 6.58856 10.7908 6.72831 11.2563 6.90219C11.8487 7.1305 12.1745 7.27025 12.285 7.30438C12.6319 7.43113 12.9236 7.48638 13.1527 7.48638C13.3266 7.48638 13.572 7.43113 13.8507 7.34663C14.0075 7.29138 14.3032 7.19388 14.7265 7.01269C15.1458 6.85994 15.4757 6.72913 15.7381 6.63163C16.1403 6.513 16.5295 6.40331 16.8764 6.34806C17.2877 6.28322 17.7051 6.26605 18.1203 6.29688C18.8399 6.34391 19.5487 6.49639 20.2239 6.74944C21.3281 7.19388 22.221 7.88775 22.8857 8.87413C22.6047 9.04727 22.3411 9.24697 22.0983 9.4705C21.5699 9.93897 21.1198 10.4889 20.765 11.0996C20.3013 11.9341 20.0609 12.8741 20.0671 13.8288C20.0842 15.0012 20.3848 16.0339 20.9771 16.9268C21.4126 17.5886 21.9785 18.1545 22.6403 18.59C22.9791 18.8183 23.2708 18.9751 23.5503 19.0808C23.4195 19.487 23.2797 19.8803 23.1148 20.2703C22.7407 21.1448 22.2873 21.9833 21.7603 22.7752C21.2907 23.4569 20.9227 23.9647 20.6432 24.3027C20.2077 24.8186 19.7884 25.2127 19.3651 25.4873C18.8995 25.7961 18.3495 25.961 17.7905 25.961C17.4119 25.9755 17.0334 25.9297 16.6692 25.8253C16.3564 25.7197 16.0468 25.6051 15.7422 25.4743C15.4254 25.3288 15.0988 25.2058 14.7647 25.1063C13.939 24.8942 13.0732 24.8928 12.2468 25.1022C11.908 25.1997 11.5822 25.3134 11.2604 25.4532C10.8078 25.6433 10.5072 25.7709 10.3333 25.8253C9.98641 25.9269 9.62647 25.9903 9.26247 26.0114C8.69941 26.0114 8.17453 25.8505 7.65453 25.5247L7.66835 25.5133ZM15.0946 5.51363C14.3585 5.88169 13.6557 6.0385 12.9577 5.98731C12.848 5.2845 12.9577 4.56544 13.2494 3.77813C13.4977 3.11112 13.8647 2.49453 14.3325 1.95813C14.8265 1.39346 15.4259 0.93062 16.0972 0.595564C16.8122 0.227502 17.4939 0.0284394 18.1455 -0.000810623C18.23 0.735314 18.1455 1.45925 17.875 2.24169C17.6246 2.93336 17.2583 3.57738 16.7919 4.14619C16.3158 4.71163 15.7316 5.17627 15.0735 5.51281L15.0946 5.51363Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_586">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="text-center my-2">
          Already have an account?{" "}
          <span style={{ color: "#35C2C1", fontWeight: "700" }}>Login Now</span>{" "}
        </div>
      </Link>
    </div>
  );
}

export default Register;
