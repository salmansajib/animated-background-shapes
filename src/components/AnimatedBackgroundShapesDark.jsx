function AnimatedBackgroundShapesDark() {
  return (
    <div className=' relative min-h-dvh bg-zinc-950 overflow-hidden '>
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 mix-bl mix-blend-screen filter blur-xl rounded-full bg-purple-800 z-10 animate-blob '></div>
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 mix-bl mix-blend-screen filter blur-xl mx-[100px] rounded-full bg-pink-800 animate-blob animation-delay-2000 '></div>
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 mix-bl mix-blend-screen filter blur-xl -mx-[100px] rounded-full bg-orange-800 animate-blob animation-delay-2000 '></div>
    </div>
  );
}

export default AnimatedBackgroundShapesDark;
