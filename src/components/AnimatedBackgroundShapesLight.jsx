function AnimatedBackgroundShapesLight() {
  return (
    <div className=' bg-gray-50 min-h-svh flex items-center justify-center px-16 '>
      <div className=' relative w-full max-w-lg '>
        <div className=' absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob '></div>
        <div className=' absolute top-0 right-14 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 '></div>
        <div className=' absolute top-8 right-[150px] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 '></div>
      </div>
      <h2 className=' absolute bottom-5 left-5 px-6 py-3 bg-gradient-to-r from-lime-400 to-teal-400 rounded-md text-lg font-medium '>
        Scroll Down
      </h2>
    </div>
  );
}

export default AnimatedBackgroundShapesLight;
