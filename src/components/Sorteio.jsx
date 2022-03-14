import React from 'react';
import Card from './Card';

const Sorteio = (props) => {
    //const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title={'Sorteio de um número: '} green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ 10 }</strong>
                </span>
            </div>
        </Card>
    );
}

export default Sorteio;