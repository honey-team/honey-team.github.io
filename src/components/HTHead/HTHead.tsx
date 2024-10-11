import { Helmet } from "react-helmet";
import Route from "../../utils/links";
import htconfig from "../../../htconfig.json";
import Favicon from "react-favicon";
import {FunctionComponent, ReactElement} from "react";

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
    gh?: string | null;
    id?: number | null;
};

const HTHead: FunctionComponent<HTheadProps> = ({page, gh = null, id = null}) => {
    let url_array = [
        [Pages.index, '/'],
        [Pages.members, '/members'],
        [Pages.member, `/members/${gh}`],
        [Pages.projects, '/projects'],
        [Pages.project, `/projects/${gh}`],
        [Pages.blog, '/blog'],
        [Pages.post, `/blog/${id}`],
        [Pages.error, 'undefined']
    ].find((value) => page === value[0]);
    if (url_array)
        var url = url_array[1];
    else {
        console.log('404: HTHead: You used unsupported page: %s\n', page);
        return <></>;
    }

    const page_title = gh ? gh : htconfig.titles[page];

    let favicon = Route(htconfig.favicon.index);

    if (page === Pages.member)
        favicon = `https://avatars.githubusercontent.com/${gh}`;
    else if (page === Pages.project) {
        let project = htconfig.projects.find((value) => value.gh === gh);
        if (project && project.image)
            favicon = Route(project.image);
    }
    else {
        favicon = htconfig.favicon[page];
        favicon = favicon ? Route(favicon) : Route(htconfig.favicon.index);
    }


    let description = htconfig.description[page];
    description = description ? Route(description) : Route(htconfig.description.index);

    let og_image = htconfig.og[page];
    og_image = og_image ? Route(og_image) : Route(htconfig.og.index);

    return (
        <>
            <Favicon url={favicon}/>
            <Helmet>
                <title>{page_title}</title>
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