import React from "react";
import styled from "styled-components";

const StyledHomeIconDiv = styled.div`
  display: flex;
`;

const StyledDiscordIconDiv = styled.div`
  position: relative;
  left: 0.5rem;
`;

const DiscordIcon = () => (
  <StyledDiscordIconDiv>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="13" fill="#5865F2" />
      <path
        d="M32.9994 15.5697C31.3058 14.7773 29.4949 14.2014 27.6017 13.8735C27.3692 14.2939 27.0976 14.8593 26.9103 15.3091C24.8978 15.0064 22.9037 15.0064 20.9282 15.3091C20.741 14.8593 20.4631 14.2939 20.2286 13.8735C18.3333 14.2014 16.5204 14.7794 14.8268 15.5739C11.4108 20.7359 10.4848 25.7697 10.9478 30.732C13.2134 32.424 15.4091 33.4517 17.5678 34.1243C18.1008 33.3908 18.5761 32.611 18.9856 31.7892C18.2057 31.4929 17.4587 31.1271 16.7529 30.7026C16.9402 30.5639 17.1233 30.4188 17.3003 30.2696C21.6052 32.2831 26.2827 32.2831 30.5362 30.2696C30.7152 30.4188 30.8984 30.5639 31.0836 30.7026C30.3757 31.1292 29.6266 31.495 28.8467 31.7913C29.2562 32.611 29.7295 33.3929 30.2646 34.1264C32.4253 33.4538 34.623 32.4261 36.8887 30.732C37.432 24.9794 35.9606 19.9919 32.9994 15.5697ZM19.5721 27.6802C18.2798 27.6802 17.22 26.4738 17.22 25.0046C17.22 23.5355 18.2572 22.3269 19.5721 22.3269C20.8871 22.3269 21.9468 23.5334 21.9242 25.0046C21.9263 26.4738 20.8871 27.6802 19.5721 27.6802ZM28.2644 27.6802C26.972 27.6802 25.9123 26.4738 25.9123 25.0046C25.9123 23.5355 26.9494 22.3269 28.2644 22.3269C29.5793 22.3269 30.6391 23.5334 30.6164 25.0046C30.6164 26.4738 29.5793 27.6802 28.2644 27.6802Z"
        fill="white"
      />
    </svg>
  </StyledDiscordIconDiv>
);

const StyledSelected = styled.div`
  position: relative;
  width: 0.25rem;
  height: 48px;
  background: #ffffff;
  border-radius: 0px 2px 2px 0px;
`;

function HomeIcon() {
  return (
    <StyledHomeIconDiv>
      <StyledSelected />
      <DiscordIcon />
    </StyledHomeIconDiv>
  );
}

export default HomeIcon;
