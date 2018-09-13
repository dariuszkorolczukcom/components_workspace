import React from 'react';

class Count extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 }
    }

    onclick(type) {
        this.setState(prevState => {
            return {
                count: type === 'add' ?
                    prevState.count + 1 : prevState.count - 1
            }
        });
    }

    render() {
        return (
            <div>
                <input type='button'
                    onClick={this.onclick.bind(this, 'add')}
                    value='Inc' />
                <input type='button'
                    onClick={this.onclick.bind(this, 'sub')}
                    value='Dec'
                />
                Count:
            {this.state.count}
            </div>
        )
    }
}

export default Count;