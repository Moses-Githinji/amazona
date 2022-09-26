import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import product from './product';
import user from './user';
import order from './order';
import orderItem from './orderItem';
import paymentResult from './paymentResult';
import shippingAddress from './shippingAddress';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
    user,
    order,
    orderItem,
    paymentResult,
    shippingAddress,
  ]),
});
