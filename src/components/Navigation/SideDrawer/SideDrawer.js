import React from 'react'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css'
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    let drawerDisplay = classes.Close
    if(props.show){
        drawerDisplay = classes.Open
    }

    return (
        <Auxiliary>
            <Backdrop
                show={props.show}
                backgroundClick={props.closed}
            />
            <div className={[classes.SideDrawer, drawerDisplay].join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    )
}

export default SideDrawer