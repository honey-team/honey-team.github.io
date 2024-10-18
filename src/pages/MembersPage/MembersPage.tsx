import { ReactElement, useEffect, useState } from "react";

import HTHead, {Pages} from "../../components/HTHead/HTHead";
import TitleSection from "../../components/TitleSection/TitleSection";
import MemberCard from "../../components/MemberCard/MemberCard";

import config from "../../../htconfig.json";
import styles from "./MembersPage.module.css";
import { Member } from "../../utils/config_type_alias";

function getCorrectWordMembers(n: number): string {
    if (n % 10 == 1 && Math.floor(n % 100 / 10) != 1)
        return "участник";
    else if ([2, 3, 4].includes(n % 10) && Math.floor(n % 100 / 10) != 1)
        return "участника";

    return "участников"
}

function getSearchText(n: number, search: string): string {
    if (n == 0)
        return `Не найдено ни одного участника, содержащего в нике ${search}`;

    let s = (n % 10 == 1 && Math.floor(n % 100 / 10) != 1) ? 'Показан ' : 'Показаны ';
    s += n + ' ';
    s += getCorrectWordMembers(n);
    if (!search)
        return s;
    s += ' (';
    s += (n % 10 == 1 && Math.floor(n % 100 / 10) != 1) ? 'содержащий ' : 'содержащих ';
    s += `в нике ${search})`;
    return s;
}

export default function MembersPage(): ReactElement {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    const getMembers = () => {
        if (config.members) {
            setMembers(config.members);
            setError(false);
        } else setError(true);
    };
    useEffect(() => getMembers(), [search]);

    const searchMembers = (): Member[] => {
        if (!search)
            return members;
        let r = [];
        members.forEach((m: {gh: string, [key: string]: string}) => {
            if (m.gh.toLowerCase().includes(search.toLowerCase()))
                r.push(m);
        })
        return r;
    };

    return (
        <>
            <HTHead page={Pages.members}/>
            <TitleSection title="Участники" value={search} setValue={setSearch}/>
            <section className={styles["list-section"]}>
                <div className="wrapper">
                    {!error && (
                        <p className={styles["text"]}>
                            {getSearchText(searchMembers().length, search)}
                        </p>
                    )}
                    {error && (
                        <p className={styles["text"]}>
                            Участники не найдены
                        </p>
                    )}
                    {!error && (
                        <div className={styles["content"]}>
                            {searchMembers().map((member, index) => {
                                return <MemberCard member={member} key={index}/>;
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}