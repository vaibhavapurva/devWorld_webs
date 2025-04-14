const Contact = () => {
  return (
    <>
  <div className="card lg:card-side bg-base-300 shadow-xl m-9">
    
    {/* Image Section */}
    <figure className="lg:w-1/2">
      <img
        src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1742918068~exp=1742921668~hmac=cb4dfa933e8215401db92bc0b1504410235da614c84630f3abe44d9f839a41e7&w=740"
        alt="Developer Illustration"
        className="w-full h-full object-cover"
      />
    </figure>

    {/* Text Section */}
    <div className="card-body lg:w-1/2 p-6 space-y-4">
      <h2 className="card-title text-3xl">About DevConnect</h2>
      <h3 className="text-xl font-semibold text-primary">Empowering Developers, One Connection at a Time</h3>
      <p className="text-base">
        In the ever-evolving world of technology, developers thrive when they are part of a strong, like-minded community. <strong>DevConnect</strong> is a revolutionary platform designed exclusively for developers to network, collaborate, and grow professionally.
      </p>

      <h3 className="text-xl font-semibold text-primary">Who is DevConnect For?</h3>
      <p className="text-base">
        Whether you're looking for career growth, networking, or collaboration, DevConnect is the go-to platform for every developer.
      </p>

      <div className="card-actions justify-between items-center mt-4 flex-wrap">
        <p className="text-lg font-medium">🚀 Join DevConnect today and be a part of the future of developer networking!</p>
        <button className="btn btn-primary mt-2 lg:mt-0">Home</button>
      </div>
    </div>
    
  </div>
</>
  );
};

export default Contact;
