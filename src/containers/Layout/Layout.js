import React,{Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class layout extends Component {
    state={
        showSideDrawer: false
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render() {
    return(<Aux>
        <Toolbar clicked = {this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>)}
}

export default layout;