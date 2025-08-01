import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';

// Register plugins in App so they are available globally
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
        <Navbar />
    </main>
  );
}
