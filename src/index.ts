const { APIGatewayEvent, Context, Callback, APIGatewayProxyResult, Handler } = require('aws-lambda');

const { JSDOM } = require('jsdom');

const d3 = require('d3');

export const handler: Handler = async (
    event: APIGatewayEvent,
    context: Context,
    callback: Callback
  ): Promise<APIGatewayProxyResult> => {
    
    const dom = new JSDOM('');
  (global as any).document = dom.window.document;
  
  const svg = d3.select(dom.window.document.body)
    .append('svg')
    .attr('width', 300)
    .attr('height', 300)
    .attr('style', `background: ${ '#ffffff' }`);

    return {
        statusCode: 200,
        body: dom.window.document.querySelector('svg')?.outerHTML!,
    };
};
