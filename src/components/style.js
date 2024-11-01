import styled from "styled-components";

export const HomeHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
  .home-head-box__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time {
      width: 0.8rem;
      &-day {
        font-size: 0.48rem;
        font-weight: bold;
        padding: 0;
      }
      &-month {
        font-size: 0.22rem;
        padding: 0;
      }
      span {
        display: block;
        text-align: center;
        line-height: 0.5rem;
      }
    }
  }
`;
