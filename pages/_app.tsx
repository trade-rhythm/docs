import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz";
import React, { Fragment } from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import Logo from "../components/Logo";

export default function App(props) {
    const { Component, pageProps } = props;
    return (
        <ChakraProvider resetCSS>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Fira+Code"
                    rel="stylesheet"
                    key="google-font-Fira"
                />
            </Head>
            <DokzProvider
                headerLogo={<Logo h="10" />}
                docsRootPath="pages"
                githubUrl="trade-rhythm/docs"
                branch="main"
                headerItems={[
                    <GithubLink
                        key="0"
                        url="https://github.com/trade-rhythm/docs"
                    />,
                    <ColorModeSwitch key="1" />,
                ]}
                sidebarOrdering={{
                    "index.mdx": true,
                    Documents_Group: {
                        "another-doc.mdx": true,
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    );
}
