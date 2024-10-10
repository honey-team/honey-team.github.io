import styles from "./ProjectMemberAvatars.module.css";
import cn from "classnames";

export default function ProjectMembersAvatars({ members, with_text = false, classNames = [] }) {
    // members: ['gh': string]

    if (with_text)
        var _id = styles[`avtext${members.length < 3 ? members.length : 3}`];

    return (
        <div className={cn(styles["avatars_row"], ...classNames)}>  
            {members.length != 0 && (
                <>
                    {members.map(
                        (v, i) => {
                            if (i < 3)
                                return (
                                    <img src={`https://avatars.githubusercontent.com/${v}`}
                                         className={styles[`mimg${i+1}`]}
                                         id={styles['mimg']}
                                    />
                                );
                        }
                    )}
                    {with_text && members.length === 1 && (
                        <p className={styles['avatars_text']} id={_id}><bold>{members[0]}</bold></p>
                    )}
                    {with_text && members.length > 1 && (
                        <p className={styles['avatars_text']} id={_id}><bold>{members[0]}</bold>{` и ещё ${members.length - 1}`}</p>
                    )}
                </>
            )}
        </div>
    );
}