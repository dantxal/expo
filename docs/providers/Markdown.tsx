import { MDXProvider } from '@mdx-js/react';
import React, { PropsWithChildren } from 'react';

// TODO(cedric): remove old design after fully switching to new design
const COMPONENTS = process.env.NEXT_PUBLIC_EXPO_DESIGN ? loadNewComponents() : loadOldComponents();

type MarkdownProviderProps = PropsWithChildren<object>;

export function MarkdownProvider(props: MarkdownProviderProps) {
  return <MDXProvider components={COMPONENTS}>{props.children}</MDXProvider>;
}

function loadNewComponents() {
  const markdown = require('~/ui/components/Markdown');
  return {
    ...markdown.markdownComponents,
    wrapper: markdown.MarkdownWrapper,
  };
}

function loadOldComponents() {
  return {
    ...require('~/common/translate-markdown'),
    wrapper: require('~/components/page-higher-order/DocumentationElements').default,
  };
}
