import React, { Component } from 'react';

export default class SomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [1, 2, 3]
        }
    }

    render() {

        return (
            <div>
                Good luck! :)
            </div>
        )
    }
}
