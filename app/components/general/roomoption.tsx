import React from 'react';
import { Cascader } from 'antd';

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

  const tagRender = (props: { label: React.ReactNode; onClose: () => void }) => {
    const { label, onClose } = props;

    return (
      <div
        className="flex items-center bg-[#F2F2FDFF] text-[#636AE8FF] rounded-full px-3 text-sm m-1 font-semibold"
      >
        {label}
        {(
          <button
            onClick={onClose}
            className="ml-2 text-red-500 text-lg cursor-pointer hover:text-red-700"
          >
            ×
          </button>
        )}
      </div>
    );
  };

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
