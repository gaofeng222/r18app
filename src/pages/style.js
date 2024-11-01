import styled from "styled-components";

export const SwiperWrapperItem = styled.div`
  height: 6.5rem;
  &.swiper-box-item {
    position: relative;
    color: #fff;
    .desc {
      position: absolute;
      bottom: 0.3rem;
      left: 0.3rem;
      right: 0.3rem;
      .title {
        font-size: 0.36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .author {
        font-size: 0.24rem;
      }
    }
  }
`;

export const SwiperWrapper = styled.div`
  .adm-swiper-indicator {
    left: auto;
    right: 0.2rem;
  }
`;

export const LoadMoreContainer = styled.div`
  color: #999;
`;

export const NesListContainer = styled.div`
  padding: 0 0.3rem;
`;
