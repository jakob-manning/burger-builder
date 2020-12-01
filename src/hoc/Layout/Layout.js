import Auxiliary from "../Auxiliary/Auxiliary";
import classes from './Layout.module.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import React, { Component } from 'react'

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render(){
        return (
            <Auxiliary>
                <Toolbar opened={this.sideDrawerOpenHandler}/>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    show = {this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout