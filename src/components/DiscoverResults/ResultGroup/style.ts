import styled from 'styled-components';

export const CONTAINER_MAX_WIDTH = '65rem';

export const Wrapper = styled.section`
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH};
  padding-top: 3rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  gap: 1rem;
`;

export const Result = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  border: ${p => p.theme.fields.borderSize} solid
    ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
`;

export const LeftPushed = styled.div`
  margin-right: auto;
  cursor: pointer;
`;

export const RightPushed = styled(LeftPushed)`
  margin-right: 0;
  margin-left: auto;
`;
