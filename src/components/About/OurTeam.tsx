import Header from "../shared/Title";

const OurTeam = () => {
  return (
    <section>
      <div className="container px-6 py-8 mx-auto">
        <Header header="Our Team" description="Meet our teammates" />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
              <span className="mt-1 font-medium text-gray-600">CEO</span>
              <p className="mt-2 text-gray-500">
                Ahmed is a visionary leader with over 10 years of experience in
                the fitness industry. He is passionate about creating innovative
                solutions that empower individuals to achieve their health
                goals.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://i.ibb.co.com/2cj4p63/Team-Card-3.png"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Jane Doe</h3>
              <span className="mt-1 font-medium text-gray-600">Co-founder</span>
              <p className="mt-2 text-gray-500">
                Jane is a fitness enthusiast and entrepreneur, dedicated to
                building a community that encourages healthy living. With a
                background in nutrition and wellness, she leads our outreach
                initiatives.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Steve Ben</h3>
              <span className="mt-1 font-medium text-gray-600">Marketer</span>
              <p className="mt-2 text-gray-500">
                Steve is a marketing specialist with a knack for digital
                strategies. His creative campaigns have driven growth and
                engagement, making him an invaluable asset to our team.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://i.ibb.co.com/vX2Djxk/Team-Card-4.png"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">
                Patterson Johnson
              </h3>
              <span className="mt-1 font-medium text-gray-600">
                Software Engineer
              </span>
              <p className="mt-2 text-gray-500">
                Patterson is a talented software engineer who loves building
                user-friendly applications. His passion for technology and
                innovation helps drive our platform forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
