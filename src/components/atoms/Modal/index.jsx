export default function Modal(props) {
  const { showPopup, setShowWindow } = props;

  return (
    <div>
      <div>
        {showPopup ? (
          <div>
            <div className="flex gap-4 justify-center mt-5">
              <div className="bg-white p-[120px] rounded border border-black">
                <div className="shadow-lg shadow-indigo-500/40"></div>
                <button>iya</button>
                <button
                  onClick={() => {
                    setShowWindow(false);
                  }}
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={showPopup ? "blur-sm bg-white/30" : " blur-none"}>
        <div
          onClick={() => {
            setShowWindow(true);
          }}
        >
          logout
        </div>
      </div>
    </div>
  );
}
