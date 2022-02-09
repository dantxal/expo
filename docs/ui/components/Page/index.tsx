import { useRouter } from 'next/router';
import React, { PropsWithChildren, useMemo } from 'react';

import { PageTitle } from './PageTitle';
import { getActiveSection, getRoutes } from './navigation';

import DocumentationFooter from '~/components/DocumentationFooter';
import DocumentationHeader from '~/components/DocumentationHeader';
import { usePageApiVersion } from '~/providers/page-api-version';
import { PageMetadata } from '~/types/common';
import { Layout } from '~/ui/components/Layout';
import { Navigation } from '~/ui/components/Navigation';

type PageProps = PropsWithChildren<{
  meta: PageMetadata;
}>;

// TODO(cedric): add new sidebar when it should render
export function Page(props: PageProps) {
  const router = useRouter();
  const { version } = usePageApiVersion();

  const activeSection = useMemo(() => getActiveSection(router.pathname), [router.pathname]);
  const routes = useMemo(() => getRoutes(router.pathname, version), [router.pathname, version]);

  const header = (
    <DocumentationHeader
      activeSection={activeSection}
      isMenuActive={false}
      isMobileSearchActive={false}
      isAlgoliaSearchHidden={false}
      onShowMenu={() => {}}
      onHideMenu={() => {}}
      onToggleSearch={() => {}}
    />
  );

  return (
    <Layout header={header} navigation={<Navigation routes={routes} />}>
      <PageTitle {...props.meta} />
      {props.children}
      <DocumentationFooter
        router={router}
        title={props.meta.title}
        sourceCodeUrl={props.meta.sourceCodeUrl}
      />
    </Layout>
  );
}
