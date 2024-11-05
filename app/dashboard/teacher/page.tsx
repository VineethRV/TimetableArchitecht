'use client';
import React from 'react';
import { InfoCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Input, Select, Tooltip, Upload } from 'antd';
import Timetable from '@/app/components/timetable';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const MainPageContent: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div className='form'>
      <div className='back'>&#8592; Back
      <Upload>
        <Button icon={<UploadOutlined /> } style={{borderColor:'#636AE8FF', color:'#636AE8FF'}}>Import</Button>
      </Upload>
      </div>
      <div style={{marginLeft:'20px',marginTop:'20px'}}>
      <Form
        {...formItemLayout}
        form={form}
        layout="vertical"
        requiredMark >
        <Form.Item label="Teacher Name" required>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Initials" required>
          <Input placeholder="Initials" />
        </Form.Item>
        <Form.Item label="Designation" required>
          <Input placeholder="Designation" />
        </Form.Item>
        <Form.Item
        label="Department"
        name="Select">
        <Select />
      </Form.Item>
      <label>
          <span>Schedule</span>
          <Tooltip title="Tooltip with customize icon" icon={<InfoCircleOutlined />}>
            <InfoCircleOutlined style={{ marginLeft: '8px', color: '#636AE8FF' }} />
          </Tooltip>
      </label>
      <div style={{display:'flex',justifyContent:'left'}}>
      <Timetable />
      </div>
      <div style={{display:'flex',justifyContent:'right',width:'55vw'}}>
        <Form.Item>
          <Button style={{borderColor: '#636AE8FF', color: '#636AE8FF', marginRight:'30px',width:'75px',height:'32px'}}>Clear</Button>
        </Form.Item>
        <Form.Item>
          <Button style={{backgroundColor:'#636AE8FF', color:'#FFFFFF',width:'75px',height:'32px'}}>Submit</Button>
        </Form.Item>
      </div>
      </Form>
      </div>
    </div>
  );
};

export default MainPageContent;
