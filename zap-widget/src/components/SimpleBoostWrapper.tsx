import { SimpleBoostButton } from "simple-boost/react";
import { useClient } from "../context";

const SimpleBoostWrapper = ({
  address,
  amount = 1,
  currency = "usd",
  className = "",
}: {
  address: string;
  amount?: number;
  currency?: string;
  className?: string;
}) => {
  const { setInvoice } = useClient();
  const handleSuccess = (e: Event) => {
    const customEvent = e as CustomEvent<{ pr: string }>;
    setInvoice(customEvent.detail.pr);
  };

  return (
    <SimpleBoostButton
      address={address}
      amount={amount}
      currency={currency}
      onSuccess={(e) => handleSuccess(e)}
      className={className}
    >
      {amount}
    </SimpleBoostButton>
  );
};

export default SimpleBoostWrapper;
