import { useState, useEffect } from "react";

const default_domain = 'https://honey-team.ru';

export default function getDomain(): string {
    const [currentDomain, setCurrentDomain] = useState('');
    useEffect(() => {
        setCurrentDomain(window.location.origin);
    }, [])

    if (currentDomain === '') {
        return default_domain;
    }
    return currentDomain;
}

export function getSubDomain(sub_domain_name: string): string {
    const [certificate, domain] = getDomain().split('://');
    return `${certificate}://${sub_domain_name}.${domain}`;
}

export function Route(route: string | null, sub_domain: string | null = null): string {
    if (route === null) {
        route = '/';
    }
    
    if (sub_domain === null) {
        return getDomain() + route;
    }
    return getSubDomain(sub_domain) + route;
}
