import React from 'react';
import { Cascader, Tag } from 'antd';

const RoomOptions: React.FC = () => {
  const tagRender = (props: any) => {
    const { label, closable, onClose } = props;

    return (
      <Tag
        color="#F2F2FDFF"
        closable={closable}
        onClose={onClose}
        style={{ borderRadius: '12px', color: '#636AE8FF' }}
        closeIcon={<span style={{ color: 'red' }}>×</span>}
      >
        {label}
      </Tag>
    );
  };

  const options = [
    {
      label: 'CSE',
      value: 'CSE',
      children: [
        { label: 'CSE101', value: 'CSE101' },
        { label: 'CSE102', value: 'CSE102' },
        { label: 'CSE103', value: 'CSE103' },
      ],
    },
    {
      label: 'ISE',
      value: 'ISE',
      children: [
        { label: 'ISE101', value: 'ISE101' },
        { label: 'ISE102', value: 'ISE102' },
        { label: 'ISE103', value: 'ISE103' },
      ],
    },
  ];

  return (
    <div>
    <Cascader
      options={options}
      multiple
      maxTagCount="responsive"
      tagRender={tagRender}
      showCheckedStrategy={Cascader.SHOW_CHILD}
      placeholder="Default Classrooms"
      style={{width:'100%',
        fontWeight:'400'
      }}
    />
    </div>
  );
};

export default RoomOptions;