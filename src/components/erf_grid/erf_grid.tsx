import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface Props {
  users: User[];
  rows?: number; // Make rows optional
  columns?: number; // Make columns optional
}

const GridComponent: React.FC<Props> = ({ users, rows = 5, columns = 5 }) => {
  const totalCells = rows * columns;

  const truncatedUsers = users.slice(0, totalCells);

  return (
    <div className='grid-container'>
      {truncatedUsers.map((user, index) => (
        <div key={user.id} className='card' style={{ display: 'flex' }}>
          <div className='avatar'>
            <img
              src={user.avatarUrl}
              alt='Avatar'
              style={{ height: '100px' }}
            />
          </div>
          <div className='info'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
