import { Helmet } from "react-helmet";
import Route from "../../utils/links";
import htconfig from "../../../htconfig.json";


export const Pages = {
    index: 'index',
    members: 'members',
    projects: 'projects',
    member: 'member',
    project: 'project'
}

export default function HTHead({name, page, gh, ...props}) {
    let url;
    switch (page) {
        case (Pages.index):
            url = Route('/');
            break;
        case (Pages.members):
            url = Route('/members');
            break;
        case (Pages.member):
            url = Route(`/members/${gh}`);
            break;
        case (Pages.projects):
            url = Route('/projects');
            break;
        case (Pages.project):
            url = Route(`/projects/${gh}`);
            break;
        default:
            console.log('404: HTHead: You used unsupported page: %s\n', page);
            return null;
    }

    const page_title = gh ? gh : htconfig.titles[page];

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
        <Helmet>
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
            <meta property="twitter:domain" content={Route('/')}/>
            <meta property="twitter:url" content={url}/>
            <meta name="twitter:title" content={page_title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={og_image}/>
        </Helmet>
    );
}