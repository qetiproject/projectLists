import { Switch, Route } from "react-router";
import ProjectTable from "./projectTable/projectTable";

const Routes = () => {
    return(
        <>
            <Switch>
                <Route exact path="/projects" component={ProjectTable} />
            </Switch>
        </>
    )
}

export default Routes