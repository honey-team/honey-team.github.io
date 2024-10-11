import { useState, useEffect } from "react";

const default_domain: string = 'https://honey-team.ru';

export function getDomain(): string {
    const [currentDomain, setCurrentDomain] = useState('');
    useEffect(() => setCurrentDomain(window.location.origin), []);

    if (!currentDomain)
        return default_domain;
    return currentDomain;
}

export function getSubDomain(sub_domain_name: string): string {
    const [certificate, domain] = getDomain().split('://');
    return `${certificate}://${sub_domain_name}.${domain}`;
}

export default function Route(route: string = '/', sub_domain: string | null = null): string {
    if (sub_domain)
        return getSubDomain(sub_domain) + route;
    return getDomain() + route;
}