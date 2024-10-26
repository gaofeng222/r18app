import styled from "styled-components";

export const TaskOkContainer = styled.div`
  width: 960px;
  margin: 20px auto;
`;

export const TaskOkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TagBtnLists = styled.div`
  margin-bottom: 20px;
  .ant-space-item {
    .ant-tag {
      border-radius: 0;
      cursor: pointer;
    }
  }
`;
