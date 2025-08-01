import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

// Register plugins in App so they are available globally
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  );
}
