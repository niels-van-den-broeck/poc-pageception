import React, { Component } from 'react';
import './App.css';
import cat from './assets/cat.jpg';
import dog from './assets/dog.jpg';
import mouse from './assets/mouse.jpg';
import elephant from './assets/elephant.jpg';
import giraf from './assets/giraf.jpg';

class App extends Component {
    animals = {
        cat,
        dog,
        mouse,
        elephant,
        giraf,
    };

    state = {
        name: '',
        animal: '',
    };


    componentDidMount() {
        window.addEventListener('message', e => {
            if (typeof e.data === 'string') this.setState({ animal: e.data })
        })
    }


    onSubmit = (e) => {
        e.preventDefault();

        window.parent.postMessage(this.state.name, '*');
    };

    render() {
        const { name, animal } = this.state;
        return (
            <div className="App">
                {
                    animal && (
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Which animal is this?"
                                onChange={e => this.setState({name: e.target.value})}
                                value={name}
                            />
                            <button type="submit">Choose</button>
                            <img src={this.animals[animal]} alt={animal}/>
                        </form>
                    )
                }
            </div>
        );
    }
}

export default App;
