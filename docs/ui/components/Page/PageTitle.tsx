import { css } from '@emotion/react';
import { theme, spacing } from '@expo/styleguide';
import React, { ReactNode } from 'react';

import { H1, P } from '~/ui/components/Text';

type PageTitleProps = {
  title: string;
  description?: ReactNode;
};

export const PageTitle = ({ title, description }: PageTitleProps) => {
  const descriptionIsText = typeof description === 'string';
  const descriptionIsComponent = description && !descriptionIsText;

  return (
    <header css={pageTitleStyle}>
      <H1>{title}</H1>
      {descriptionIsText && <P css={descriptionStyle}>{description}</P>}
      {descriptionIsComponent && description}
    </header>
  );
};

const pageTitleStyle = css({
  borderBottom: `1px solid ${theme.border.default}`,
  marginBottom: spacing[4],
  paddingBottom: spacing[4],

  // Add spacing between title and description, only when description is set
  'h1 + *': {
    paddingTop: spacing[1],
  },
});

const descriptionStyle = css({
  color: theme.text.secondary,
});
