import React from 'react';
class EmpTr extends React.Component{
    render(){
        const employee=this.props.employee;
        return(
            <tr>
                <td>{employee.id}</td>
                <td>{employee.First_Name}</td>
                <td>{employee.Last_Name}</td>
                <td>{employee.Birth}</td>
                <td>{employee.Gender}</td>
                <td>{employee.Phone}</td>
                <td><button onClick={() => this.props.uponClick(employee.id)}>修改</button></td>
                <td><button onClick={() => this.props.deonClick(employee.id)}>删除</button></td>
            </tr>
        );
    }
}
export default EmpTr;