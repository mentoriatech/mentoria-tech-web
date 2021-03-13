import { FC } from "react";
import Head from "next/head";

export interface HeadProps {
  title: string;
  description?: string;
}

export const DefaultHead: FC<HeadProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title} | mentoria.tech</title>
      <meta name="description" content={description} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Nunito:wght@300,400,700&display=swap"
        rel="stylesheet"
      />
      {children}
    </Head>
  );
};
