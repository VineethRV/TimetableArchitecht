import { Button, Card, Typography, Spin } from "antd";
import React, { useState } from "react";

const { Title, Paragraph } = Typography;

const ConfirmPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate form submission process
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex justify-center py-6">
      <Card className="w-96 text-center rounded-lg shadow-md">
        <Title level={3} className="text-gray-800">
          Confirm Your Registration
        </Title>
        <Paragraph className="text-gray-600 text-lg">
          Please click the button below to confirm your registration.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          className={`bg-green-600 border-green-600 text-white rounded-md w-full mt-4 ${
            loading ? "cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          loading={loading}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default ConfirmPage;
