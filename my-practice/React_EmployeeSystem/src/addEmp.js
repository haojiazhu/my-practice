import React from 'react';
class AddEmp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputfn:'',
            inputln:'',
            inputb:'',
            inputg:'m',
            inputp:''
        };
    }
    integration(){
        if(this.state.inputfn!==''&&this.state.inputln!==''&&this.state.inputb!==''&&this.state.inputg!==''&&this.state.inputp!==''&&/^[0-9]{11}$/.test(this.state.inputp)){
            const empdata ={id:this.props.id,
                First_Name:this.state.inputfn,
                Last_Name:this.state.inputln,
                Birth:this.state.inputb,
                Gender:this.state.inputg,
                Phone:this.state.inputp};
                this.setState({
                    inputfn:'',
                    inputln:'',
                    inputb:'',
                    inputg:'m',
                    inputp:''
                })
            return empdata;
        }else{
            return null;
        }
    }
    inputChange(witch,e){
        this.setState({
            [witch]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form action='JavaScript:void(0)'>
                    <h2>Add</h2>
                    First_Name:<input type='text' onChange={(e)=>this.inputChange("inputfn",e)} required="required" value={this.state.inputfn}/>
                    Last_Name:<input type='text' onChange={(e)=>this.inputChange('inputln',e)} required="required" value={this.state.inputln}/>
                    Birth:<input type='Date' onChange={(e)=>this.inputChange('inputb',e)} required="required" value={this.state.inputb}/>
                    Gender:<select onChange={(e)=>this.inputChange('inputg',e)} value={this.state.inputg}>
                            <option value='m'>m</option>
                            <option value='f'>f</option>
                            </select>
                    Phone:<input type='number' min='10000000000' max='99999999999' onChange={(e)=>this.inputChange('inputp',e)} required="required" value={this.state.inputp}/>
                    <button onClick={() => this.props.onClick(this.integration())}>新增</button>                   
                </form>
            </div>
        );
    }
}
export default AddEmp;