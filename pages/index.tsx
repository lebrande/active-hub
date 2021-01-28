import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome on Active Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="text-gray-700 body-font">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
            <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
              <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
                Medium lenght display headline.
              </h1>
              <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for
                your landing page.
              </p>
              <div className="flex justify-center">
                <input className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-purple-700 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white"
                  placeholder="Your Email"
                  type="email" />
                <button
                  className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
                  Action
                  </button>
              </div>
              <p className="w-full mt-2 mb-8 text-sm text-left text-gray-600">
                Neutra shabby chic ramps, viral fixie.
              </p>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img className="object-cover object-center rounded-lg "
                alt="hero"
                src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
