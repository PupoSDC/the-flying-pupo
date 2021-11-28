import { GatsbyNode } from "gatsby";
import { flights, flightLog } from "../content/flights";
import { GetAllFlightIdsQuery } from "../graphql";

const IS_DEV =  (process.env.NODE_ENV === "development");

export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic"
    }
  })
}

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const filteredFlights = IS_DEV ? flights.slice(-5) : flights;

  filteredFlights.forEach((flight) => actions.createNode({
    ...flight,
    id: flight.identification.id,
    internal: {
      type: 'Flight',
      contentDigest: createContentDigest(flight),
    },
  }));

  actions.createNode({
    ...flightLog,
    id: createNodeId("flight-log"),
    internal: {
      type: 'FlightLog',
      contentDigest: createContentDigest(flightLog),
    }
  })
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  const { data } = await graphql<GetAllFlightIdsQuery>(`
    query GetAllFlightIds {
      allFlight {
        nodes {
          id
        }
      }
    }
  `)

  data.allFlight.nodes.forEach(({ id }) => {
    actions.createPage({
      path: `/flights/${id.toLowerCase()}`,
      component: require.resolve(`../templates/Flight.tsx`),
      context: { id },
    })
  })
}