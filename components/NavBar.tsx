import Image from "next/image";

import styles from "../styles/NavBar.module.css";

import { prefix } from "../utils/prefix";


const domain = 'honey-team.ru';

const links = {
    root: `https://${domain}`,

    projects: `https://${domain}/projects`,
    members: `https://${domain}/members`,

    discord: `https://discord.${domain}`,
    telegram: `https://telegram.${domain}`,
    github: `https://github.${domain}`
};

function Logo() {
    return (
        <a href={links.root} id={styles.link}>
            <img style={{width: 41.72, height: 46, left: 56, top: 18, position: 'absolute'}} src={`${prefix}/logo.png`} alt='HoneyTeam logo'></img>
            <div style={{left: 119, top: 20, position: 'absolute', textAlign: 'center', wordWrap: 'break-word'}} className={styles.logo_font}>HoneyTeam</div>
        </a>
    )
}

function Socials() {
    return (
        <div style={{width: 182, left: 1235, top: 24, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', gap: 21, display: 'inline-flex'}}>
            <a href={links.discord} id={styles.link}>
                <img style={{width: 45, height: 35}} src={`${prefix}/socials/discord.png`} alt='Discord guild'></img>
            </a>

            <a href={links.telegram} id={styles.link}>
                <div style={{width: 44, paddingRight: 4, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 40, height: 32}} src={`${prefix}/socials/telegram.png`} alt='Telegram channel'></img>
                </div>
            </a>
            
            <a href={links.github} id={styles.link}>
                <img style={{width: 34, height: 36}} src={`${prefix}/socials/github.png`} alt='GitHub organisation'></img>
            </a>
        </div>
    )
}

function Tabs() {
    return (
        <div style={{left: 403, top: 18, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 74, display: 'inline-flex'}}>
            <a href={links.projects} className={styles.tabs_font} id={styles.link}>Проекты</a>
            <a href={links.members} className={styles.tabs_font} id={styles.link}>Участники</a>
        </div>
    )
}

export default function NavBar() {
    return (
        <div style={{height: 84, position: 'relative', background: 'linear-gradient(135deg, #FF8E3F 0%, #FF450B 100%)', boxShadow: '0px 0px 10px 6px rgba(255, 106, 37, 0.40)'}}>
            <Logo />
            <Socials />
            <Tabs />
        </div>
    )
}