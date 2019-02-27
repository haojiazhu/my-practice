import React from 'react';
import EmpTr from './empTr.js';
import AddEmp from './addEmp.js';
import UpdateEmp from './updateEmp.js';
import {empdata} from './empdata.js';
class EmployeeTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          employee:empdata(),
          id:4,
          editEmp:null,
          searchEmp:null,
          searchField:['id','First_Name','Last_Name','Birth','Gender','Phone'],
          sortRule:true,
          pageNo:1,
          pageSize:3,
          addShow:false,
          upShow:false
        };
    }
    componentDidMount(){
        var admin = sessionStorage.getItem('admin');
        if(admin===null){
            this.props.history.push('/');
        }
    }
    showAdd(){
        this.setState({
            addShow:!this.state.addShow
        })
    }
    clearSearch(){
        this.refs.searchid.value='';
        this.refs.searchfn.value='';
        this.refs.searchln.value='';
        this.refs.searchb.value='';
        this.refs.searchg.value='';
        this.refs.searchp.value='';
    }
    addEmployee(empdata){
        this.clearSearch();
        const employee=this.state.employee;
        if(empdata){
            this.setState({
                employee: employee.concat([             
                    empdata            
                ]),
                id: this.state.id+1,
                searchEmp:null,
                addShow:false
            })
        }
    }
    showEmp(eid){
        const employee=this.state.employee;
        const emp=employee.find(function(obj){
            return obj.id===eid;
        })
        this.setState({
            editEmp: emp,
            upShow:!this.state.upShow    
        });
    }
    modifyEmp(empdata){
        let employee=this.state.employee;
        if(empdata!=null){
            employee = employee.map(e=>(e.id === empdata.id? empdata: e)); 
            this.setState({
                employee: employee,
                editEmp: null,
                searchEmp:null,
                upShow:false
            });
            this.clearSearch();
        }
    }
    deleteEmp(eid){
        var con=window.confirm('是否确定删除？');
        if(con){
            const employee=this.state.employee;
            const searchEmp=this.state.searchEmp;
            const index=employee.findIndex(
                (employee)=>{return employee.id===eid}
            )
            employee.splice(index,1);
            if(searchEmp!==null){
                const indexsearch=searchEmp.findIndex(
                    (employee)=>{return employee.id===eid}
                )
                searchEmp.splice(indexsearch,1);}
            this.setState({
                employee: employee
            });
        }
    }
    search(){
        var employee=this.state.employee;
        const searchField=this.state.searchField;
        const searchDate ={id:this.refs.searchid.value,
            First_Name:this.refs.searchfn.value,
            Last_Name:this.refs.searchln.value,
            Birth:this.refs.searchb.value,
            Gender:this.refs.searchg.value,
            Phone:this.refs.searchp.value};
            //set state display employee
           // displayEmployee.filter(e=>e.id === searchDate[]);

        employee=employee.map(
            (obj)=>{
                var flag=true;
                for(let i=0;i<=searchField.length-1;i++){
                    if(obj[searchField[i]].toString().indexOf(searchDate[searchField[i]].toString())<0){
                        flag=false;
                    }
                }
                if(flag){
                    return obj;
                }else{
                    return null;
                }
            }
        )
        for(let i=0;i<employee.length;i++){
            if(employee[i]==null){
                employee.splice(i,1);
                i=i-1;
            }
        }
        this.setState({
            searchEmp: employee,
            pageNo:1
        });
    }
    sort(field){
        const employee=this.state.employee;
        const searchEmp=this.state.searchEmp;
        const curemployee=searchEmp==null?employee:searchEmp;
        const rule=this.state.sortRule;
        var employees='';
        if(field==='id'||field==='Phone'){
        employees=curemployee.sort(
            (a,b)=>{
                if(rule){
                    return b[field]-a[field];
                }else{
                    return a[field]-b[field];
                }
            }
        );}else{
            employees=curemployee.sort(
                (a,b)=>{
                    if(rule){
                        return a[field].localeCompare(b[field]);
                    }else{
                        return b[field].localeCompare(a[field]);
                    }
                }
            );
        }
        searchEmp==null?this.setState({
                sortRule:rule?false:true,
                employee:employees
            }):this.setState({
                sortRule:rule?false:true,
                searchEmp:employees
            });       
    }
    paging(which){
        const employee=this.state.employee;
        const searchEmp=this.state.searchEmp;
        const curemployee=searchEmp==null?employee:searchEmp;
        if(which==='pre'){
            this.state.pageNo===1?alert('当前为第一页，已无上一页'):           
                this.setState({
                    pageNo:this.state.pageNo-1
                });
        }else{
            curemployee.length<this.state.pageSize*this.state.pageNo+1?alert('当前为最后一页，已无下一页'):
                this.setState({
                    pageNo:this.state.pageNo+1
                });
        }
    }
    loginOut(){
        sessionStorage.removeItem('admin');
        this.props.history.push('/');
    }
    render(){
        const addStyle={display:this.state.addShow?'block':'none'};
        const upStyle={display:this.state.upShow?'block':'none'};
        const employee=this.state.employee;
        const searchEmp=this.state.searchEmp;
        const page=(this.state.pageNo-1)*this.state.pageSize;
        const pageSize=this.state.pageSize;
        const curemployee=searchEmp==null?employee:searchEmp;
        const employees =curemployee.map((step) => {
            return (  
                <EmpTr key={step.id}
                    employee={step}
                    uponClick={(id)=>this.showEmp(id)}
                    deonClick={(id)=>this.deleteEmp(id)}
                />
            );
          });
          const pageemployee=employees.slice(page,page+pageSize);
        return(       
            <div>
                <h2>Employee System</h2>
                <button id='loginoutbtn' onClick={()=>this.loginOut()}>登出</button>
                <button onClick={()=>this.showAdd()}>新增</button>
                <table border='5' width='100%'>
                    <thead>
                        <tr>
                            <th onClick={()=>this.sort('id')}>ID</th>
                            <th onClick={()=>this.sort('First_Name')}>First_Name</th>
                            <th onClick={()=>this.sort('Last_Name')}>Last_Name</th>
                            <th onClick={()=>this.sort('Birth')}>Birth</th>
                            <th onClick={()=>this.sort('Gender')}>Gender</th>
                            <th onClick={()=>this.sort('Phone')}>Phone</th>
                            <th colSpan='2'>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageemployee}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><input ref='searchid' type='text' placeholder='Search id' onChange={()=>this.search()}/></th>
                            <th><input ref='searchfn' type='text' placeholder='Search First_Name' onChange={()=>this.search()}/></th>
                            <th><input ref='searchln' type='text' placeholder='Search Last_Name' onChange={()=>this.search()}/></th>
                            <th><input ref='searchb' type='text' placeholder='Search Birth' onChange={()=>this.search()}/></th>
                            <th><input ref='searchg' type='text' placeholder='Search Gender' onChange={()=>this.search()}/></th>
                            <th><input ref='searchp' type='text' placeholder='Search Phone' onChange={()=>this.search()}/></th>
                        </tr>
                    </tfoot>
                </table>
                <div id='page'>
                    <button onClick={()=>{this.paging('pre')}}>上一页</button>
                    <button onClick={()=>{this.paging('next')}}>下一页</button>
                </div>
                <div style={addStyle}>
                    <AddEmp id={this.state.id} onClick={(empdata) => this.addEmployee(empdata)} />
                </div>
                <div style={upStyle}>
                    <UpdateEmp onClick={(empdata)=>this.modifyEmp(empdata)} empdata={this.state.editEmp}/>
                </div>
            </div>
        );
    }
}
export default EmployeeTab;