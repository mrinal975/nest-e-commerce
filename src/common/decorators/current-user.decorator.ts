import { createParamDecorator } from '@nestjs/common';

export const currentUser = createParamDecorator((data, req) => {
  return req.user;
}); // data is the data passed to the decorator
