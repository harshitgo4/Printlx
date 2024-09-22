const TalkToSales = () => {
    return (
      <div
        className="talk-to-sales-wrapper-2 text-center my-6 p-6 rounded-md"
        style={{
          background: 'linear-gradient(135deg, #6b7280, #10b981)',
        }}
      >
        <h4 className="text-lg font-semibold mb-4 text-white">Are you a large business looking for custom solutions?</h4>
        <a href="/contact-sales/" target="_blank">
          <button
            className="px-6 py-3 rounded-md text-black hover:opacity-90 transition-all bg-slate-50"
          >
            Talk to sales
          </button>
        </a>
      </div>
    );
  };
  
  export default TalkToSales;
  