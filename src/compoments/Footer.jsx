const Footer = () => {
  return (
    <>
  <footer className="footer flex flex-wrap justify-between bg-base-200 text-base-content p-10">
    
    {/* Services */}
    <nav className="min-w-[150px]">
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>

    {/* Company */}
    <nav className="min-w-[150px]">
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>

    {/* Legal */}
    <nav className="min-w-[150px]">
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>

    {/* Newsletter */}
    <form className="max-w-xs w-full">
      <h6 className="footer-title">Newsletter</h6>
      <fieldset className="form-control">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item w-full"
          />
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>

  </footer>
</>

  );
};

export default Footer;
