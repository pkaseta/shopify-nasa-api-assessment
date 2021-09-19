import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const notify = (message) => toast(`${message}`, {
    toastId: 'custom-id-yes'
});

