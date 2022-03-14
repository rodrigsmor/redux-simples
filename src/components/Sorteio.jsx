import React from 'react';
import Card from './Card';

const Sorteio = (props) => {
    return (
        <Card title={'Sorteio de um número: '} green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>8</strong>
                </span>
            </div>
        </Card>
    );
}

export default Sorteio;