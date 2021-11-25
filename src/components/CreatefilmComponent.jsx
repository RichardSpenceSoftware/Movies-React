import React, { Component } from 'react'
import filmService from '../services/filmService';

class CreatefilmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            summary: '',
            comedy: ''
        }
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changesummaryHandler = this.changesummaryHandler.bind(this);
        this.saveOrUpdatefilm = this.saveOrUpdatefilm.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            filmService.getfilmById(this.state.id).then( (res) =>{
                let film = res.data;
                this.setState({title: film.title,
                    summary: film.summary,
                    comedy : film.comedy
                });
            });
        }        
    }
    saveOrUpdatefilm = (e) => {
        e.preventDefault();
        let film = {title: this.state.title, summary: this.state.summary, comedy: this.state.comedy};
        console.log('film => ' + JSON.stringify(film));

        // step 5
        if(this.state.id === '_add'){
            filmService.createfilm(film).then(res =>{
                this.props.history.push('/films');
            });
        }else{
            filmService.updatefilm(film, this.state.id).then( res => {
                this.props.history.push('/films');
            });
        }
    }
    
    changetitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changesummaryHandler= (event) => {
        this.setState({summary: event.target.value});
    }

    changefilmHandler= (event) => {
        this.setState({comedy: event.target.value});
    }

    cancel(){
        this.props.history.push('/films');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Film</h3>
        }else{
            return <h3 className="text-center">Update Film</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                                value={this.state.comedy} onChange={this.changefilmHandler}/>
                                        </div>

                                        <button onClick={this.saveOrUpdatefilm}>Save</button>
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

export default CreatefilmComponent
