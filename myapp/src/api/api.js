import { get, post } from '@/util/http';
export const login = params => post('Login', params);
export const reg = params => post('Reg', params);