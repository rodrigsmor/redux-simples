import React from 'react';
import Card from './Card';

const Media = (props) => {
    return (
        <Card title={'Soma dos Números'} blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ 18 }</strong>
                </span>
            </div>
        </Card>
    );
}

export default Media;