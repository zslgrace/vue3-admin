import request from '@/utils/request';

export function getMobileInfo(telNo: string) {
  return request.post('queryPhoneArea.action',
    { phone_no: telNo },
    {
      baseURL: process.env.VUE_APP_TEST_URL,
      method: 'post',
    });
}

export function getMobileInfo2(telNo: string) {
  return request.get(`mobile_tel_segment.htm?tel=${telNo}`, { baseURL: process.env.VUE_APP_TEST_URL });
}
