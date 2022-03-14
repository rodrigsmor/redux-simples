import './Intervalo.css';
import React from 'react';
import Card from './Card';

const Intervalo = (props) => {
    const { min, max, onMinChanged, onMaxChanged } = props

    return (
        <Card title={'Intervalo de Números'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Minimo: </strong>
                    <input type={'number'} value={min} 
                        onChange={e => onMinChanged(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type={'number'} value={max}
                        onChange={e => onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    );
}

export default Intervalo;