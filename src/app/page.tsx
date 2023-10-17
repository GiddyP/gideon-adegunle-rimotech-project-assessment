import AppLayout from "@src/components/AppLayout";
import DiscoverOtherListeners from "@src/components/PageFragment/DiscoverOtherListeners";
import PickOfTheWeek from "@src/components/PageFragment/PickOfTheWeek";
import PodcastHostSuggestions from "@src/components/PageFragment/PodcastHostSuggestions";
import PopularAndTrending from "@src/components/PageFragment/PopularAndTrending";
import SearchByKeyword from "@src/components/PageFragment/SearchByKeyword";
import TopCategory from "@src/components/PageFragment/TopCategory";
import Header from "@src/components/PageFragment/Header";
import Footer from "../components/PageFragment/Footer";

const page = () => {
	return (
		<AppLayout>
			<div className='bg-black-400 mb-72'>
				<Header />
				<PickOfTheWeek />
				<TopCategory />
				<PopularAndTrending />
				<hr className='text-[#D9D9D99C] my-10' />
				<PodcastHostSuggestions />
				<hr className='text-[#D9D9D99C] my-10' />
				<DiscoverOtherListeners />
				<SearchByKeyword />
				
			</div>
		</AppLayout>
	);
};

export default page;
