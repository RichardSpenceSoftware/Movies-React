import React, { Component } from 'react'
import filmService from '../services/filmService';

class UpdatefilmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            summary: '',
            comedy: ''
        }
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changesummaryHandler = this.changesummaryHandler.bind(this);
        this.updatefilm = this.updatefilm.bind(this);
    }

    componentDidMount(){
        filmService.getfilmById(this.state.id).then( (res) =>{
            let film = res.data;
            this.setState({title: film.title,
                summary: film.summary,
                comedy : film.comedy
            });
        });
    }

    updatefilm = (e) => {
        e.preventDefault();
        let film = {title: this.state.title, summary: this.state.summary, comedy: this.state.comedy};
        console.log('film => ' + JSON.stringify(film));
        console.log('id => ' + JSON.stringify(this.state.id));
        filmService.updatefilm(film, this.state.id).then( res => {
            this.props.history.push('/films');
        });
    }
    
    changetitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changesummaryHandler= (event) => {
        this.setState({summary: event.target.value});
    }

    changecomedyHandler= (event) => {
        this.setState({comedy: event.target.value});
    }

    cancel(){
        this.props.history.push('/films');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update film</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changetitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Summary: </label>
                                            <input placeholder="Summary" name="summary" className="form-control" 
                                                value={this.state.summary} onChange={this.changesummaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Comedy: </label>
                                            <input placeholder="Comedy" name="comedy" className="form-control" 
                                                value={this.state.comedy} onChange={this.changecomedyHandler}/>
                                        </div>

                                        <button onClick={this.updatefilm}>Save</button>
                                        <button onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdatefilmComponent
