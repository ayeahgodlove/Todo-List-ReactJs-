import React from 'react';
class Form extends React.Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render() {
        return <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group form-row justify-content-between">
                <input type="text" className="form-control col-10 px-2" onChange={this.handleChange} value={this.state.content}/>
                <input type="submit" className="btn btn-primary col-2" value="submit"/>
            </div>
        </form>
    </div>
    }
}

export default Form;