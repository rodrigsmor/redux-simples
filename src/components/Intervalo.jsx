import './Intervalo.css';
import React from 'react';
import Card from './Card';

const Intervalo = (props) => {
    return (
        <Card title={'Intervalo de Números'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Minimo: </strong>
                    <input type={'number'} value={0} readOnly />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type={'number'} value={0} readOnly />
                </span>
            </div>
        </Card>
    );
}

export default Intervalo;