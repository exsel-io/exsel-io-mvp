import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import heroImg from '../assets/hero-img.svg'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ComingSoon />
            <Footer />
        </>
    )
}

export default Home

const Hero = () => {
    return (
        <section className="py-[5rem] px-6 w-full max-w-[1600px] mx-auto flex gap-x-16">
            <div className="max-w-[40rem] mt-[5rem]">
                <h1 className="text-[80px] font-bold leading-[80px]">Let&rsquo;s Learn</h1>
                <h2 className="text-[48px] font-semibold">Beyond The Limits</h2>
                <p className="my-2">Providing them with the opportunity to gain expertise
                    and employment in various emerging technologies
                    such as Web3, AI, Blockchain, Cybersecurity, and others.</p>
                <button className="bg-primary text-white rounded-md px-8 py-3 mt-5 font-semibold">Become a Student</button>
            </div>
            <div>
                <img src={heroImg} alt="Women Studying together" />
            </div>
        </section>
    )
}

// Coming Soon 

const ComingSoon = () => {

    const data = ["You are a female living in the MENA region", "You want to create more fun & financial freedom in your life","You have an interest in Web3, Metaverse, Blockchain, IOT, Machine Learning, AI and other emerging tech","You are looking to upskill and stay ahead of the curve","You are an investor looking to expand your knowledge and investment opportunities in this area","You are ready to disrupt the emerging tech industry"]
    
    
    return (
        <section className="px-6">
            <div className="coming-soon-bg mx-auto w-full max-w-[40rem] rounded-xl">
                <div className="px-10 py-16 backdrop-blur-[2px] max-w-[35rem] mx-auto">
                    <header className="text-center text-white">
                    <h1 className="text-[40px] text-white font-bold">Coming Soon!</h1>
                    <h2 className="font-semibold text-[22px]">Sign Up To Be Notified When We Launch</h2>
                    <p className="text-[19px]">You may be interested in our launch if:</p>
                    </header>

                    <div className="text-white pt-5">
                        {
                            data.map((d, i) => (
                                <p key={i} className="before:content-['-'] before:absolute before:left-0 pl-3 mb-2 relative">{d}</p>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-y-6 mt-10">
                        <input className="py-2 rounded-md border-2 outline-0 border-[#D8BB78] bg-[#ffffff4d] text-white text-center" placeholder="Your First Name"/>
                        <input className="py-2 rounded-md border-2 outline-0 border-[#D8BB78] bg-[#ffffff4d] text-white text-center" type="email" placeholder="Your e-mail"/>
                        <button className="bg-[#D8BB78] rounded-md text-white font-semibold py-3">Join</button>
                    </div>
                </div>

            </div>
        </section>
    )
}