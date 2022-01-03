import { objectExpression } from '@babel/types';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import 'semantic-ui-css/semantic.min.css'

import Count from './Count';
import Button from './Button';
// //WHAT IS STATE
// A state is a inbuilt objectExpression, means it is a reserver key in the React JS.
// The state holds the property value with the keys that belong to the components
// The state is mutable and can be changed by the setState method
// The state is managed from inside a Component.


//App component
class App extends Component{
    state = {
        count : 0    
    }

    incrementCount = id => {
        this.setState( prevState => {
            return{
                count : prevState.count +id
            }
        })
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <br />
                <Count counter={this.state.count} />
                <br />
               <Button incrementCount={this.incrementCount} value={1} />
               <Button incrementCount={this.incrementCount} value={2} />
               <Button incrementCount={this.incrementCount} value={5} />
               <Button incrementCount={this.incrementCount} value={10} />
               <Button incrementCount={this.incrementCount} value={20} />
               <Button incrementCount={this.incrementCount} value={50} />
               <Button incrementCount={this.incrementCount} value={1000} />
            </div>
        );
    };
};
ReactDom.render(<App />, document.querySelector('#root'));