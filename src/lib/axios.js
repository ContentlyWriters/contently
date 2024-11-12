'use client';

import axios from 'axios';

export  const axiosInstance = axios.create({
  baseURL: 'https://contentlywriters.com/api/',
  withCredentials: true,
});
