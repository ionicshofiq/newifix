import {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import phoneImage from "../../assets/tab1_phome1.webp";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import 'swiper/css/virtual';
import { Virtual } from 'swiper/modules';

const Tab1 = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://erpmethods.vercel.app/gets/Website Item`, {
      headers: {
        url: "https://ecommerce.ionicerp.xyz/",
        api_secret: "f4393c419474a1b",
        api_key: "84859bedced40f4",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);



  return (
		<div className='my-10 '>
			<div className=' my-10  bg-[rgb(242,239,239)] h-[400px]'>
				<div className='max-w-[1200px] mx-auto'>
					<div className='flex justify-between pt-10'>
						<h1 className='text-4xl font-semibold'>
							Get Your <br />{' '}
							<span className='text-[#F96331]'>
								Favourite Accessories
							</span>
						</h1>
						<p className='text-xl'>View More Products</p>
					</div>
					<h1 className=' text-3xl text-center pt-10'>
						<span className='text-[#F96331]'>TOP</span> SELLING
					</h1>
				</div>
			</div>
			<div className='max-w-[1200px] mx-auto -mt-48'>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
				>
					<TabList
						role='tablist'
						className='text-center tabs-bordered bg-transparent '
					>
						<Tab
							role='tab'
							className='tab bg-transparen focus:outline-none focus:ring focus:ring-violet-300'
						>
							Case And Protection
						</Tab>
						<Tab
							role='tab'
							className='tab bg-transparent focus:outline-none focus:ring focus:ring-violet-300'
						>
							Battery
						</Tab>
						<Tab
							role='tab'
							className='tab bg-transparent focus:outline-none focus:ring focus:ring-violet-300'
						>
							Headphones And Speakers
						</Tab>
						<Tab
							role='tab'
							className='tab bg-transparent focus:outline-none focus:ring focus:ring-violet-300'
						>
							Power And Cables
						</Tab>
					</TabList>
					<TabPanel className='bg-transparent'>
						<Swiper
							virtual
							slidesPerView={4}
							spaceBetween={30}
							modules={[Virtual, Pagination]}
							pagination={{
								clickable: true,
							}}
							className='mySwiper'
						>
							{items.map((item, index) => (
								<SwiperSlide key={items} virtualIndex={index}>
									<div className='card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]'>
										<figure>
											<img src={`https://ecommerce.ionicerp.xyz${item?.thumbnail}`} />
										</figure>
										<div className='card-body'>
											<h2 className='text-center font-medium'>
												{item.item_group}
												<br />
												{item.web_item_name} <br />{' '}
												Technology Screen Protector
											</h2>
											<p className='text-center  font-medium'>
												1000 TK
											</p>
											<div className='card-actions justify-center'>
												<button className='btn bg-transparent border-[#F96331] border-2 rounded-md w-36'>
													Add to cart
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}

							
						</Swiper>
					</TabPanel>
					<TabPanel className='bg-transparent'>
						<Swiper
							virtual
							slidesPerView={4}
							spaceBetween={30}
							modules={[Virtual, Pagination]}
							pagination={{
								clickable: true,
							}}
							className='mySwiper'
						>
							{items.map((item, index) => (
								<SwiperSlide key={items} virtualIndex={index}>
									<div className='card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]'>
										<figure>
											<img src={`https://ecommerce.ionicerp.xyz${item?.thumbnail}`} />
										</figure>
										<div className='card-body'>
											<h2 className='text-center font-medium'>
												{item.item_group}
												<br />
												{item.web_item_name} <br />{' '}
												Technology Screen Protector
											</h2>
											<p className='text-center  font-medium'>
												1000 TK
											</p>
											<div className='card-actions justify-center'>
												<button className='btn bg-transparent border-[#F96331] border-2 rounded-md w-36'>
													Add to cart
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}

							
						</Swiper>
					</TabPanel>
					<TabPanel className='bg-transparent'>
						<Swiper
							virtual
							slidesPerView={4}
							spaceBetween={30}
							modules={[Virtual, Pagination]}
							pagination={{
								clickable: true,
							}}
							className='mySwiper'
						>
							{items.map((item, index) => (
								<SwiperSlide key={items} virtualIndex={index}>
									<div className='card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]'>
										<figure>
											<img src={`https://ecommerce.ionicerp.xyz${item?.thumbnail}`} />
										</figure>
										<div className='card-body'>
											<h2 className='text-center font-medium'>
												{item.item_group}
												<br />
												{item.web_item_name} <br />{' '}
												Technology Screen Protector
											</h2>
											<p className='text-center  font-medium'>
												1000 TK
											</p>
											<div className='card-actions justify-center'>
												<button className='btn bg-transparent border-[#F96331] border-2 rounded-md w-36'>
													Add to cart
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}

							
						</Swiper>
					</TabPanel>
					<TabPanel className='bg-transparent'>
						<Swiper
							virtual
							slidesPerView={4}
							spaceBetween={30}
							modules={[Virtual, Pagination]}
							pagination={{
								clickable: true,
							}}
							className='mySwiper'
						>
							{items.map((item, index) => (
								<SwiperSlide key={items} virtualIndex={index}>
									<div className='card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]'>
										<figure>
											<img src={`https://ecommerce.ionicerp.xyz${item?.thumbnail}`} />
										</figure>
										<div className='card-body'>
											<h2 className='text-center font-medium'>
												{item.item_group}
												<br />
												{item.web_item_name} <br />{' '}
												Technology Screen Protector
											</h2>
											<p className='text-center  font-medium'>
												1000 TK
											</p>
											<div className='card-actions justify-center'>
												<button className='btn bg-transparent border-[#F96331] border-2 rounded-md w-36'>
													Add to cart
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}

							
						</Swiper>
					</TabPanel>
				
				</Tabs>
			</div>
		</div>
  );
};

export default Tab1;
