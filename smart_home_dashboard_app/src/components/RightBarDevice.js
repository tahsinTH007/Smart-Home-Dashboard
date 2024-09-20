import React from "react";
import { Refrigerator, EllipsisVertical, Tv, Gamepad2, Wifi } from 'lucide-react';

const RightBarDevice = () => {
    const devices = [
        { name:'Wi-Fi',Icon: Wifi},
        { name:'TV',Icon: Tv},
        { name:'Game',Icon: Gamepad2},
        { name:"Fridge",Icon: Refrigerator},
      ];
    
      const DeviceCard = ({ name, Icon }) => (
         <div className="w-16 h-16 flex flex-col items-center
         justify-center bg-blue-100 rounded-lg p-1
         shadow-md shadow-[_rgba(4,114,247,0.5)] cursor-pointer
         hover:bg-white transition-colors duration-300">
         <Icon className="h-5 mb-1" />
         <p className="text-sm">{name}</p>
       </div>
       
      );
  return (
    <section className="bg-blue-200 mt-6 p-3 rounded-3xl max-w-64 mx-auto">
    <div className="flex space-x-16 items-center mb-2">
      <h2 className="text-lg font-medium pl-5">All Devices</h2>
      <EllipsisVertical  />
    </div>
    <div className="grid grid-cols-2 pl-6 gap-2 ">
      {devices.map((device) => (
        <DeviceCard key={device} name={device.name} Icon={device.Icon} />
      ))}
    </div>
  </section>
  )
}

export default RightBarDevice;