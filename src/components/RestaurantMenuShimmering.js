import React from "react";

const RestaurantMenuShimmering = () => {
  return (
    <div className="flex justify-center pt-28 w-screen">
      <div className="container w-[50%]">
        <h4 className="text-xs text-left text-[#93959f] animate-pulse">
          Home/District/Restaurant Name
        </h4>
        <div className="mx-3">
          <h1 className="font-[700] pt-8 text-2xl animate-pulse">
            Restaurant Name
          </h1>
          <div className="mt-6 bg-gradient-to-b from-white to-[#dcdce3] p-4 rounded-3xl animate-pulse">
            {/* Placeholder UI for restaurant details */}
            <div className="animate-pulse h-[200px] w-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Placeholder UI for menu */}
        <div className="animate-pulse">
          <p className="py-4 text-center leading-loose animate-pulse">
            M E N U
          </p>
          <div className="animate-pulse">
            <div className="animate-pulse w-full h-[100px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[100px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[100px] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmering;
