import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {HomeIcon} from '@heroicons/react/solid'
import {
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="/twitter-icon-svg-28.jpeg" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="md:hidden xl:inline text-white ml-auto rounded-full bg-[#1d9bf0] w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img src="/pngegg.png" alt="" className="w-10 h-10 rounded-full xl:ml-2.5"/>
        <div className="text-white xl:inline sm:hidden leading-5">
          <h4 className="font-bold">Hieu Nguyen</h4>
          <p className="text-[#6e767d]">@hieunguyen</p>
        </div>
        <DotsHorizontalIcon className="h-5 sm:hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
