import { handler } from '../src';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';


describe('Lambda Handler', () => {
  
  it('should return data from S3', async () => {
    const event: APIGatewayEvent = {
      multiValueHeaders: {},
      multiValueQueryStringParameters: {},
      // populate with required event properties
      body: null,
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '/',
      pathParameters: null,
      queryStringParameters: null,
      stageVariables: null,
      requestContext: {
        accountId: '',
        apiId: '',
        authorizer: null,
        protocol: '',
        httpMethod: '',
        identity: {
          accessKey: '',
          accountId: '',
          caller: '',
          cognitoAuthenticationProvider: '',
          cognitoAuthenticationType: '',
          cognitoIdentityId: '',
          cognitoIdentityPoolId: '',
          sourceIp: '',
          user: '',
          userAgent: '',
          userArn: '',
          apiKey: null,
          apiKeyId: null,
          clientCert: null,
          principalOrgId: null
        },
        path: '',
        requestId: '',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
        stage: '',
      },
      resource: ''
    };
    
    const context: Context = {} as any;
    const callback: Callback = (error: any, result: any) => {
      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify({ Body: 'mock data' }));
    };
    
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({ message: 'Hello, world!' }));
  });
});