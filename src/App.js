
import './App.css';
import Carts from './Component/Carts/Carts';
import Header from './Component/Header/Header';



function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Carts></Carts>

      <p className='Question'>
        <h1>Question-01 : Props আর Sate এর মধ্যে পার্থক্য ???</h1>
         Ans :              Props আর state এর মধ্যে পার্থক্য গুলোর মধ্যে props শুধু পাড়া যায় পরিবর্তন করা যায় না অর্থাৎ  অপরিবর্তনীয় , কিন্তু state পরিবর্তন করা যায় অর্থাৎ পরিবর্তনশীল stateless কম্পোনেন্টে প্রপস থাকতে পারে, কিন্তু stateless কম্পোনেন্টে sate থাকতে পারে  না, props  component কে আবার ব্যবহার যোগ্য করে তুলে,,কিন্তু sate আবার ব্যবহার যোগ্য করে তুলতে পারে না
      </p>


      <p className='Question'>
      <h1>Question-02 :useState কিভাবে কাজ করে??</h1>
      Ans : useSate এ 1ste একটা variable  সেট করতে হয় তারপর useState এ ডাটা সেট করার জন্য set দিয়ে একটা function us করতে হয়, এবং useState এ একটা ইনিসিয়াল ভেলো দিতে হয়, useState টা useEffect থেকে সেট কৃত ডাটা নিয়ে, ভেরিয়েবল দ্বারা কনট্রোল করে
      </p>

    </div>
  );
}

export default App;
