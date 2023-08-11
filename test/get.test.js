import get from "../get";

const data = {
  collections: [
    {},
    null,
    null,
    {
      nodes: {
        modecule: "H2O"
      },
      hasDetails: false,
    },
    undefined
  ],
  status: 200,
  connections: 0,
}


describe("debounce", function () {
  it('should return the correct data', () => {
    expect(get(data, 'status')).toEqual(200);
    expect(get(data, '[4]', 0)).toEqual(0);
    expect(get(data, 'collections.3.nodes.modecule')).toEqual('H2O')
    expect(get(data, 'collections[3][nodes][modecule]')).toEqual('H2O')
  })
})