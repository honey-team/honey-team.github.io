import { useEffect, useState } from "react";

export default function is_light(): boolean {
    const [light, setLight] = useState(true);
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            setLight(false);
        else setLight(true);
    }, []);
    return light;
}