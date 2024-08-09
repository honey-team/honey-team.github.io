import styles from "../styles/NavBar.module.css";

import prefix  from "../utils/prefix";
import { Route } from "../utils/domain";

function Logo() {
    return (
        <a href={Route('/')} id={styles.link}>
            <img style={{width: 41.72, height: 46, left: 56, top: 18, position: 'absolute'}} src={Route('/logo.png')} alt='HoneyTeam logo'></img>
            <div style={{left: 119, top: 20, position: 'absolute', textAlign: 'center', wordWrap: 'break-word'}} className={styles.logo_font}>HoneyTeam</div>
        </a>
    )
}

function Socials() {
    return (
        <div style={{width: 182, right: 56, top: 24, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', gap: 21, display: 'inline-flex'}}>
            <a href={Route('/', 'discord')} id={styles.link}>
                <img style={{width: 45, height: 35}} src={Route('/socials/discord.png')} alt='Discord guild'></img>
            </a>

            <a href={Route('/', 'telegram')} id={styles.link}>
                <div style={{width: 44, paddingRight: 4, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 40, height: 32}} src={Route('/socials/telegram.png')} alt='Telegram channel'></img>
                </div>
            </a>
            
            <a href={Route('/', 'github')} id={styles.link}>
                <img style={{width: 34, height: 36}} src={Route('/socials/github.png')} alt='GitHub organisation'></img>
            </a>
        </div>
    )
}

function Tabs() {
    return (
        <div style={{left: 403, top: 18, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 74, display: 'inline-flex'}}>
            <a href={Route('/projects')} className={styles.tabs_font} id={styles.link}>Проекты</a>
            <a href={Route('/members')} className={styles.tabs_font} id={styles.link}>Участники</a>
        </div>
    )
}

export default function NavBar() {
    return (
        <div className={styles.navbar} style={{height: 84}}>
            <Logo />
            <Socials />
            <Tabs />
        </div>
    )
}