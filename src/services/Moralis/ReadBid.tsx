import { useWeb3Contract } from "react-moralis";
import { AuctionABI } from "../../abi/AuctionABI";
import { settings } from "../../utils/Settings";
import { parseEther } from "ethers/lib/utils";

export const ReadCurrentBid = () => {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: AuctionABI,
      contractAddress: settings.contract,
      functionName: "bidPrice",
    });

  return (
    <>
      {error && <p>{error.message}</p>}
      <button
        onClick={() => {
          runContractFunction();
          console.log(data);
        }}
        disabled={isFetching || isLoading}
      >
        Fetch data
      </button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </>
  );
};
