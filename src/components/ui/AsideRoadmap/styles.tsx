import styled from "styled-components";

export const AsideRoadmapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .roadmap-header {
    margin-bottom: 2.4rem;

    h2 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: -0.25px;
      color: #3a4374;
    }

    a {
      font-weight: 600;
      font-size: 1.3rem;
      line-height: 1.9rem;
      text-decoration-line: underline;
      color: #4661e6;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    gap: 0.8rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;

      div {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        p {
          font-weight: 400;
          color: #647196;
        }
      }

      span {
        font-weight: 700;
        color: #647196;
      }
    }

    .planned {
      background: #f49f85;
    }
    .in-progress {
      background: #ad1fea;
    }
    .live {
      background: #62bcfa;
    }
  }
`;
