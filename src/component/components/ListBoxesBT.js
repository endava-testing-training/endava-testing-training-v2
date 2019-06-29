import React from 'react';
import DualListBox from 'react-dual-listbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { fachevron } from "@fortawesome/free-solid-svg-icons";


const options = [
    { value: 'luna', label: 'Moon' },
    { value: 'phobos', label: 'Phobos' },
    { value: 'deimos', label: 'Deimos' },
    { value: 'io', label: 'Io' },
    { value: 'europa', label: 'Europa' },
    { value: 'ganymede', label: 'Ganymede' },
    { value: 'callisto', label: 'Callisto' },
    { value: 'mimas', label: 'Mimas' },
    { value: 'enceladus', label: 'Enceladus' },
    { value: 'tethys', label: 'Tethys' },
    { value: 'rhea', label: 'Rhea' },
    { value: 'titan', label: 'Titan' },
    { value: 'iapetus', label: 'Iapetus' },
];



export default class ListBoxesBT extends React.Component {
    state = { selected: ['phobos', 'titan'] };

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
                  moveLeft: <span className="fa fa-chevron-left" />,
                  moveAllLeft: [
                      <span key={0} className="fa fa-chevron-left" />,
                      <span key={1} className="fa fa-chevron-left" />,
                  ],
                  moveRight: <span className="fa fa-chevron-right" />,
                  moveAllRight: [
                      <span key={0} className="fas fa-chevron-right" />,
                      <span key={1} className="fas fa-chevron-right" />,
                  ],
                  moveDown: <span className="fa fa-chevron-down" />,
                  moveUp: <span className="fa fa-chevron-up" />,
              }}
            />
        );
    }
}
