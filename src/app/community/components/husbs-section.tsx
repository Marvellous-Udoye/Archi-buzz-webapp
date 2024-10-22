import { useEffect, useState, useCallback } from "react";
import HubsCard from "@/app/component/common/hubs-card";
import Button from "@/app/component/common/archi-button";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/fetchData";

interface HubsProps {
  hubName: string;
  members: number;
}

const HubSection = () => {
  const [hubsData, setHubsData] = useState<HubsProps[]>([]);
  const router = useRouter();
  const { data, loading, error } = useFetch(
    "/hubsData.json",
    "Unable to fetch hubs data"
  );

  useEffect(() => {
    if (data && !loading && !error) {
      setHubsData(data);
      console.log(data);
    }
  }, [data, loading, error]);

  const handleJoinHub = useCallback(() => {
    router.push("/hubs");
  }, [router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!hubsData.length) return <p>No hubs available.</p>;

  return (
    <div className="flex flex-col gap-4">
      {hubsData.map((hub, hubIndex) => (
        <HubsCard
          key={hubIndex}
          styles="shadow-custom rounded-[16px] p-4 lg:p-4 sm:p-2.5"
          text={`${hubIndex + 1}.  ${hub.hubName}`}
          numbers={hub.members}
        >
          <Button
            styles="bg-[#FFE4B2] px-2 py-1 rounded-[16px] flex items-center gap-0 sm:gap-1 text-xs lg:text-sm lg:px-3 lg:py-1.5"
            handleClick={handleJoinHub}
          >
            <p>Join</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 21 21" fill="none">
              <path d="M5.66797 10.1665H10.668M10.668 10.1665H15.668M10.668 10.1665V5.1665M10.668 10.1665V15.1665" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </HubsCard>
      ))}
    </div>
  );
};

export default HubSection;
