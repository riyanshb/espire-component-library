import React from 'react';
import './erf_grid.css';
import { useState } from 'react';

export interface GridProps {
  rows: number;
  columns: number;
  cardsPerRow: number;
}

interface UserData {
  name: string;
  description: string;
}

const dummyData: UserData[] = [
  { name: 'Force Truck', description: 'Heavy Load Truck' },
  { name: 'Jawa Truck', description: 'Jawa Load Truck' },
  { name: 'Tata Truck', description: 'Tata Load Truck' },
  { name: 'Mount Truck', description: 'Mount Load Truck' },
  { name: 'Ace Truck', description: 'Tata Load Truck' },
  { name: 'Force Truck', description: 'Heavy Load Truck' },
  { name: 'Force Truck', description: 'Heavy Load Truck' },
  { name: 'Jawa Truck', description: 'Heavy Load Truck' },
  { name: 'Tata Truck', description: 'Heavy Load Truck' },
  { name: 'Mount Truck', description: 'Heavy Load Truck' },
  { name: 'Ace Truck', description: 'Heavy Load Truck' },
  { name: 'Force Truck', description: 'Heavy Load Truck' },
];

const Grid: React.FC<GridProps> = ({ rows, columns, cardsPerRow }) => {
  const totalCards = rows * columns;
  const gridTemplateColumns = `repeat(${cardsPerRow}, 1fr)`;
  return (
    <div className='grid' style={{ gridTemplateColumns }}>
      {[...Array(totalCards)].map((_, index) => (
        <div key={index} className='card'>
          <div>
            <img
              style={{ height: '100px', width: '100px' }}
              src={`assets/flags/${index + 1}.png`}
              alt={`Truck ${index + 1}`}
            />
          </div>
          <div style={{ marginLeft: '20px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {dummyData[index]?.name}
            </p>
            <p style={{ fontSize: '16px' }}>{dummyData[index]?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
