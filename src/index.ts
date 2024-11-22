import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
// @ts-ignore
export const handler = async ( event: APIGatewayProxyEvent ): Promise<APIGatewayProxyResult> => {
  try {
    const { D3Node } = await import('d3-node');
    // Your logic here
    const d3n = new D3Node()      // initializes D3 with container element
    d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
    
    const message = d3n.svgString() // output: <svg width=10 height=20 xmlns="http://www.w3.org/2000/svg"><g></g></svg>;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};