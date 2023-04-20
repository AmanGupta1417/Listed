const SignIn = () => {
  return (
    <div className="relative w-full h-[1024px] overflow-hidden text-left text-[72px] text-black font-montserrat">
      <div className="absolute top-[0px] left-[588px] bg-background w-[852px] h-[1024px]" />
      <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[1024px]" />
      <b className="absolute top-[464px] left-[171px] text-white">Board.</b>
      <form className="absolute top-[409px] left-[832px] w-[385px] h-[356px]">
        <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
          <input
            className="[border:none] bg-background absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs"
            type="text"
          />
        </div>
        <input
          className="[border:none] bg-field-color-darker absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs"
          type="text"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[247px] left-[30px] w-[325px] h-10">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
            <button className="cursor-pointer [border:none] p-0 bg-black absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
          </div>
          <b className="absolute top-[9px] left-[112.58px] text-base inline-block font-montserrat text-white text-center w-[101.96px] h-[21.71px]">
            Sign In
          </b>
        </button>
        <div className="absolute top-[30px] left-[30px] text-base font-lato text-black text-left">
          Email address
        </div>
        <div className="absolute top-[119px] left-[30px] text-base font-lato text-black text-left">
          Password
        </div>
        <a className="[text-decoration:none] absolute top-[208px] left-[31px] text-base font-lato text-link text-left">
          Forgot password?
        </a>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[337px] left-[62px] text-base font-lato text-center inline-block">
          <span className="text-secondary-text">{`Don’t have an account? `}</span>
          <span className="text-link">Register here</span>
        </button>
      </form>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[832px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </div>
        <div className="absolute top-[8px] left-[43px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[1037px] w-[180px] h-[30px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </button>
        <div className="absolute top-[8px] left-[46px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Apple
        </div>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </button>
      <b className="absolute top-[260px] left-[832px] text-17xl">Sign In</b>
      <div className="absolute top-[309px] left-[832px] text-base font-lato">
        Sign in to your account
      </div>
    </div>
  );
};

export default SignIn;
