import React, { useEffect, useState } from 'react';
import styles from '../community.module.css';
import Button from '@/app/component/common/archi-button';
import AccountCard from '@/app/component/common/accounts';

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

const AccountSection = () => {
  const [accountData, setAccountData] = useState<AccountProps[]>([])
  const [isAccountFollowing, setIsAccountFollowing] = useState<boolean[]>(new Array(accountData.length).fill(false));
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData('/accountsData.json')
      .then((data) => {
        if (data) {
          setAccountData(data);
        } else {
          setError('Unable to fetch hubs data');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAccountFollowClick = (index: number) => {
    const updatedFollowStatus = [...isAccountFollowing];
    updatedFollowStatus[index] = !updatedFollowStatus[index];
    setIsAccountFollowing(updatedFollowStatus);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`${styles.suggestions_ctn} flex flex-col gap-4`}>
      {accountData.map((account, accountIndex) => (
        <AccountCard
          key={accountIndex}
          styles={`${styles.account_card} shadow-custom rounded-[16px] p-4`}
          text={account.accountName}
          profilePicture={account.authorsPicture}
        >
          <Button
            styles={`${isAccountFollowing[accountIndex] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400] transition ease duration-100ms'} px-[13px] py-[6px] rounded-[16px] flex gap-1 text-[#fff]`}
            handleClick={() => handleAccountFollowClick(accountIndex)}
          >
            <p>{isAccountFollowing[accountIndex] ? 'Following' : 'Follow'}</p>
            {!isAccountFollowing[accountIndex] && <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M5.66797 10.833H10.668M10.668 10.833H15.668M10.668 10.833V5.83301M10.668 10.833V15.833" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
          </Button>
        </AccountCard>
      ))}
    </div>
  );
}

export default AccountSection;