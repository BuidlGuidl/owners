import { gql, useQuery } from "urql";
import contracts from "~~/generated/hardhat_contracts";

const WithdrawalsQuery = gql`
  query Withdrawls($cohortAddress: String!) {
    cohortWithdrawals(where: { cohortContractAddress: $cohortAddress }, orderBy: "timestamp", orderDirection: "desc") {
      items {
        reason
        builder
        amount
        timestamp
        id
      }
    }
  }
`;

export const useCohortWithdrawEvents = () => {
  const [{ data: newWithdrawEventsData, fetching: isLoadingNew }] = useQuery({
    query: WithdrawalsQuery,
    variables: {
      cohortAddress: contracts[1][0].contracts.SandGardenStreams.address,
    },
  });

  // const [{ data: oldWithdrawEventsData, fetching: isLoadingOld }] = useQuery({
  //   query: WithdrawalsQuery,
  //   variables: {
  //     cohortAddress: contracts[10][0].contracts._SandGardenStreamsOld.address,
  //   },
  // });

  const newContractWithdrawEvents = newWithdrawEventsData?.cohortWithdrawals.items || [];
  //const oldContractWithdrawEvents = oldWithdrawEventsData?.cohortWithdrawals || [];

  const data = [...newContractWithdrawEvents /*, ...oldContractWithdrawEvents*/];

  const isLoading = isLoadingNew; // || isLoadingOld;

  return { data, isLoading };
};
