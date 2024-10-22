import AccountCard from "@/app/component/common/accounts";
import Button from "@/app/component/common/archi-button";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/fetchData";

interface AccountProps {
  accountName: string;
  authorsPicture: string;
}

const AccountSection = () => {
  const [accountData, setAccountData] = useState<AccountProps[]>([]);
  const [isAccountFollowing, setIsAccountFollowing] = useState<boolean[]>(
    new Array(accountData.length).fill(false)
  );
  const { data, loading, error } = useFetch(
    "/accountsData.json",
    "error fetching hubs data"
  );

  useEffect(() => {
    setAccountData(data);
  }, [data, loading, error]);

  const handleAccountFollowClick = (index: number) => {
    setIsAccountFollowing(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  if (loading) return <p className="bg-[#F6F5F5] w-full h-screen py-4 pl-4 sm:pl-0">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-col gap-4 w-full xl:max-w-[700px] pb-4 sm:py-3 sm:px-3 rounded-bl-2xl rounded-br-2xl sm:rounded-2xl bg-[#F6F5F5]">
      {accountData.map((account, accountIndex) => (
        <AccountCard
          key={accountIndex}
          styles="shadow-custom rounded-[16px] p-3 sm:p-2.5 lg:p-4 "
          text={account.accountName}
          profilePicture={account.authorsPicture}
        >
          <Button
            styles={`${isAccountFollowing[accountIndex] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400]'} h-[30px] sm:h-auto px-2 py-1 rounded-[16px] flex items-center gap-0 sm:gap-1 text-xs lg:text-sm lg:px-3 lg:py-1.5 w-[80px] sm:w-[120px] transition duration-100 ease-in-out`}
            handleClick={() => handleAccountFollowClick(accountIndex)}
          >
            <p>{isAccountFollowing[accountIndex] ? 'Following' : 'Follow'}</p>
            {!isAccountFollowing[accountIndex] && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                <path d="M5.66797 10.833H10.668M10.668 10.833H15.668M10.668 10.833V5.83301M10.668 10.833V15.833" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </Button>
        </AccountCard>
      ))}
    </section>
  );
};

export default AccountSection;