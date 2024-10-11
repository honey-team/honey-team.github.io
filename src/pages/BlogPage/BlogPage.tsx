import { ReactElement } from "react";
import HTHead, { Pages } from "../../components/HTHead/HTHead";

export default function BlogPage(): ReactElement {
    return (
        <>
            <HTHead page={Pages.blog}/>
            <p color="white">В разработке!</p>
        </>
    );
}