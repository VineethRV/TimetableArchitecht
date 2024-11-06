
import React, { useState } from 'react';
import { Table, Button } from 'antd';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeslots = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

const Timetable = () => {
  // State to manage button statuses (Free or Busy)
  const [buttonStatus, setButtonStatus] = useState(
    weekdays.map(() => timeslots.map(() => 'Free'))
  );

  const handleButtonClick = (rowIndex, colIndex) => {
    const updatedStatus = [...buttonStatus];
    updatedStatus[rowIndex][colIndex] = updatedStatus[rowIndex][colIndex] === 'Free' ? 'Busy' : 'Free';
    setButtonStatus(updatedStatus);
  };

  const dataSource = weekdays.map((day, rowIndex) => ({
    key: rowIndex,
    day: day,
    buttons: timeslots.map((_, colIndex) => (
      <Button
        key={colIndex}
        style={{
          width: '75px',
          height: '32px',
          margin: '4px',
          color: buttonStatus[rowIndex][colIndex] === 'Busy' ? 'white' : '#636AE8FF',
          backgroundColor: buttonStatus[rowIndex][colIndex] === 'Busy' ? '#636AE8FF' : '#F2F2FDFF',
        }}
        onClick={() => handleButtonClick(rowIndex, colIndex)}
      >
        {buttonStatus[rowIndex][colIndex]}
      </Button>
    )),
  }));

  const columns = [
    {
      title: 'Timeslots',
      dataIndex: 'day',
      key: 'day',
      render: (text) => <strong style={{ fontFamily: 'Inter', fontWeight: '400' }}>{text}</strong>,
    },
    ...timeslots.map((slot, index) => ({
      title: slot,
      dataIndex: `button${index}`,
      key: `button${index}`,
      render: (_, record) => (
        <span style={{ fontFamily: 'Inter', fontWeight: '400' }}>{record.buttons[index]}</span>
      ),
    })),
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}> {/* Centering the table */}
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          size="middle"
        />
      </div>
    </div>
  );
};

export default Timetable;
