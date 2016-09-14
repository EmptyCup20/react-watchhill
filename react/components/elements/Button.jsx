import React, {PropTypes} from 'react';


export default class Button extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
        dataIndex: PropTypes.number
    };

    render() {
        const {type,className,onClick,dataIndex} = this.props;

        return (
            <button type={type} className={className} onClick={onClick} data-index={dataIndex}>
                {this.props.children}
            </button>
        );
    }
}