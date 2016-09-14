import React, {PropTypes} from 'react';

export default class Input extends  React.Component {

    //https://facebook.github.io/react/docs/top-level-api.html
    //https://facebook.github.io/react/docs/reusable-components.html
    static propTypes = {
        type: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        id: PropTypes.string,
        placeholder: PropTypes.string,
        //value: PropTypes.string,
        //autoFocus: React.PropTypes.bool,
        //required: React.PropTypes.string,
        name: PropTypes.string,
        autocomplete: PropTypes.oneOf(['on', 'off']),
        onChange: PropTypes.func,
        //ref: PropTypes.string,
        //value: PropTypes.string
        //当然我们只选择我们想要的属性
    };


    render() {

        const {
            type,
            className,
            id,
            placeholder,
            name,
            autocomplete,
            onChange} = this.props;

        return (
            <input
                type={type}
                className={className}
                id={id}
                placeholder={placeholder}
                name={name}
                autocomplete={autocomplete}
                onChange={onChange}
            />
        );
    }
}
