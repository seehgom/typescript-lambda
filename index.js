import { D3Node } from 'd3-node';
export const handler = async (
    event: any,
    context: any,
    callback: any
  ) => {
  const d3n = new D3Node()
  d3n.createSVG(10,20)
    .attr('width', 300)
    .attr('height', 300)
    .attr('style', `background: ${ '#ffffff' }`);

    return {
        statusCode: 200,
        body: d3n.svgString(),
    };
};
