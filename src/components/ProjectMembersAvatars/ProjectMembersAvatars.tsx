import { FunctionComponent } from "react";
import cn from "classnames";

import styles from "./ProjectMemberAvatars.module.css";

type ProjectMemberAvatarsProps = {
    members: string[];
    with_text?: boolean;
    classNames?: string[];
    // Other props
    [key: string]: any;
};

const ProjectMembersAvatars: FunctionComponent<ProjectMemberAvatarsProps> = ({ members, with_text = false, classNames = [], ...props }) => {
    var _id = '';
    if (with_text)
        _id = styles[`avtext${members.length < 3 ? members.length : 3}`];

    return (
        <div className={cn(styles["avatars_row"], ...classNames)} id={styles[`row${members.length < 3 ? members.length : 3}`]} {...props}>  
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
                    {with_text && (
                        <p className={styles['avatars_text']} id={_id}>
                            <strong>{members[0]}</strong>{members.length > 1 ? ` и ещё ${members.length - 1}` : ''}
                        </p>
                    )}
                </>
            )}
        </div>
    );
}

export default ProjectMembersAvatars;