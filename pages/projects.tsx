import { NextPage } from "next"

import HTHead, {Pages} from "../components/HTHead";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
    return (
        <div>
            <HTHead page={Pages.projects} />

            <NavBar />
            <h1>Under developerment!</h1>
        </div>
    )
}

export default Home;