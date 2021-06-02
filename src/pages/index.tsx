import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next';
import { usePlugin } from 'tinacms';
import { InlineForm, InlineText } from 'react-tinacms-inline';
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github';

import { NavBar } from 'components';

export default function Home({ file }) {
  const formOptions = {
    label: 'Home Page',
    fields: [{ name: 'title', component: 'text' }],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <InlineForm form={form}>
      <div className="w-screen h-screen flex flex-col">
        <NavBar />
        <div className="h-screen flex flex-col justify-center items-center w-full">
          <InlineText className="text-3xl font-semibold ml-7" name="title" />
        </div>
      </div>
    </InlineForm>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    });
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../../content/home.json')).default,
      },
    },
  };
};
