import React from 'react';
import { Cascader, Tag } from 'antd';
import type { CustomTagProps } from 'rc-cascader/lib/Components/Tag';

const RoomOptions: React.FC = () => {
  // Define the type of props correctly to avoid errors
  const tagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props;

    return (
      <Tag
        color="#F2F2FDFF"
        closable={closable}
        onClose={onClose}
        className="rounded-xl text-indigo-600 bg-gray-100"
        closeIcon={<span className="text-red-500">×</span>}
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
        className="w-full font-normal"
      />
    </div>
  );
};

export default RoomOptions;
