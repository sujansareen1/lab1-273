import React, { Component } from 'react';



class App extends Component {
    constructor(props) {
        super(props);

        this.state= {
            first: '',
            second: '',
            fun:'',
            value: 'plus',
            result:''
        }
    }

    setResult(conc) {
        this.setState({
            result: conc
        });
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleClick(fun) {
        let fetchString;
        this.setState({
            fun: fun
        });
        console.log(this.state.first+" "+this.state.fun+" "+this.state.second);
        switch(fun) {
            case '+': fetchString = '/main/plus';
                break;
            case '-': fetchString = '/main/minus';
                break;
            case '*': fetchString = '/main/multiply';
                break;
            case '/': fetchString = '/main/divide';
                break;
            default: break;
        }
        fetch(fetchString, {
            method: 'POST',
            body: JSON.stringify({
                first: this.state.first,
                second: this.state.second,
                fun: this.state.fun
            }),
            headers: {Accept: 'application/json',
                'Content-Type': 'application/json',}
        }).then((response) => response.json())
            .then((responsejson) => {
                console.log(responsejson);
                this.setResult(responsejson);
            })
            .catch((e) => {
                console.log(e)

            });
    }

  render() {

    return (
        <div class="container">

          <form onSubmit={this.handleClick}>
              <div class="row">
              <div class="col-md-4" class="form-group">
                  <label for="first">Give first number</label>
                  <input type="text"  className="form-control" name="first" value={this.state.first} onChange={this.handleChange.bind(this)} />
                  <label for="second">Give second number</label>
                  <input type="text"  className="form-control" name="second" value={this.state.second} onChange={this.handleChange.bind(this)} />
              </div></div>

			  <div class="row" class="form-group">
      <label for="sel1">Select Operation:
      <select class="selectpicker" >
          <option >Choose an operation</option>
        <option value="Add" onClick={this.handleClick.bind(this, "+")}>Add</option>
        <option value="Subtract" onClick={this.handleClick.bind(this, "-")}>Subtract</option>
        <option value="Multiply" onClick={this.handleClick.bind(this, "*")}>Multiply</option>
        <option value="Divide" onClick={this.handleClick.bind(this, "/")}>Divide</option>
      </select> </label>
              </div>


              <br/>
              <button type="submit" class="btn btn-success">Submit</button>
              <br/><br/>
              <div class="row">
                  <div class="col-md-4" class="form-group">
                      <label for="result">The result is: </label>

                      <input type="text" className="form-control" name="result" value={this.state.result} onChange={this.handleChange.bind(this)} /></div></div>


          </form>

      </div>
    );
  }
}

export default App;
