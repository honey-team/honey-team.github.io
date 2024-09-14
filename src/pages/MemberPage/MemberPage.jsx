import { useEffect, useState } from "react";
import file from "../../data.json";
import { useParams } from "react-router-dom";
import DecorativeLine from "../../components/DecorativeLine/DecorativeLine";
import Icons from "../../components/Icons/Icons";
import styles from "./MemberPage.module.css";
import Title from "../../components/Title/Title";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function MemberPage() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(true);
  const [currentMember, setCurrentMember] = useState();
  const params = useParams();

  let links = ["github", "cite", "telegram", "discord"];
  let project = {
	id: 1,
	title: "mksc",
	description: "A program to track your daily keypresses.",
	image: "/images/projects/test-img.jpg"
  }

  const getMembers = () => {
    if (file.members) {
      setMembers(file.members);
    } else setError(true);
  };

  const getCurrentMember = () => {
    setCurrentMember(members[params.id - 1]);
    if (currentMember) setError(false);
    else setError(true);
  };

  useEffect(() => {
    getMembers();
  }, []);

  useEffect(() => {
    getCurrentMember();
    console.log(currentMember);
  }, [members, currentMember]);

  return (
    <>
      {error && (
        <div className="wrapper">
          <p>Участник не найден</p>
        </div>
      )}
      {!error && (
        <>
          <section className={styles["head-section"]}>
            <div className={styles["avatar-wrapper"]}>
              <img
                src={currentMember.banner}
                className={styles["avatar"]}
              ></img>
            </div>
          </section>
          <section className={styles["info-section"]}>
            <h1 className={styles["info-section__title"]}>
              {currentMember.gh}
            </h1>
            <div className={styles["info-section__stats"]}>
              <p className={styles["bio"]}>{currentMember?.bio}</p>
              <span className={styles["dot"]}>&bull;</span>
              {currentMember.langs.map((lang, index) => {
                return <Icons name={lang} key={index} />;
              })}
            </div>
			<div className={styles["contacts"]}>
			{
          currentMember.links.map((item, index) => {
            return <a href={item} target="_blank" className={styles["contact-btn"]} key={index}>
              <Icons name={links[index]} />
            </a>
          })
        }
			</div>

            <DecorativeLine className={styles["dash"]} />
          </section>
		  <section className={styles["projects-section"]}>
		  <div className="wrapper">
			<Title className={styles["projects-section__title"]}>Проекты</Title>
			<div className={styles["projects-wrapper"]}>
				<ProjectCard project = {project}></ProjectCard>
				<ProjectCard project = {project}></ProjectCard>
				<ProjectCard project = {project}></ProjectCard>
				<ProjectCard project = {project}></ProjectCard>
			</div>
			</div>
		  </section>
        </>
      )}
    </>
  );
}

export default MemberPage;
