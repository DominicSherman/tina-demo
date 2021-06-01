import * as Options from 'enums/options';
import Head from 'next/head';
import React, { FC } from 'react';

export const Meta: FC = () => (
  <Head>
    <meta content="website" property="og:type" />
    <meta content="300" property="og:image:width" />
    <meta content="300" property="og:image:height" />
    <meta content={Options.OPEN_GRAPH} property="og:image" />
    <meta content={Options.DESCRIPTION} property="og:description" />
    <title>{Options.APP_TITLE}</title>
    <link href={Options.FAVICON} rel="shortcut icon" />
    <link href={Options.FAVICON} rel="icon" />
  </Head>
);
