import React from 'react';
import { Cascader, Tag } from 'antd';

const RoomOptions: React.FC = () => {
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

  const tagRender = (props: { label: React.ReactNode; value: string; onClose: () => void }) => {
    const { label, onClose } = props;

    return (
      <Tag
        color="#F2F2FDFF"
        closable
        onClose={onClose}
        style={{ color: '#636AE8FF', borderRadius: '12px' }}
        closeIcon={<span style={{ color: 'red' }}>×</span>}
      >
        {label}
      </Tag>
    );
  };

  return (
    <div>
      <Cascader
        options={options}
        multiple
        maxTagCount="responsive"
        tagRender={(props) => {
          const label = props.label;
          return tagRender({ ...props, label });
        }}
        showCheckedStrategy={Cascader.SHOW_CHILD}
        placeholder="Default Classrooms"
        className="w-full font-normal"
      />
    </div>
  );
};

export default RoomOptions;
