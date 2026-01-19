import React from "react";

function Blog() {
  return (
    <div>
      <div className="lg:pt-40 pt-28 px-6 flex justify-center">
        <div className="mb-20 rounded-xl p-15 bg-white shadow-2xl shadow-black">
          
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center">
            FreshMenu Blog
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Healthy recipes, nutrition tips & smart food guides
          </p>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            
            <div className="p-8 rounded-2xl cursor-pointer transition-all duration-500 
                            hover:-translate-y-2 hover:shadow-xl
                            bg-pink-500/20 to-pink-100
                            border-2 border-transparent hover:border-[#F9CE10]">
              <h2 className="text-xl font-semibold">Healthy Recipes</h2>
              <p className="text-sm text-gray-600 mt-2">
                Easy & nutritious meals for everyday life
              </p>
            </div>

            <div className="p-8 rounded-2xl cursor-pointer transition-all duration-500 
                            hover:-translate-y-2 hover:shadow-xl
                            bg-pink-500/20 to-pink-100
                            border-2 border-transparent hover:border-[#F9CE10]">
              <h2 className="text-xl font-semibold">Health & Nutrition</h2>
              <p className="text-sm text-gray-600 mt-2">
                Learn what your body truly needs
              </p>
            </div>

            <div className="p-8 rounded-2xl cursor-pointer transition-all duration-500 
                            hover:-translate-y-2 hover:shadow-xl
                            bg-pink-500/20 to-pink-100
                            border-2 border-transparent hover:border-[#F9CE10]">
              <h2 className="text-xl font-semibold">Guides</h2>
              <p className="text-sm text-gray-600 mt-2">
                Step-by-step food & lifestyle guides
              </p>
            </div>

            <div className="p-8 rounded-2xl cursor-pointer transition-all duration-500 
                            hover:-translate-y-2 hover:shadow-xl
                            bg-pink-500/20 to-pink-100
                            border-2 border-transparent hover:border-[#F9CE10]">
              <h2 className="text-xl font-semibold">Health Tips</h2>
              <p className="text-sm text-gray-600 mt-2">
                Small habits that make a big difference
              </p>
            </div>

            <div className="p-8 rounded-2xl cursor-pointer transition-all duration-500 
                            hover:-translate-y-2 hover:shadow-xl
                            bg-pink-500/20 to-pink-100
                            border-2 border-transparent hover:border-[#F9CE10]">
              <h2 className="text-xl font-semibold">Diet Plans</h2>
              <p className="text-sm text-gray-600 mt-2">
                Balanced plans for healthy living
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
