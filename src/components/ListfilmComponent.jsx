import React, { Component } from 'react'
import filmService from '../services/filmService'

class ListfilmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                films: []
        }
        this.addfilm = this.addfilm.bind(this);
        this.editfilm = this.editfilm.bind(this);
        this.deletefilm = this.deletefilm.bind(this);
    }

    deletefilm(id){
        filmService.deletefilm(id).then( res => {
            this.setState({films: this.state.films.filter(film => film.id !== id)});
        });
    }
    viewfilm(id){
        this.props.history.push(`/view-film/${id}`);
    }
    editfilm(id){
        this.props.history.push(`/add-film/${id}`);
    }

    componentDidMount(){
        filmService.getfilm().then((res) => {
            this.setState({ films: res.data});
        });
    }

    addfilm(){
        this.props.history.push('/add-film/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">films List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addfilm}> Add film</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Title</th>
                                    <th> Summary</th>
                                    <th> Comedy</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.films.map(
                                        film => 
                                        <tr key = {film.id}>
                                             <td> { film.title} </td>   
                                             <td> {film.summary}</td>
                                             <td> {film.comedy}</td>
                                             <td>
                                                 <button onClick={ () => this.editfilm(film.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletefilm(film.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewfilm(film.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListfilmComponent
