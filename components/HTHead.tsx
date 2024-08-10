import Head from "next/head";
import { ReactElement } from "react";

import getDomain, {Route} from "../utils/domain";

import htconfig from "../htconfig.json";


export const Pages = {
    index: 'index',
    members: 'members',
    projects: 'projects'
} as const;

export default function HTHead(props: {[id: string]: string}): ReactElement | null {
    const page = props.page;
    
    let url: string;
    switch (page) {
        case (Pages.index):
            url = Route('/');
            break;
        case (Pages.members):
            url = Route('/members');
            break;
        case (Pages.projects):
            url = Route('/projects');
            break;
        default:
            console.log('You used unsupported page: %s\n', page);
            return null;
    }

    const page_title = htconfig.titles[page];

    let favicon = htconfig.favicon[page];
    if (favicon === null) {
        favicon = Route(htconfig.favicon.index);
    }
    else {
        favicon = Route(favicon);
    }

    let description = htconfig.description[page];
    if (description === null) {
        description = Route(htconfig.description.index);
    }
    else {
        description = Route(description);
    }

    let og_image = htconfig.og[page];
    if (og_image === null) {
        og_image = Route(htconfig.og.index);
    }
    else {
        og_image = Route(og_image);
    }

    return (
        <Head>
            <title>{page_title}</title>
            <link rel="icon" href={favicon} />
            <meta name="description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={page_title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={og_image}/>
            <meta property="og:image:width" content="1000"/>
            <meta property="og:image:height" content="500"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content={getDomain()}/>
            <meta property="twitter:url" content={url}/>
            <meta name="twitter:title" content={page_title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={og_image}/>
        </Head>
    )
}