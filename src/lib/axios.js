'use client';

import axios from 'axios';

export  const axiosInstance = axios.create({
  baseURL: 'https://contentlywriters.com:8088/',
  withCredentials: true,
});
