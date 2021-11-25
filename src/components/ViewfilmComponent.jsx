import React, { Component } from 'react'
import filmService from '../services/filmService'

class ViewfilmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            film: {}
        }
    }

    componentDidMount(){
        filmService.getfilmById(this.state.id).then( res => {
            this.setState({film: res.data});
        })
    }

    cancel(){
        this.props.history.push('/films');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View film Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Title: </label>
                            <div> { this.state.film.title }</div>
                        </div>
                        <div className = "row">
                            <label> Summary: </label>
                            <div> { this.state.film.summary }</div>
                        </div>
                        <div className = "row">
                            <label> Comedy: </label>
                            <div> { this.state.film.comedy }</div>
                        </div>
                        <button onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewfilmComponent
