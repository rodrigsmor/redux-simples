import React from 'react';
import Card from './Card';

const Media = (props) => {
    return (
        <Card title={'Média dos Números'} purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    );
}

export default Media;