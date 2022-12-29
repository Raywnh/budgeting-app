import List from './List'

export default function Form(props) {

    return (
        <div className="sheet">
            <div className='headerBar'>
                <div className="form1">
                        <h4>Name:</h4>
                        <input ref ={props.inputRefName}type="text" className='todo-input1'/>            
                </div>
                <div className="form2">
                    <h4>Price:</h4>
                    <input type="text" className='todo-input2' ref ={props.inputRefPrice}/>
                </div>
                <button className="category" onClick={props.onNameSubmit}>Add</button>           
                <h4>Total amount: {props.totalBudget}</h4>
            </div>
                <List className="list-container" items={props.items} deleteComponent={props.deleteComponent} 
                    editComponent={props.editComponent} />
        </div>
    )

}