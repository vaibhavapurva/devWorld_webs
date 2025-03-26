const Contact = () => {
  return (
    <>
      <div className="card card-side bg-base-300 shadow-xl m-9">
        <figure>
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1742918068~exp=1742921668~hmac=cb4dfa933e8215401db92bc0b1504410235da614c84630f3abe44d9f839a41e7&w=740"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">About DevConnect
          </h2>
          <h3 className="card-title">Empowering Developers, One Connection at a Time</h3>
          <p>In the ever-evolving world of technology, developers thrive when they are part of a strong, like-minded community. DevConnect is a revolutionary platform designed exclusively for developers to network, collaborate, and grow professionally.</p>
          <h3 className="card-title">Who is DevConnect For?</h3>
          <p>Whether you're looking for career growth, networking, or collaboration, DevConnect is the go-to platform for every developer.</p>
          <div className="card-actions justify-end">
            <p>🚀 Join DevConnect today and be a part of the future of developer networking!</p>
            <button className="btn btn-primary">Home</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
