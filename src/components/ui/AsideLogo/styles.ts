import bgHeader from "../../../assets/suggestions/desktop/background-header.png";
import styled from "styled-components";

export const AsideLogoWrapper = styled.div`
  width: 100%;
  height: 13.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.4rem;
  background-image: url(${bgHeader});
  background-position: center center;
  background-size: cover;
  border-radius: var(--rounded-2xl);

  h1 {
    font-weight: var(--font-bold);
    font-size: var(--text-xl);
    color: var(--white);
    letter-spacing: -0.25px;
    line-height: 2.9rem;
  }

  p {
    font-weight: var(--font-medium);
    font-size: var(--text-sm);
    line-height: 2.2rem;
    color: var(--white);
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;
