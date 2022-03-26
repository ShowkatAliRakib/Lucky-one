
import './App.css';
import Carts from './Component/Carts/Carts';
import Header from './Component/Header/Header';



function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Carts></Carts>

      <p>
      Props আর state এর মধ্যে পার্থক্য গুলোর মধ্যে props শুধু পাড়া যায় পরিবর্তন করা যায় না অর্থাৎ  অপরিবর্তনীয় , কিন্তু state পরিবর্তন করা যায় অর্থাৎ পরিবর্তনশীল stateless কম্পোনেন্টে প্রপস থাকতে পারে, কিন্তু stateless কম্পোনেন্টে sate থাকতে পারে  না, props  component কে আবার ব্যবহার যোগ্য করে তুলে,,কিন্তু sate আবার ব্যবহার যোগ্য করে তুলতে পারে না
      </p>


    </div>
  );
}

export default App;
