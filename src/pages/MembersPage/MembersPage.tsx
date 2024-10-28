import { ReactElement, useEffect, useState } from "react";

import HTHead, {Pages} from "../../components/HTHead/HTHead";
import TitleSection from "../../components/TitleSection/TitleSection";
import MemberCard from "../../components/MemberCard/MemberCard";

import config from "../../../htconfig.json";
import styles from "./MembersPage.module.css";
import { GetSearchText, SearchFor } from "../../utils/search";

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
    useEffect(() => getMembers(), [members, search]);

    return (
        <>
            <HTHead page={Pages.members}/>
            <TitleSection title="Участники" value={search} setValue={setSearch}/>
            <section className={styles["list-section"]}>
                <div className="wrapper">
                    {!error && (
                        <>
                            <p className={styles["text"]}>
                                {GetSearchText(SearchFor(members, search).length, search, "members")}
                            </p>
                            <div className={styles["content"]}>
                                {SearchFor(members, search).map((member, index) => {
                                    return <MemberCard member={member} key={index}/>;
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}