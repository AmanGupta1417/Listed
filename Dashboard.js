const Dashboard = () => {
  return (
    <div className="relative bg-background w-full h-[1024px] overflow-hidden text-left text-sm text-black font-lato">
      <div className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-17xl text-white font-montserrat">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-black" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[87.92%] left-[17.86%] text-sm font-montserrat text-white text-left inline-block">
          Help
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[91.84%] left-[17.86%] text-sm font-montserrat text-white text-left inline-block">
          Contact Us
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43.64%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
          Settings
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.08%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
          Users
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30.51%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
          Schedules
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[23.94%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
          Transactions
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17.37%] left-[31.43%] text-lg font-bold font-montserrat text-white text-left inline-block">
          Dashboard
        </button>
        <img
          className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/transaction-icon.svg"
        />
        <img
          className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/schedule-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/dashboard-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/setting-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/user-icon.svg"
        />
        <b className="absolute top-[6.36%] left-[17.86%]">Board.</b>
      </div>
      <div className="absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
        </div>
        <div className="absolute top-[45px] left-[25.11px] inline-block w-[126px]">
          Total Transactions
        </div>
      </div>
      <div className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25px] inline-block w-[124px]">
          Total Revenues
        </div>
        <img
          className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose" />
        </div>
        <div className="absolute top-[45px] left-[25.21px] inline-block w-[81px]">
          Total Likes
        </div>
        <img
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
        </div>
        <img
          className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <div className="absolute top-[45px] left-[25.58px] inline-block w-[85.26px]">
          Total Users
        </div>
      </div>
      <div className="absolute top-[688px] left-[900px] w-[480px] h-64 text-xs text-icon font-montserrat">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg text-black">
          Today’s schedule
        </b>
        <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
        </div>
        <div className="absolute top-[34px] left-[398px] text-secondary-text">
          See All
        </div>
        <img
          className="absolute h-[3.13%] w-[1.04%] top-[14.84%] right-[6.25%] bottom-[82.03%] left-[92.71%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga Factory 1
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
        </div>
      </div>
      <img
        className="absolute h-[2.34%] w-[1.44%] top-[14.55%] right-[42.1%] bottom-[83.11%] left-[56.46%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/total-transactions-icon.svg"
      />
      <div className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-[24px] font-montserrat">
        <b className="absolute top-[0px] left-[0px]">Dashboard</b>
        <input
          className="[border:none] bg-[transparent] absolute top-[0px] left-[713px] w-[180px] h-[30px]"
          type="text"
          placeholder="Search..."
        />
        <img
          className="absolute top-[0px] left-[970px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute h-[66.67%] w-[1.8%] top-[16.67%] right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
