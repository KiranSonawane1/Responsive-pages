import featuredImg from "../assets/img/featured.png"

const Feactures = () => {
    return (
        <div className="my-24 md:px-14 max-w-screen-2xl mx-auto " id="feature" >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4 mx-6">
                    <h3 className="text-2xl text-primary font-bold lg:w-1/2 mb-3">
                    Why we are better than others
                    </h3>
                    <p className="text-base text-tartiary">A simple paragraph is comprised of three major components.
                         The first sentence, which is often a 
                         declarative sentence, is called the topic sentence."
                         </p>
                      </div>
                 {/* featured cards */}
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 items-start md:gap-12  mx-8 gap-8">
                    <div className="bg-[rgba(255,255,255,0.04)]  rounded-[35px] h-96 shadow-3xl p-8 items-center
                       flex justify-center  hover:-translate-y-4 trasition-all duration-300 cursor-pointer">
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                        </div>
                     </div>
                    <div className="bg-[rgba(255,255,255,0.04)]  rounded-[35px] h-96 shadow-3xl p-8 items-center
                       flex justify-center  hover:-translate-y-4 trasition-all duration-300 cursor-pointer md:mt-16">
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)]  rounded-[35px] h-96 shadow-3xl p-8 items-center
                       flex justify-center  hover:-translate-y-4 trasition-all duration-300 cursor-pointer">
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feactures