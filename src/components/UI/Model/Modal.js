import React,{Component} from "react";
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps) {
        return this.props.show!==nextProps.show;
    }

    render(){
    return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
                    }}>
            {this.props.children}
        </div>
        </div>
    )
                }
}
export default Modal