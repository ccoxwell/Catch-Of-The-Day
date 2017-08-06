import React from 'react'
import Order from './Order';
import Inventory from './Inventory';
import Header from './Header';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this)
        this.loadSamples = this.loadSamples.bind(this)
        this.addToOrder = this.addToOrder.bind(this)
        //initial state
        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        //update our state
        //create copy of state
        const fishes = {...this.state.fishes}
        //add new fish
        const timestamp = Date.now()
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({fishes})
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder(key) {
        //make copy of state
        const order = {...this.state.order}
        //update or add the new number of fish ordered
        order[key] = order[key] + 1 || 1
        this.setState({order})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Nifty Tagline" />
                    <ul className="list-of-fishes">
                    {
                        Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} />)
                    }
                    </ul>
                </div>

                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;