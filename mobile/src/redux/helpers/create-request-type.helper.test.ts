import { createRequestTypes, defaultTypes } from './create-request-type.helper';

describe('CreateRequestTypeHelper', () => {
  it('should create reuest types', async () => {
    const type = createRequestTypes('SOME_STRING', [
      'NEW_ONE',
      ...defaultTypes,
    ]);
    expect(type.REQUEST).toBe('SOME_STRING_REQUEST');
    expect(type.SUCCESS).toBe('SOME_STRING_SUCCESS');
    expect(type.FAILURE).toBe('SOME_STRING_FAILURE');
    expect(type.NEW_ONE).toBe('SOME_STRING_NEW_ONE');
  });
});
