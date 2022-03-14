import React from 'react';
import Card from './Card';

const Sorteio = ({ min, max }) => {
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title={'Sorteio de um número: '} green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ aleatorio }</strong>
                </span>
            </div>
        </Card>
    );
}

export default Sorteio;