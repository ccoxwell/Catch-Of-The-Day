import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    //ES6 syntax does not implicitly bind this to the component
    // constructor() {
    //     super(); //first creates React.Component
    //     this.goToStore = this.goToStore.bind(this); //final 'this' refers to the StorePicker
    // }

    goToStore(event) {
        event.preventDefault();
        //first grab text from store
        const storeId = this.storeInput.value;

        //second, transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render() {
        //you can only return here or inside your parent element down there
        return (

            <form className="store-selector" onSubmit={ (e) => {this.goToStore(e)} }>
                {/*hello, this is how you comment in JSX. */}
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => { this.storeInput = input}} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;