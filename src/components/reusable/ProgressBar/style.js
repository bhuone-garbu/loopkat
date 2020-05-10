import styled from 'styled-components';

export const ProgressWrapper = styled.div`
  width: 100%;
  max-width: ${p => p.maxWidth};
  padding: 0.5rem;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.greyLighter};
  border: ${p => p.theme.fields.borderSize} solid ${p => p.theme.colors.blue};
  border-radius: calc(${p => p.theme.fields.borderRadius} * 1.5);
`;

export const ProgressBarWrapper = styled.div`
  width: ${p => p.percentage}%;
  min-height: 1.5rem;
  background-color: ${p => p.theme.colors.primary};
  border-radius: calc(${p => p.theme.fields.borderRadius});
`;
