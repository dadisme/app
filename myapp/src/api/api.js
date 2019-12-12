import { get, post } from '@/util/http';
export const login = params => post('Login', params);
export const reg = params => post('Reg', params);
export const reset = params => post('Reset', params);
export const aboutUser = params => post('aboutUser', params);
export const aboutHouse = params => post('aboutHouse', params);
export const aboutManager = params => post('aboutManager', params);

