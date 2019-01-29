import React, { Component } from 'react';
import './App.css';

class App extends Component {
    ref = React.createRef();
    state = {
        message: '',
        currentAnimal: '',
    };

    componentDidMount() {
        this.iframe = this.ref.current;
        this.listener = window.addEventListener('message', (e) => {
            if (typeof e.data === 'string') this.setState({ message: e.data });
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.removeEventListener('message', this.listener);
    }

    navigatorHandler = (message) => {
        this.setState({ currentAnimal: message });
        this.iframe.contentWindow.postMessage(message, '*');
    };

    render() {
        const { message, currentAnimal } = this.state;
        const animals = [ 'cat', 'dog', 'mouse', 'giraf', 'elephant'];
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{currentAnimal}</h1>
                    <nav>
                        <div>
                            {
                                animals.map(animal =>
                                    <div id="the-nav">
                                        <button type="button" className={animal === currentAnimal ? 'green' : 'red'} onClick={() => this.navigatorHandler(animal)}>{ animal }</button>
                                    </div>
                                )
                            }
                        </div>
                    </nav>
                </header>
                <main>
                    <iframe
                        ref={this.ref}
                        title="the-iframe-messenger"
                        src="http://localhost:3002"
                        width={1000}
                        height={600}
                    />

                    {
                        message !== '' && message === currentAnimal && <div>You have guessed the animal!</div>
                    }
                    {
                        message !== '' && message !== currentAnimal && <div>Are you sure about that?</div>
                    }
                </main>
            </div>
        );
    }
}

export default App;
