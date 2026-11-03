import bgImg from "./assets/earn.png"


function App() {
  return (
    <>
      <h1 className="text-twentytwo font-extrabold text-primary">hello siam</h1>
      <h6>me</h6>
      <div className="group h-100 w-110  rounded-[10px]  border-4 border-violet-700 border-dashed py-6 mt-10 ml-5 mb-2 mr-15   hover:w-150 hover:h-120 transition-all duration-300 relative after:absolute after:content[''] after:size-40 after:bg-red-600 after:rounded-full after:left-1/2 top-1/2 after:-translate-x-1/2 after:-translate-y-1/2" style={{ backgroundImage: `url(${bgImg})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat" }}>
        <p className="text-white relative z-10" >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minus
          perferendis harum error tempore nesciunt fuga doloremque ut blanditiis
          aspernatur eius et unde aliquam, ex ratione nemo, veniam autem sequi
          incidunt eum est praesentium! Quia, iste! Deserunt, magnam culpa sint
          sapiente illum tempora officia. Quisquam quis odio laborum tenetur
          repellat.
        </p>

        {/* <div className="bg-black size-40 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500 z-20"></div> */}
      </div>
      <div className="h-150 w-150 bg-circle rounded-[50%] border-8 border-blue-500 border-dotted"></div>
      <div className="flex gap-5 justify-end flex-wrap">
        {[0,1,2,3,4].map((item)=>(
          <div key={item} className="size-40 bg-red-600"></div>
        ))

        }
         {/* <div className="size-40 bg-blue-700"></div> */}
      </div>
    </>
  );
}

export default App;
