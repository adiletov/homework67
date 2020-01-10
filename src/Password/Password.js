import React, {Component} from 'react';
import './Password.css';
import {connect} from 'react-redux';


class Password extends Component {

    render() {
        const numbers = [1,2,3,4,5,6,7,8,9,0];
        return (
            <div className="block">
                    <input type={this.props.type} defaultValue={this.props.result} disabled style={{background: this.props.style}} />
                <div className='btnBlock'>
                    {numbers.map((key, index)=>{
                        return (
                            <button key={index}  onClick={()=>this.props.selectNumber(key)}>{key}</button>
                        )
                    })}
                    <button onClick={this.props.deleteNumber}>C</button>
                    <button onClick={this.props.enterNumber}>E</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        result: state.result,
        keys: state.keys,
        style: state.style,
        type: state.typeInput,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        selectNumber: (number)=> dispatch({type: 'NUMBER', value: number}),
        deleteNumber: ()=> dispatch({type: 'DELETE'}),
        enterNumber: ()=> dispatch({type: 'ENTER'}),

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Password);