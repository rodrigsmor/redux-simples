import './Intervalo.css';
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Intervalo = (props) => {
    const { min, max /*, onMinChanged, onMaxChanged */ } = props

    return (
        <Card title={'Intervalo de Números'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Minimo: </strong>
                    <input type={'number'} value={min} readOnly
                      //  onChange={e => onMinChanged(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type={'number'} value={max}
                       readOnly // onChange={e => onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo);