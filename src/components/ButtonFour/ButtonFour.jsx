import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './ButtonFour.scss';

function ButtonFour() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button 
        className="opened-button" 
        type="primary"
        onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}

export default ButtonFour;