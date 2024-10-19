import AccountCard from '@/app/component/common/accounts';
import Button from '@/app/component/common/archi-button';
import { useEffect, useState } from 'react';

interface AccountProps {
  accountName: string;
  authorsPicture: string;
}

export async function fetchData(url: string): Promise<AccountProps[] | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch accounts data");
    }
    const data: AccountProps[] = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
}

const AccountSection = () => {
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
          setError('Unable to fetch accounts data');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAccountFollowClick = (index: number) => {
    setIsAccountFollowing(prev => prev.map((status, i) => i === index ? !status : status));
  };

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      {accountData.map((account, accountIndex) => (
        <AccountCard
          key={accountIndex}
          styles="shadow-md rounded-2xl p-4 bg-white"
          text={account.accountName}
          profilePicture={account.authorsPicture}
        >
          <Button
            styles={`${
              isAccountFollowing[accountIndex]
                ? 'bg-gray-300 text-black'
                : 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700'
            } px-3 py-1.5 rounded-2xl flex items-center gap-1 min-w-[80px] sm:min-w-[120px] transition duration-200 ease-in-out text-sm`}
            handleClick={() => handleAccountFollowClick(accountIndex)}
          >
            <p>{isAccountFollowing[accountIndex] ? 'Following' : 'Follow'}</p>
            {!isAccountFollowing[accountIndex] && (
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 21" fill="none" className="w-4 h-4">
                <path d="M5.66797 10.833H10.668M10.668 10.833H15.668M10.668 10.833V5.83301M10.668 10.833V15.833" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
          </Button>
        </AccountCard>
      ))}
    </div>
  );
}

export default AccountSection;