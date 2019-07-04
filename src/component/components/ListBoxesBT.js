import React from 'react';
import DualListBox from 'react-dual-listbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const options = [
    { value: 'tierra', label: 'Earth' },
    { value: 'picture', label: 'Picture' },
    { value: 'sun', label: 'Sun' },
    { value: 'ray', label: 'Ray' },
    { value: 'Step', label: 'Step' },
    { value: 'place', label: 'Place' },
    { value: 'car', label: 'Car' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'game', label: 'Game' },
];

export default class ListBoxesBT extends React.Component {
    state = { selected: ['tierra', 'picture'] };

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(selected) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;

        return (
            <DualListBox
                options={options}
                selected={selected}
                onChange={this.onChange}
                icons={{
                    moveLeft: <FontAwesomeIcon icon={faChevronLeft} />,
                    moveAllLeft: [
                        <FontAwesomeIcon key={0} icon={faChevronLeft} />,
                        <FontAwesomeIcon key={1} icon={faChevronLeft} />
                    ],
                    moveRight: <FontAwesomeIcon icon={faChevronRight} />,
                    moveAllRight: [
                        <FontAwesomeIcon key={0} icon={faChevronRight} />,
                        <FontAwesomeIcon key={1} icon={faChevronRight} />
                    ],
                    moveDown: <FontAwesomeIcon key={0} icon={faChevronDown} />,
                    moveUp:   <FontAwesomeIcon key={1} icon={faChevronUp} />,
                }}
            />
        );
    }
}
