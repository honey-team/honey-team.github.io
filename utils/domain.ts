import { useState, useEffect } from "react";


export default function getDomain(): string {
    const [currentDomain, setCurrentDomain] = useState('');
    useEffect(() => {
        setCurrentDomain(window.location.origin);
    }, [])
    return currentDomain;
}

export function getSubDomain(sub_domain_name: string): string {
    const [certificate, domain] = getDomain().split('://');
    return `${certificate}://${sub_domain_name}.${domain}`;
}

export function Route(route: string, sub_domain: string | null = null): string {
    if (sub_domain === null) {
        return getDomain() + route;
    }
    return getSubDomain(sub_domain) + route;
}
