import React from 'react';
class UpdateEmp extends React.Component{
    integration(){
        if(this.refs.upfn.value!==''&&this.refs.upln.value!==''&&this.refs.upb.value!==''&&this.refs.upg.value!==''&&this.refs.upp.value!==''&&/^[0-9]{11}$/.test(this.refs.upp.value)){
            const employee ={id:parseInt(this.refs.upid.value),
                First_Name:this.refs.upfn.value,
                Last_Name:this.refs.upln.value,
                Birth:this.refs.upb.value,
                Gender:this.refs.upg.value,
                Phone:this.refs.upp.value};
            return employee;
        }else{
            return null;
        }
    }
    componentDidUpdate(){
        const empdata=this.props.empdata;
        if(empdata!=null){
            this.refs.upid.value=empdata.id;
            this.refs.upfn.value=empdata.First_Name;
            this.refs.upln.value=empdata.Last_Name;
            this.refs.upb.value=empdata.Birth;
            this.refs.upg.value=empdata.Gender;
            this.refs.upp.value=empdata.Phone;
        }
    }

    render(){
        return(
            <div>
                <form action='JavaScript:void(0)'>
                    <h2>Update</h2>
                    <input id='upid' ref='upid' type='text'/>
                    First_Name:<input ref='upfn' type='text' required='required' />
                    Last_Name:<input ref='upln' type='text' required='required'/>
                    Birth:<input ref='upb' type='date' required='required'/>
                    Gender:<select ref='upg'>
                            <option>m</option>
                            <option>f</option>
                            </select>
                    Phone:<input ref='upp' type='number' min='10000000000' max='99999999999' required='required'/>
                    <button onClick={() => this.props.onClick(this.integration())}>确定</button>
                </form>
            </div>
        );
    }
}
export default UpdateEmp;