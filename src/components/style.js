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

export const NewsItemBox = styled.div`
  position: relative;
  margin: 1rem 0;
  .content {
    margin-right: 1.8rem;
    .title {
      margin: 0.2rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .extra {
      color: #999;
    }
  }
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
