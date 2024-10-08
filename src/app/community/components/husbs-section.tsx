import { useEffect, useState } from "react";
import HubsCard from "@/app/component/common/hubs-card";
import Button from "@/app/component/common/archi-button";
import styles from '../community.module.css';
import { useRouter } from "next/navigation";

interface HubsProps {
  hubName: string;
  members: number;
}

export async function fetchData(url: string): Promise<HubsProps[] | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch hubs data");
    }
    const data: HubsProps[] = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
}

const HubSection = () => {
  const [hubsData, setHubsData] = useState<HubsProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchData('/hubsData.json')
      .then((data) => {
        if (data) {
          setHubsData(data);
        } else {
          setError('Unable to fetch hubs data');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleJoinHub = () => {
    router.push('/hubs')
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div className='flex flex-col gap-4'>
      {hubsData.map((hub, hubIndex) => (
        <HubsCard
          key={hubIndex}
          styles={`${styles.hubs_card} shadow-custom rounded-[16px] p-4`}
          text={`${hubIndex + 1}.  ${hub.hubName}`}
          numbers={hub.members}
        >
          <Button
            styles={`${styles.join_hub} bg-[#FFE4B2] px-[13px] py-[6px] rounded-[16px] flex gap-1
          `}
            handleClick={handleJoinHub}
          >
            <p>Join</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M5.66797 10.1665H10.668M10.668 10.1665H15.668M10.668 10.1665V5.1665M10.668 10.1665V15.1665" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </HubsCard>
      ))}
    </div>

  );
}

export default HubSection;