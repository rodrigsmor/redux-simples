import React from 'react';
import Card from './Card';

const Media = ({ min, max }) => {
    return (
        <Card title={'Soma dos Números'} blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    );
}

export default Media;