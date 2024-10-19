import AccountCard from "@/app/component/common/accounts";
import Button from "@/app/component/common/archi-button";
import { useEffect, useState } from "react";

interface AccountProps {
  accountName: string;
  authorsPicture: string;
}

export async function fetchData(url: string): Promise<AccountProps[] | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch hubs data");
    }
    const data: AccountProps[] = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
}

const PeopleFeed = () => {
  const [accountData, setAccountData] = useState<AccountProps[]>([])
  const [isAccountFollowing, setIsAccountFollowing] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData('/accountsData.json')
      .then((data) => {
        if (data) {
          setAccountData(data);
          setIsAccountFollowing(new Array(data.length).fill(false));
        } else {
          setError('Unable to fetch hubs data');
        }
      })
      .finally(() => setLoading(false));
  }, []);

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
    <section className="flex flex-col gap-4 w-full xl:max-w-[700px] p-[13px] rounded-[16px] bg-[#F6F5F5]">
      {accountData.map((account, accountIndex) => (
        <AccountCard
          key={accountIndex}
          styles="shadow-custom rounded-[16px] p-4 lg:p-4 sm:p-2.5"
          text={account.accountName}
          profilePicture={account.authorsPicture}
        >
          <Button
            styles={`${
              isAccountFollowing[accountIndex]
                ? 'bg-[#D8D8D8] text-black'
                : 'bg-[#FFA809] text-white active:bg-[#CC8400]'
            } px-2 py-1 rounded-[16px] flex items-center gap-1 text-xs lg:text-sm lg:px-3 lg:py-1.5 min-w-[80px] sm:min-w-[120px] transition duration-100 ease-in-out`}
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

export default PeopleFeed;