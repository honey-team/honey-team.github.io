import { Helmet } from "react-helmet";
import Route from "../../utils/links";
import htconfig from "../../../htconfig.json";
import Favicon from "react-favicon";
import {FunctionComponent} from "react";

import styles from "./HTHead.module.css";
import SVGIcon from "react-svg-favicon";
import is_light from "../../utils/theme";

export enum Pages {
    index = 'index',
    members = 'members',
    projects = 'projects',
    member = 'member',
    project = 'project',
    blog = 'blog',
    post = 'post',
    error = 'error'
}

type HTheadProps = {
    page: Pages;
    gh?: string;
    id?: number;
};

const HTHead: FunctionComponent<HTheadProps> = ({page, gh = null, id = null}) => {
    let url = {
        [Pages.index]: '/',
        [Pages.members]: '/members',
        [Pages.member]: `/members/${gh}`,
        [Pages.projects]: '/projects',
        [Pages.project]: `/projects/${gh}`,
        [Pages.blog]: '/blog',
        [Pages.post]: `/blog/${id}`,
        [Pages.error]: 'undefined'
    }[page];
    if (!url) {
        console.warn('404: HTHead: You used unsupported page: %s\n', page);
        return <></>;
    }

    const page_title = gh ? gh : htconfig.titles[page];

    let favicon = null;

    if (page === Pages.member)
        favicon = `https://avatars.githubusercontent.com/${gh}`;
    else if (page === Pages.project) {
        let project = htconfig.projects.find((value) => value.gh === gh);
        if (project && project.image)
            favicon = Route(project.image);
    }

    let description = htconfig.description[page];
    description = description ? Route(description) : Route(htconfig.description.index);

    let og_image = htconfig.og[page];
    og_image = og_image ? Route(og_image) : Route(htconfig.og.index);

    return (
        <>
            {favicon && <Favicon url={favicon}/>}
            <Helmet>
                <title>{page_title}</title>
                {!favicon && <link rel="icon" href="/icons/favicon.ico" sizes="any"/>}
                {!favicon && <link rel="icon"
                                   href={`/icons/${is_light() ? 'favicon_l' : 'favicon_d'}.svg`}
                                   type="image/svg+xml"/>}
                <meta name="description" content={description}/>
                {url != 'undefined' && (
                    <meta property="og:url" content={url}/>
                )}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={page_title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={og_image}/>
                <meta property="og:image:width" content="1000"/>
                <meta property="og:image:height" content="500"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content={Route()}/>
                {url != 'undefined' && (
                    <meta property="twitter:url" content={url}/>
                )}
                <meta name="twitter:title" content={page_title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={og_image}/>
            </Helmet>
        </>
    );
}

export default HTHead;