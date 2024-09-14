import MemberCard from "../../components/MemberCard/MemberCard.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import styles from "./MembersPage.module.css";
import file from "../../data.json";
import { useEffect, useState } from "react";

function MemebersPage() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(false);

  const getMembers = () => {
    if(file.members){
      setMembers(file.members);
      setError(false);
    }
    else
      setError(true);
  }

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
        <TitleSection title="Участники" />
        <section className={styles["list-section"]}>
          <div className="wrapper">
            {!error && (
              <p className={styles["text"]}>
                Показано {members.length} участников
              </p>
            )}
             {error && (
              <p className={styles["text"]}>
                Участники не найдены
              </p>
            )}
            {!error && (
              <div className={styles["content"]}>
                {members.map((member, index) => {
                  return <MemberCard member={member} key={index} />;
                })}
              </div>
            )}
          </div>
        </section>
    </>
  );
}

export default MemebersPage;
