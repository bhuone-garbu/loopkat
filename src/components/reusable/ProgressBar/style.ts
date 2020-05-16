import styled, { css } from 'styled-components';

interface WrapperProps {
  maxWidth: string;
}

export const ProgressWrapper = styled.div<WrapperProps>(
  p => css`
    width: 100%;
    max-width: ${p.maxWidth};
    padding: 0.5rem;
    margin: 0 auto;
    background-color: ${p.theme.colors.greyLighter};
    border: ${p.theme.fields.borderSize} solid ${p.theme.colors.blue};
    border-radius: ${p.theme.fields.borderRadius};
  `,
);

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBarWrapper = styled.div<ProgressBarProps>(
  p => css`
    width: ${p.percentage}%;
    min-height: 1rem;
    background-color: ${p.theme.colors.primary};
    border-radius: calc(${p.theme.fields.borderRadius} / 2);
  `,
);
