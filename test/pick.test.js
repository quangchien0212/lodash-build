import pick from "../pick";

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

describe("pick", function () {
  test('should return the new object with picked keys', () => {
    const result = pick(data, ['collections', 'status'])
    expect(result.collections).toEqual(data.collections)
    expect(result.status).toEqual(data.status)

    expect(pick(data, 'collections', 'status').collections).toEqual(data.collections)
  })
})