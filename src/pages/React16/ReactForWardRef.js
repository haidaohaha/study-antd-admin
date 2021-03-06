import React from 'react';

const TextInput = React.forwardRef((props, ref) => <input type="text" placeholder="Hello forwardRef" ref={ref} />);
const inputRef = React.createRef();
class ReactForWardRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = event => {
        event.preventDefault();
        alert('input value is:' + inputRef.current.value);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default ReactForWardRef;
